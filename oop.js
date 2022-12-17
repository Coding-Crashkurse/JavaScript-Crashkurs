class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
  greet() {
    console.log(
      `Hi, my name is ${this.getFullName()} and I am in grade ${this.grade}.`
    );
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, subject) {
    super(firstName, lastName, age);
    this.subject = subject;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.getFullName()} and I teach ${this.subject}.`
    );
  }
}

const student = new Student("John", "Doe", 15, 10);
student.greet(); // 'Hi, my name is John Doe and I am in grade 10.'

const teacher = new Teacher("Jane", "Doe", 35, "Math");
teacher.greet(); // 'Hello, my name is Jane Doe and I teach Math.'
