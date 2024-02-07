function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}
let curPerson = personAndTeacher();
let person = new curPerson.Person("Ivan", "ivan@gmail.com");
let teacher = new curPerson.Teacher("Ivan", "ivan@gmail.com", "math");
console.log(teacher);