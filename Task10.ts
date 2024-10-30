// Student Record System:

// Define a Student class with properties like name, age, and grades.
// Use a method to calculate the average grade.
// Use an enum to represent different grade levels (e.g., Freshman, Sophomore).
enum GradeLevel {
  Freshman = "Freshman",
  Sophomore = "Sophomore",
  Junior = "Junior",
  Senior = "Senior",
}

class Student {
  constructor(
    public name: string,
    public age: number,
    public grades: number[],
    public gradeLevel: GradeLevel
  ) {}

  calculateAverage(): number {
    return (
      this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
    );
  }

  getGradeStatus(): string {
    const average = this.calculateAverage();
    if (average >= 90) return "Excellent";
    if (average >= 80) return "Very Good";
    if (average >= 70) return "Good";
    if (average >= 60) return "Pass";
    return "Needs Improvement";
  }

  getStudentInfo(): string {
    return `Name: ${this.name}
Age: ${this.age}
Grade Level: ${this.gradeLevel}
Average Grade: ${this.calculateAverage().toFixed(2)}
Status: ${this.getGradeStatus()}`;
  }
}

const students = [
  new Student("Okasha", 20, [30, 23, 32, 30], GradeLevel.Junior),
  new Student("Umar", 20, [12, 12, 13, 32], GradeLevel.Freshman),
  new Student("Ali", 20, [27, 25, 34, 33], GradeLevel.Senior),
  new Student("Usaid", 20, [21, 22, 32, 23], GradeLevel.Sophomore),
];

students.forEach((student) => {
  console.log("\nStudent Information:");
  console.log(student.getStudentInfo());
});
