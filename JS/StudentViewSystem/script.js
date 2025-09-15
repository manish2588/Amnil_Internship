// 10 dummy student objects
const students = [
    { id: 1, name: "Hari Prasad", age: 8, birthYear: 2015, grade: "3rd" },
    { id: 2, name: "Ram Thapa", age: 12, birthYear: 2011, grade: "7th" },
    { id: 3, name: "Mohan Kumar", age: 6, birthYear: 2017, grade: "1st" },
    { id: 4, name: "Rahul Poudel", age: 15, birthYear: 2008, grade: "10th" },
    { id: 5, name: "Bishal Subedi", age: 9, birthYear: 2014, grade: "4th" },
    { id: 6, name: "Student", age: 13, birthYear: 2010, grade: "8th" },
    { id: 7, name: "Siganey ", age: 7, birthYear: 2016, grade: "2nd" },
    { id: 8, name: "Suvam Poudel", age: 11, birthYear: 2012, grade: "6th" },
    { id: 9, name: "Saroj Thapa", age: 14, birthYear: 2009, grade: "9th" },
    { id: 10, name: "Mr. developer", age: 10, birthYear: 2013, grade: "5th" }
];

function showAllStudents() {
    const output = document.getElementById('output');
    let html = '<h2>All Students</h2>';
    
    students.forEach(student => {
        html += `
            <div class="student-card">
                <strong>${student.name}</strong> - Age: ${student.age}, Grade: ${student.grade}, Born: ${student.birthYear}
            </div>
        `;
    });
    
    output.innerHTML = html;
}

// Get list of names only
function showNamesOnly() {
    const names = students.map(student => student.name);
    const output = document.getElementById('output');
    
    let html = '<h2>Names Only</h2>';
    html += `<div class="result"><strong>Count:</strong> ${names.length} students</div>`;
    
    names.forEach(name => {
        html += `<div class="name-item"><strong>${name}</strong></div>`;
    });
    
    output.innerHTML = html;
}

// Filter age less than 10
function filterAgeLessThan10() {
    const youngStudents = students.filter(student => student.age < 10);
    const output = document.getElementById('output');
    
    let html = '<h2>Students Under 10 Years Old</h2>';
    html += `<div class="result"><strong>Count:</strong> ${youngStudents.length} students</div>`;
    
    youngStudents.forEach(student => {
        html += `
            <div class="student-card">
                <strong>${student.name}</strong> - Age: ${student.age}, Grade: ${student.grade}
            </div>
        `;
    });
    
    output.innerHTML = html;
}

// Check if every student is Gen Z (born 1997-2012, but for school age kids, we'll use 2007-2012)
function checkIfAllGenZ() {
    // Gen Z is typically defined as born 1997-2012
    // For school-age children, we'll consider Gen Z as born 2007-2012
    const isAllGenZ = students.every(student => student.birthYear >= 2007 && student.birthYear <= 2012);
    
    const output = document.getElementById('output');
    let html = '<h2>Gen Z Check (Born 2007-2012)</h2>';
    html += `<div class="result">
                <strong>Are ALL students Gen Z?</strong> ${isAllGenZ ? '<span class="check-icon">✅ Yes</span>' : '<span class="cross-icon">❌ No</span>'}
             </div>`;
    
    html += '<h3>Individual Check:</h3>';
    students.forEach(student => {
        const isGenZ = student.birthYear >= 2007 && student.birthYear <= 2012;
        html += `
            <div class="student-card">
                <strong>${student.name}</strong> (Born: ${student.birthYear}) - 
                ${isGenZ ? '<span class="check-icon">✅ Gen Z</span>' : '<span class="cross-icon">❌ Not Gen Z</span>'}
            </div>
        `;
    });
    
    output.innerHTML = html;
}

// List only Gen Z students
function showGenZStudents() {
    const genZStudents = students.filter(student => student.birthYear >= 2007 && student.birthYear <= 2012);
    
    const output = document.getElementById('output');
    let html = '<h2>Gen Z Students Only (Born 2007-2012)</h2>';
    html += `<div class="result"><strong>Count:</strong> ${genZStudents.length} Gen Z students</div>`;
    
    if (genZStudents.length > 0) {
        genZStudents.forEach(student => {
            html += `
                <div class="student-card">
                    <strong>${student.name}</strong> - Age: ${student.age}, Grade: ${student.grade}, Born: ${student.birthYear}
                </div>
            `;
        });
    } else {
        html += '<div class="result">No Gen Z students found.</div>';
    }
    
    output.innerHTML = html;
}

// Show all students on page load
window.onload = function() {
    showAllStudents();
};