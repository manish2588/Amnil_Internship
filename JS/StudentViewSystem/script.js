// 10 dummy student objects
const students = [
  { id: 1, name: "Hari Prasad", age: 8, birthYear: 2015, grade: "3rd" },
  { id: 2, name: "Ram Thapa", age: 12, birthYear: 2011, grade: "7th" },
  { id: 3, name: "Mohan Kumar", age: 6, birthYear: 2017, grade: "1st" },
  { id: 4, name: "Rahul Poudel", age: 15, birthYear: 2008, grade: "10th" },
  { id: 5, name: "Bishal Subedi", age: 9, birthYear: 2014, grade: "4th" },
  { id: 6, name: "Student", age: 13, birthYear: 2010, grade: "8th" },
  { id: 7, name: "Siganey", age: 7, birthYear: 2016, grade: "2nd" },
  { id: 8, name: "Suvam Poudel", age: 11, birthYear: 2012, grade: "6th" },
  { id: 9, name: "Saroj Thapa", age: 14, birthYear: 2009, grade: "9th" },
  { id: 10, name: "Mr. Developer", age: 10, birthYear: 2013, grade: "5th" },
];

// reusable  function
function renderStudents(title, list, formatter) {
  const output = document.getElementById("output");
  let html = `<h2>${title}</h2>`;
  html += `<div class="result"><strong>Count:</strong> ${list.length} students</div>`;

  if (list.length > 0) {
    html += list.map(formatter).join(""); 
  } else {
    html += `<div class="result">No students found.</div>`;
  }

  output.innerHTML = html;
}

// Show all students
function showAllStudents() {
  renderStudents(
    "All Students",
    students,
    (s) => `
    <div class="student-card">
      <strong>${s.name}</strong> - Age: ${s.age}, Grade: ${s.grade}, Born: ${s.birthYear}
    </div>
  `
  );
}

// Show only names
function showNamesOnly() {
  renderStudents(
    "Names Only",
    students,
    (s) => `
    <div class="name-item"><strong>${s.name}</strong></div>
  `
  );
}

// Students younger than 10
function filterAgeLessThan10() {
  const youngStudents = students.filter((s) => s.age < 10);
  renderStudents(
    "Students Under 10 Years Old",
    youngStudents,
    (s) => `
    <div class="student-card">
      <strong>${s.name}</strong> - Age: ${s.age}, Grade: ${s.grade}
    </div>
  `
  );
}

// Gen Z students
function showGenZStudents() {
  const genZ = students.filter(
    (s) => s.birthYear >= 2007 && s.birthYear <= 2012
  );
  renderStudents(
    "Gen Z Students Only (Born 2007–2012)",
    genZ,
    (s) => `
    <div class="student-card">
      <strong>${s.name}</strong> - Age: ${s.age}, Grade: ${s.grade}, Born: ${s.birthYear}
    </div>
  `
  );
}

// Default on load
window.onload = showAllStudents;
