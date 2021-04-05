function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            this.name = name;
            this.email = email;
            this.course = subject;
        }
    }
    return {
        Person,
        Teacher,
    }
}