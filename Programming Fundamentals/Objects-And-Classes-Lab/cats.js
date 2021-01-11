function cats(catsArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let currCat of catsArr) {
        let catData = currCat.split(` `);
        let cat = new Cat(catData[0], catData[1]);
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5', `Terry 4`]);