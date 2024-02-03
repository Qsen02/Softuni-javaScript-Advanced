function getPersons() {
    let persons = [];
    class Person {
        firstName;
        lastName;
        age;
        email;
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    let person0 = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
    persons.push(person0);
    let person1 = new Person("SoftUni");
    persons.push(person1);
    let person2 = new Person("Stephan", "Johnson", 25);
    persons.push(person2);
    let person3 = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
    persons.push(person3);

    return persons;
}
console.log(getPersons());