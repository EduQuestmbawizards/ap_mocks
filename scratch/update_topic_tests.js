const fs = require('fs');
const vm = require('vm');

const kin = JSON.parse(fs.readFileSync('scratch/topic_kinematics.json', 'utf8'));
const forces = JSON.parse(fs.readFileSync('scratch/topic_forces.json', 'utf8'));
const energy = JSON.parse(fs.readFileSync('scratch/topic_energy.json', 'utf8'));
const drills = JSON.parse(fs.readFileSync('scratch/topic_mech_drills.json', 'utf8'));

const questionsJsContent = fs.readFileSync('questions.js', 'utf8');
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(questionsJsContent.replace('const AP_TEST_DATA', 'this.AP_TEST_DATA'), sandbox);
const AP_TEST_DATA = sandbox.AP_TEST_DATA;

// 1. Kinematics
AP_TEST_DATA['ap-topic-physc-kinematics'] = {
    id: 'ap-topic-physc-kinematics',
    title: 'AP Physics C: Kinematics & 1D/2D Motion',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Kinematics & 1D/2D Motion',
    timeLimitMinutes: 20,
    totalQuestions: kin.length,
    questions: kin
};

// 2. Forces
AP_TEST_DATA['ap-topic-physc-forces'] = {
    id: 'ap-topic-physc-forces',
    title: "AP Physics C: Newton's Laws & Friction Dynamics",
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: "Newton's Laws & Friction Dynamics",
    timeLimitMinutes: 20,
    totalQuestions: forces.length,
    questions: forces
};

// 3. Energy
AP_TEST_DATA['ap-topic-physc-energy'] = {
    id: 'ap-topic-physc-energy',
    title: 'AP Physics C: Work-Energy Theorem, Potential & Power',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Work-Energy Theorem, Potential & Power',
    timeLimitMinutes: 18,
    totalQuestions: energy.length,
    questions: energy
};

// 4. Combined Drills
AP_TEST_DATA['ap-topic-physc-mech-drills'] = {
    id: 'ap-topic-physc-mech-drills',
    title: 'AP Physics C: High-Yield Mechanics Skill Drills',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'High-Yield Mechanics Skill Drills',
    timeLimitMinutes: 40,
    totalQuestions: drills.length,
    questions: drills
};

const newContent = 'const AP_TEST_DATA = ' + JSON.stringify(AP_TEST_DATA, null, 2) + ';\n';
fs.writeFileSync('questions.js', newContent, 'utf8');
console.log('Successfully updated questions.js with all 4 topic tests!');
