-- ============================================================
-- EDUQUEST AP PLATFORM - ADMIN REPORTS & ACCESS RLS SETUP
-- Run this once in Supabase Dashboard -> SQL Editor
-- ============================================================

-- 1. Ensure role & status columns exist and set all 3 admin accounts in public.profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'student';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

UPDATE public.profiles
SET role = 'admin',
    status = 'approved',
    has_ap_access = true,
    has_ap_diag_access = true,
    has_ap_topic_access = true,
    has_ap_mock_access = true
WHERE lower(email) IN (
    'rupali.eduquest@gmail.com',
    'admin@eduquest.com',
    'ajanta1925@gmail.com'
);

-- 2. Helper function to check admin role or allowlisted admin email
CREATE OR REPLACE FUNCTION public.is_ap_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT
        lower(COALESCE(auth.jwt() ->> 'email', '')) IN (
            'rupali.eduquest@gmail.com',
            'admin@eduquest.com',
            'ajanta1925@gmail.com'
        )
        OR EXISTS (
            SELECT 1 FROM public.profiles p
            WHERE p.id = auth.uid() AND lower(COALESCE(p.role, '')) = 'admin'
        );
$$;

-- 3. Allow Admins to read ALL student reports in public.ap_reports
DROP POLICY IF EXISTS "Admins can read all ap_reports" ON public.ap_reports;
CREATE POLICY "Admins can read all ap_reports" ON public.ap_reports
    FOR SELECT
    USING (auth.uid() = user_id OR public.is_ap_admin());

-- 4. Allow students to save test reports to ap_reports (and remove legacy block policy)
DROP POLICY IF EXISTS "Block direct client insert to ap_reports" ON public.ap_reports;
DROP POLICY IF EXISTS "Allow authenticated insert ap_reports" ON public.ap_reports;
CREATE POLICY "Allow authenticated insert ap_reports" ON public.ap_reports
    FOR INSERT
    WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- 5. Allow Admins to read & update all student permissions in profiles & ap_profiles
DROP POLICY IF EXISTS "Admins can manage all profiles" ON public.profiles;
CREATE POLICY "Admins can manage all profiles" ON public.profiles
    FOR ALL
    USING (auth.uid() = id OR public.is_ap_admin())
    WITH CHECK (auth.uid() = id OR public.is_ap_admin());

DROP POLICY IF EXISTS "Admins can manage all ap_profiles" ON public.ap_profiles;
CREATE POLICY "Admins can manage all ap_profiles" ON public.ap_profiles
    FOR ALL
    USING (auth.uid() = id OR public.is_ap_admin())
    WITH CHECK (auth.uid() = id OR public.is_ap_admin());

-- 6. RPC fallback so Admin Panel can fetch all reports reliably
CREATE OR REPLACE FUNCTION public.admin_get_ap_reports()
RETURNS SETOF public.ap_reports
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    IF NOT public.is_ap_admin() THEN
        RAISE EXCEPTION 'Admin access required';
    END IF;
    RETURN QUERY
    SELECT * FROM public.ap_reports
    ORDER BY id DESC;
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_ap_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_get_ap_reports() TO authenticated;

-- 7. Custom PDF Chapter Notes Table (ap_custom_notes) & Storage Bucket (ap-notes-pdfs)
CREATE TABLE IF NOT EXISTS public.ap_custom_notes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subject_id TEXT NOT NULL,
    subject_name TEXT NOT NULL,
    title TEXT NOT NULL,
    topics TEXT DEFAULT '',
    weightage TEXT DEFAULT 'PDF Notes',
    pdf_url TEXT NOT NULL,
    storage_path TEXT,
    file_name TEXT,
    file_size_bytes BIGINT,
    uploaded_by TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ap_custom_notes_subject ON public.ap_custom_notes (subject_id, created_at);

ALTER TABLE public.ap_custom_notes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read ap_custom_notes" ON public.ap_custom_notes;
CREATE POLICY "Anyone can read ap_custom_notes" ON public.ap_custom_notes
    FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Admins can manage ap_custom_notes" ON public.ap_custom_notes;
CREATE POLICY "Admins can manage ap_custom_notes" ON public.ap_custom_notes
    FOR ALL
    USING (public.is_ap_admin())
    WITH CHECK (public.is_ap_admin());

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('ap-notes-pdfs', 'ap-notes-pdfs', true, 52428800, ARRAY['application/pdf'])
ON CONFLICT (id) DO UPDATE
SET public = true,
    file_size_limit = 52428800,
    allowed_mime_types = ARRAY['application/pdf'];

DROP POLICY IF EXISTS "Public read ap-notes-pdfs" ON storage.objects;
CREATE POLICY "Public read ap-notes-pdfs" ON storage.objects
    FOR SELECT
    USING (bucket_id = 'ap-notes-pdfs');

DROP POLICY IF EXISTS "Admins upload ap-notes-pdfs" ON storage.objects;
CREATE POLICY "Admins upload ap-notes-pdfs" ON storage.objects
    FOR INSERT
    WITH CHECK (bucket_id = 'ap-notes-pdfs' AND public.is_ap_admin());

DROP POLICY IF EXISTS "Admins update ap-notes-pdfs" ON storage.objects;
CREATE POLICY "Admins update ap-notes-pdfs" ON storage.objects
    FOR UPDATE
    USING (bucket_id = 'ap-notes-pdfs' AND public.is_ap_admin());

DROP POLICY IF EXISTS "Admins delete ap-notes-pdfs" ON storage.objects;
CREATE POLICY "Admins delete ap-notes-pdfs" ON storage.objects
    FOR DELETE
    USING (bucket_id = 'ap-notes-pdfs' AND public.is_ap_admin());
