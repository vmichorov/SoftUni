class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(string) {
        let [first, last] = string.split(' ');
        this.firstName = first;
        this.lastName = last;
    }
}

let myPerson = new Person('Ivan', 'Ivanov');
console.log(myPerson.fullName);
myPerson.lastName = 'Petrov';
console.log(myPerson.fullName);
myPerson.fullName = 'Georgi Petkov';
console.log(myPerson.firstName);
console.log(myPerson.lastName);