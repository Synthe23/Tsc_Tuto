type Student = {
  id: number | string;
  name: string;
  marks: number;
  grade: "O" | "A" | "B" | "C" | "D" | "F";
};

let students: Student[] = [
  { id: 1, name: "Omm", marks: 87, grade: "B" },
  { id: 2, name: "Soyam", marks: 90, grade: "A" },
  { id: 3, name: "Alok", marks: 82, grade: "B" },
  { id: 4, name: "Soyam", marks: 92, grade: "A" },
  { id: 5, name: "Roushan", marks: 86, grade: "B" },
  { id: 6, name: "Bignesh", marks: 96, grade: "O" },
  { id: 7, name: "Jyoti", marks: 88, grade: "B" },
];

// Fncction to print all the students
function printStudents(): void {
  for (const student of students) {
    console.log(
      "ID: ",
      student.id,
      "|",
      "Name:",
      student.name,
      "|",
      "Marks:",
      student.marks,
      "|",
      "Grade:",
      student.grade
    );
  }
}
printStudents();

// Function to find the student by Id
function findStudentsById(id: number): void {
  for (const student of students) {
    if (id === student.id) {
      console.log("Student with id", id, "is:", student.name);
    }
  }
  if (id > students.length) {
    console.log("Invalid ID input!");
  }
}
findStudentsById(3);

// Function to add a new student
function addStudent(
  id: string | number,
  name: string,
  marks: number,
  grade: string
): void {

  for (const student of students) {
    if (id === student.id) {
      console.log("Duplicate ID entries not allowed!");
      return;
    }
  }

  const newStudent: Student = {
    id,
    name,
    marks,
    grade,
  };

  students.push(newStudent);

  console.log("Student added successfully!");
}


// Function to calculate Average marks
function calculateAverage(): number {
  let sum = 0;
  for (const student of students) {
    sum += student.marks;
  }
  return sum / students.length;
}

console.log("Average marks:", calculateAverage().toFixed(1));
