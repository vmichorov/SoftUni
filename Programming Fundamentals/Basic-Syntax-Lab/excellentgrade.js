function excellentGrade(par1) {
    let grade = Number(par1);

    if (grade >= 5.50) {
        console.log("Excellent");
    } else {
        console.log("Not excellent");
    }
}

excellentGrade("5.66");
excellentGrade("4");