function solve(age, gender) {
    age = Number(age);
    gender = gender;

    switch (gender) {
        case "m":
            if (age >= 16) {
                console.log("Mr.");
            } else {
                console.log("Master");
            }
            break;
        case "f":
            if (age >= 16) {
                console.log("Ms.");
            } else {
                console.log("Miss");
            }
            break;
    }
}