"use strict";
let students = [
    { id: 1, name: "Omm", marks: 87, grade: "B" },
    { id: 2, name: "Soyam", marks: 90, grade: "A" },
    { id: 3, name: "Alok", marks: 82, grade: "B" },
    { id: 4, name: "Soyam", marks: 92, grade: "A" },
    { id: 5, name: "Roushan", marks: 86, grade: "B" },
    { id: 6, name: "Bignesh", marks: 96, grade: "O" },
    { id: 7, name: "Jyoti", marks: 88, grade: "B" },
];
function printStudents() {
    for (const student of students) {
        console.log("ID: ", student.id, "|", "Name:", student.name, "|", "Marks:", student.marks, "|", "Grade:", student.grade);
    }
}
printStudents();
function findStudentsById(id) {
    for (const student of students) {
        if (id === student.id) {
            console.log("Student with id", id, "is:", student.name);
        }
    }
    if (id > students.length) {
        console.log("Invalid ID input!");
    }
}
findStudentsById(50);
// ID: 1 | Name: Omm | Marks: 87 | Grade: B
// ID: 2 | Name: Soyam | Marks: 90 | Grade: A
// ID: 3 | Name: Alok | Marks: 82 | Grade: B
