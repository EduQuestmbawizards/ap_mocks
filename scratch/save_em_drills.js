const fs = require('fs');
const vm = require('vm');

const emDrills = JSON.parse(fs.readFileSync('scratch/topic_em_drills.json', 'utf8'));

const questionsJsContent = fs.readFileSync('questions.js', 'utf8');
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(questionsJsContent.replace('const AP_TEST_DATA', 'this.AP_TEST_DATA'), sandbox);
const AP_TEST_DATA = sandbox.AP_TEST_DATA;

// Update ap-topic-physc-em-drills
AP_TEST_DATA['ap-topic-physc-em-drills'] = {
    id: 'ap-topic-physc-em-drills',
    title: 'AP Physics C: High-Yield E&M Skill Drills',
    testType: 'Topic Test',
    subject: 'ap-phys-c-em',
    topic: 'Electricity & Magnetism Skill Drills',
    timeLimitMinutes: 35,
    totalQuestions: emDrills.length,
    questions: emDrills
};

// Also create ap-topic-physc-em-drills-master
AP_TEST_DATA['ap-topic-physc-em-mastery'] = {
    id: 'ap-topic-physc-em-mastery',
    title: 'AP Physics C: Electrostatics, Circuits & Electromagnetism Mastery',
    testType: 'Topic Test',
    subject: 'ap-phys-c-em',
    topic: 'Electrostatics, Circuits & Electromagnetism',
    timeLimitMinutes: 35,
    totalQuestions: emDrills.length,
    questions: emDrills
};

const newContent = 'const AP_TEST_DATA = ' + JSON.stringify(AP_TEST_DATA, null, 2) + ';\n';
fs.writeFileSync('questions.js', newContent, 'utf8');
console.log('Successfully updated questions.js with E&M drills!');
