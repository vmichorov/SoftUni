function ages(par1) {
    let age = Number(par1);

    if (age >= 0 && age <= 2) {
        console.log("baby");
    } else if (age >= 3 && age <= 13) {
        console.log("child");
    } else if (age >= 14 && age <= 19) {
        console.log("teenager");
    } else if (age >= 20 && age <= 65) {
        console.log("adult");
    } else if (age >= 65) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}

ages("55");
ages("1");
ages("7");
ages("16");
ages("68");