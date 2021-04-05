function createPeople() {
    const TASKS = {
        Junior: [
            ' is working on simple task.'
        ],
        Senior: [
            ' is working on a complicated task.',
            ' is taking time off work.',
            ' is supervising junior workers.'
        ],
        Manager: [
            ' scheduled a meeting.',
            ' is preparing a quarterly report.'
        ],
    };
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            const current = this.tasks.shift();
            console.log(`${this.name}${current}`);
            this.tasks.push(current);
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = TASKS.Junior;
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = TASKS.Senior;
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = TASKS.Manager;
            this.divident = 0;
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.divident} this month.`);
        }
    }

    return {
        Junior,
        Senior,
        Manager,
    }
}

const people = createPeople();
const junior = new people.Junior('Peter', 20);
junior.work();
junior.collectSalary();
const senior = new people.Senior('John', 32);
senior.work();
senior.work();
senior.work();
senior.work();
senior.collectSalary();
const manager = new people.Manager('George', 55);
manager.work();
manager.work();
manager.work();
manager.collectSalary();