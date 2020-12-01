function solve(income, grade, minimalWage) {
    income = Number(income);
    grade = Number(grade);
    minimalWage = Number(minimalWage);
    let social = 0;
    let excellent = 0;

    if (income < minimalWage && grade > 4.50) {
        social = minimalWage * 0.35;
    }
    if (grade >= 5.50) {
        excellent = grade * 25;
    }

    if ((income > minimalWage || grade < 4.50) && grade < 5.50) {
        console.log("You cannot get a scholarship!");
    } else if (social > excellent) {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);
    }
}

solve("480.00", "4.60", "450.00");