const fs = require('fs');
const vm = require('vm');

const combined = JSON.parse(fs.readFileSync('scratch/combined_kfe_questions.json', 'utf8'));

const questionsJsContent = fs.readFileSync('questions.js', 'utf8');
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(questionsJsContent.replace('const AP_TEST_DATA', 'this.AP_TEST_DATA'), sandbox);
const AP_TEST_DATA = sandbox.AP_TEST_DATA;

// Add combined test
AP_TEST_DATA['ap-topic-physc-kinematics-forces-energy'] = {
    id: 'ap-topic-physc-kinematics-forces-energy',
    title: 'AP Physics C: Kinematics, Forces & Work-Energy Mastery',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Kinematics, Forces & Energy',
    timeLimitMinutes: 45,
    totalQuestions: combined.length,
    questions: combined
};

// Also sync with ap-topic-physc-mech-drills
AP_TEST_DATA['ap-topic-physc-mech-drills'] = {
    id: 'ap-topic-physc-mech-drills',
    title: 'AP Physics C: Kinematics, Forces & Work-Energy Mastery',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Kinematics, Forces & Energy',
    timeLimitMinutes: 45,
    totalQuestions: combined.length,
    questions: combined
};

const newContent = 'const AP_TEST_DATA = ' + JSON.stringify(AP_TEST_DATA, null, 2) + ';\n';
fs.writeFileSync('questions.js', newContent, 'utf8');
console.log('Successfully updated questions.js with the combined 34-question test!');
