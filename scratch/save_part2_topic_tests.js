const fs = require('fs');
const vm = require('vm');

const momentum = JSON.parse(fs.readFileSync('scratch/topic_momentum.json', 'utf8'));
const rotation = JSON.parse(fs.readFileSync('scratch/topic_rotation.json', 'utf8'));
const shm = JSON.parse(fs.readFileSync('scratch/topic_shm.json', 'utf8'));
const gravitation = JSON.parse(fs.readFileSync('scratch/topic_gravitation.json', 'utf8'));
const combined = JSON.parse(fs.readFileSync('scratch/combined_mrsg_questions.json', 'utf8'));

const questionsJsContent = fs.readFileSync('questions.js', 'utf8');
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(questionsJsContent.replace('const AP_TEST_DATA', 'this.AP_TEST_DATA'), sandbox);
const AP_TEST_DATA = sandbox.AP_TEST_DATA;

// 1. Momentum
AP_TEST_DATA['ap-topic-physc-momentum'] = {
    id: 'ap-topic-physc-momentum',
    title: 'AP Physics C: Linear Momentum, Impulse & Center of Mass',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Linear Momentum, Impulse & Center of Mass',
    timeLimitMinutes: 18,
    totalQuestions: momentum.length,
    questions: momentum
};

// 2. Rotation
AP_TEST_DATA['ap-topic-physc-rotation'] = {
    id: 'ap-topic-physc-rotation',
    title: 'AP Physics C: Rotational Inertia, Torque & Angular Momentum',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Rotational Inertia, Torque & Angular Momentum',
    timeLimitMinutes: 18,
    totalQuestions: rotation.length,
    questions: rotation
};

// 3. SHM
AP_TEST_DATA['ap-topic-physc-shm'] = {
    id: 'ap-topic-physc-shm',
    title: 'AP Physics C: Simple Harmonic Motion & Restoring Forces',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Simple Harmonic Motion & Restoring Forces',
    timeLimitMinutes: 12,
    totalQuestions: shm.length,
    questions: shm
};

// 4. Gravitation
AP_TEST_DATA['ap-topic-physc-gravitation'] = {
    id: 'ap-topic-physc-gravitation',
    title: 'AP Physics C: Planetary Gravitation & Circular Orbits',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Planetary Gravitation & Circular Orbits',
    timeLimitMinutes: 12,
    totalQuestions: gravitation.length,
    questions: gravitation
};

// 5. Combined Advanced Mechanics Test
AP_TEST_DATA['ap-topic-physc-momentum-rotation-shm-grav'] = {
    id: 'ap-topic-physc-momentum-rotation-shm-grav',
    title: 'AP Physics C: Momentum, Rotation, Oscillations & Gravitation',
    testType: 'Topic Test',
    subject: 'ap-phys-c-mech',
    topic: 'Momentum, Rotation, Oscillations & Gravitation',
    timeLimitMinutes: 45,
    totalQuestions: combined.length,
    questions: combined
};

const newContent = 'const AP_TEST_DATA = ' + JSON.stringify(AP_TEST_DATA, null, 2) + ';\n';
fs.writeFileSync('questions.js', newContent, 'utf8');
console.log('Successfully updated questions.js with all Part 2 topic tests!');
