// Specific Question Bank for Test: ap-topic-csp-cyber
const AP_TEST_DATA = {
    "ap-topic-csp-cyber": {
        "id": "ap-topic-csp-cyber",
        "title": "AP Computer Science Principles: Cybersecurity & Networks",
        "subject": "AP Computer Science Principles",
        "category": "Math & CS",
        "level": "Topic Test",
        "timeLimitMinutes": 20,
        "questionsCount": 10,
        "questions": [
            {
                "id": "ap-topic-csp-cyber_q1",
                "topic": "Networks",
                "difficulty": "easy",
                "question": "Which protocol ensures secure, encrypted communication over the internet?",
                "options": [
                    "HTTP",
                    "HTTPS",
                    "FTP",
                    "IP"
                ],
                "answer": "B",
                "explanation": "HTTPS encrypts communications using SSL/TLS."
            },
            {
                "id": "ap-topic-csp-cyber_q2",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "How does public key (asymmetric) cryptography differ fundamentally from symmetric encryption?",
                "options": [
                    "Asymmetric encryption uses a mathematically paired public key for encryption and private key for decryption, whereas symmetric encryption uses a single shared secret key for both",
                    "Asymmetric encryption cannot be used over the Internet, whereas symmetric encryption is Internet-native",
                    "Asymmetric encryption only encrypts integer data, whereas symmetric encryption encrypts strings",
                    "Asymmetric encryption does not require any mathematical algorithms"
                ],
                "answer": "A",
                "explanation": "Symmetric encryption uses the same shared key to encrypt and decrypt data. Asymmetric (public key) encryption uses a key pair: anyone can encrypt using the recipient's public key, but only the recipient's private key can decrypt it.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q3",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What is the primary role of a Certificate Authority (CA) in secure web communications (HTTPS)?",
                "options": [
                    "To verify the identity of a website and digitally sign its public key certificate",
                    "To block incoming denial-of-service traffic from distributed botnets",
                    "To store user passwords in plaintext for recovery services",
                    "To convert IP addresses into human-readable domain names"
                ],
                "answer": "A",
                "explanation": "A Certificate Authority (CA) is a trusted third-party entity that validates the identity of organizations and issues digital certificates binding their domain to their public key.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q4",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What type of attack involves overwhelming an online service with malicious traffic originating from thousands of compromised IoT devices (a botnet)?",
                "options": [
                    "Distributed Denial of Service (DDoS)",
                    "Phishing attack",
                    "SQL Injection",
                    "Man-in-the-Middle (MitM) eavesdropping"
                ],
                "answer": "A",
                "explanation": "A Distributed Denial of Service (DDoS) attack harnesses multiple distributed systems (a botnet) to flood bandwidth or system resources of a targeted server until it cannot respond to legitimate users.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q5",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "Which scenario best exemplifies a multi-factor authentication (MFA) system?",
                "options": [
                    "Entering a master password and then inputting a one-time passcode sent to a smartphone",
                    "Entering a password and then entering a backup password stored on the same device",
                    "Entering a username and answering two security questions",
                    "Entering a password followed by typing an email address"
                ],
                "answer": "A",
                "explanation": "MFA requires credentials from at least two different factor categories: something you know (password), something you have (phone/token), or something you are (biometrics). A password plus a one-time code combines knowledge and possession.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q6",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What is the primary function of the Domain Name System (DNS)?",
                "options": [
                    "Translating human-readable domain names (like example.com) into numerical IP addresses",
                    "Routing packets between intermediate autonomous systems",
                    "Encrypting web traffic between client browsers and servers",
                    "Assigning MAC addresses to physical network interfaces"
                ],
                "answer": "A",
                "explanation": "DNS acts as the phonebook of the Internet, translating user-friendly domain names (e.g. `example.com`) into computer-routable IP addresses (e.g. `93.184.216.34`).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q7",
                "topic": "Cybersecurity & Networks",
                "difficulty": "hard",
                "question": "How does IPv6 solve the primary limitation of IPv4?",
                "options": [
                    "IPv6 uses 128-bit addresses, vastly expanding the available address space compared to IPv4's 32-bit addresses",
                    "IPv6 removes the need for routers on the Internet",
                    "IPv6 makes all network communications automatically unhackable without encryption",
                    "IPv6 increases physical copper wire transmission speeds tenfold"
                ],
                "answer": "A",
                "explanation": "IPv4 uses 32-bit addresses ($2^{32} \\approx 4.3$ billion addresses), which has been depleted. IPv6 uses 128-bit addresses ($2^{128} \\approx 3.4 \\times 10^{38}$ addresses), providing a virtually inexhaustible address pool.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q8",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "In computer networking, what makes packet switching resilient and fault-tolerant?",
                "options": [
                    "Packets can be independently routed along dynamic paths around network congestion or link failures",
                    "All packets are required to travel along a single dedicated copper wire reserved for the session",
                    "If any single intermediate router fails, the entire Internet automatically reboots",
                    "Packets travel without headers or destination addresses"
                ],
                "answer": "A",
                "explanation": "In packet switching, data is broken into discrete packets that navigate independently. Routers inspect headers and dynamically steer packets around congested or severed lines, ensuring network redundancy.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q9",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "Which social engineering attack tricks victims into revealing sensitive information through deceptive emails disguised as trusted institutions?",
                "options": [
                    "Phishing",
                    "Trojan horse injection",
                    "Buffer overflow",
                    "Ransomware deployment"
                ],
                "answer": "A",
                "explanation": "Phishing is a deceptive communication technique where an attacker masquerades as a trustworthy entity (e.g., bank, school admin) to lure victims into revealing credentials or financial data.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q10",
                "topic": "Cybersecurity & Networks",
                "difficulty": "hard",
                "question": "Why is Transmission Control Protocol (TCP) considered a \"reliable\" transport protocol compared to User Datagram Protocol (UDP)?",
                "options": [
                    "TCP establishes connections, verifies packet receipt with ACKs, and retransmits lost packets in order",
                    "TCP transmits packets twice as fast as UDP without error checking",
                    "TCP encrypts data at the physical layer",
                    "TCP allows data transmission without IP addresses"
                ],
                "answer": "A",
                "explanation": "TCP guarantees orderly and error-checked delivery of packets through sequence numbers, acknowledgments (ACKs), and automatic retransmission of lost packets. UDP is connectionless and does not guarantee delivery.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q11",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What is the purpose of a cryptographic hash function (such as SHA-256) in data integrity verification?",
                "options": [
                    "It produces a unique fixed-length digest such that even a tiny change to the input completely alters the output hash",
                    "It compresses large video files into zip archives without data loss",
                    "It reverses any encrypted ciphertext back into original plaintext without a key",
                    "It generates random IP addresses for home routers"
                ],
                "answer": "A",
                "explanation": "A cryptographic hash function is a one-way deterministic algorithm producing a fixed-size digest. The avalanche effect ensures that altering even one bit in the input produces a dramatically different hash, verifying data integrity.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q12",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What security threat is created when an application allows user input to be directly embedded into a database query without sanitization?",
                "options": [
                    "SQL Injection (SQLi)",
                    "DNS spoofing",
                    "Cross-Site Request Forgery (CSRF)",
                    "Zero-day hardware vulnerability"
                ],
                "answer": "A",
                "explanation": "SQL Injection occurs when malicious SQL statements are inserted into entry fields and executed by the backend database, potentially allowing unauthorized data extraction, modification, or deletion.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q13",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What is the \"digital divide\" in computer science principles?",
                "options": [
                    "The socioeconomic and geographic disparity in access to digital technologies and high-speed internet",
                    "The architectural difference between 32-bit and 64-bit processors",
                    "The mathematical division remainder operator in programming languages",
                    "The separation between client frontend code and server backend databases"
                ],
                "answer": "A",
                "explanation": "The digital divide refers to inequality regarding access to information and communication technologies (computers, broadband internet, digital literacy) based on socioeconomic, ethnic, or geographic factors.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q14",
                "topic": "Cybersecurity & Networks",
                "difficulty": "hard",
                "question": "How does HTTPS secure web communication compared to plain HTTP?",
                "options": [
                    "HTTPS uses TLS/SSL to encrypt HTTP requests and responses, ensuring confidentiality and integrity",
                    "HTTPS replaces IP routing with satellite broadcasting",
                    "HTTPS prevents websites from storing user cookies",
                    "HTTPS makes websites immune to web server hardware crashes"
                ],
                "answer": "A",
                "explanation": "HTTPS (Hypertext Transfer Protocol Secure) layers HTTP over Transport Layer Security (TLS/SSL), providing symmetric session encryption, cryptographic integrity verification, and server authentication.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q15",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What is a \"zero-day vulnerability\"?",
                "options": [
                    "A software security flaw unknown to the vendor, for which zero days have passed since discovery and no patch exists",
                    "A bug that automatically fixes itself within 24 hours",
                    "A computer clock synchronization failure occurring at midnight",
                    "A virus that erases hard drives after zero days of installation"
                ],
                "answer": "A",
                "explanation": "A zero-day vulnerability is a flaw unknown to the software creator or public, leaving systems defenseless because developers have had \"zero days\" to engineer and release a security patch.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q16",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "Which of the following is considered Personally Identifiable Information (PII)?",
                "options": [
                    "Social Security number and home address",
                    "The current weather forecast of a state",
                    "A website's public favicon image",
                    "The open-source license text of a software package"
                ],
                "answer": "A",
                "explanation": "Personally Identifiable Information (PII) is any data that could potentially identify a specific individual, such as Social Security number, home address, biometric records, or passport number.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q17",
                "topic": "Cybersecurity & Networks",
                "difficulty": "hard",
                "question": "In a Man-in-the-Middle (MitM) attack over an unsecured public Wi-Fi network, what does the attacker do?",
                "options": [
                    "Intercepts and potentially alters communication packets passing between the user and the router",
                    "Physically takes control of the user's laptop keyboard",
                    "Guesses the user's password using a rainbow table dictionary offline",
                    "Disassembles the cellular transmission tower"
                ],
                "answer": "A",
                "explanation": "In a MitM attack, the attacker secretly positions themselves between two communicating parties, intercepting, reading, and potentially tampering with transmissions in transit without either party knowing.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q18",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What is the primary function of a network firewall?",
                "options": [
                    "To monitor and filter incoming and outgoing network traffic based on predetermined security rules",
                    "To physically protect server room cables from electrical overheating",
                    "To provide backup battery power during an electrical grid failure",
                    "To compress email attachments automatically"
                ],
                "answer": "A",
                "explanation": "A firewall acts as a security gateway between internal private networks and external untrusted networks, inspecting packets and enforcing rules to block unauthorized traffic.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q19",
                "topic": "Cybersecurity & Networks",
                "difficulty": "hard",
                "question": "Why is bandwidth measured in bits per second (bps) rather than bytes per second (Bps)?",
                "options": [
                    "Networking hardware transmits data serially as individual electrical or optical bits along physical channels",
                    "Bytes cannot be transmitted over radio waves",
                    "A byte has no standardized definition in computer science",
                    "Bits are only used for software while bytes are only used for hardware"
                ],
                "answer": "A",
                "explanation": "Network transmission channels convey signals one bit at a time (serially). Network throughput and capacity are therefore standardized in bits per second (e.g., Mbps, Gbps).",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            },
            {
                "id": "ap-topic-csp-cyber_q20",
                "topic": "Cybersecurity & Networks",
                "difficulty": "medium",
                "question": "What type of malicious software encrypts a victim's files and demands financial payment in exchange for the decryption key?",
                "options": [
                    "Ransomware",
                    "Spyware",
                    "Adware",
                    "Worm"
                ],
                "answer": "A",
                "explanation": "Ransomware is malware that utilizes strong encryption to lock files on a victim's system, demanding payment (often in cryptocurrency) before supplying the decryption key.",
                "provenance": "ORIGINAL AP-ALIGNED",
                "classification": "ORIGINAL AP-ALIGNED"
            }
        ],
        "totalQuestions": 20,
        "testType": "Topic Test"
    }
};
