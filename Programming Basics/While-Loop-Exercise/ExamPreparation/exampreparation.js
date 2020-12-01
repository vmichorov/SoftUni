function examPreparation(input) {
    let allowedFouls = Number(input[0]);
    let problemIndex = 1;
    let gradeIndex = 2;
    let problem = input[problemIndex];
    let grade = Number(input[gradeIndex]);
    let fouls = 0;
    let lastProblem = "";
    let average = 0;
    let totalScore = 0;
    let totalGrades = 0;
    let totalProblems = 0;

    while (problem !== "Enough") {
        grade = Number(grade);
        if (grade <= 4) {
            fouls++;

            if (fouls === allowedFouls) {
                console.log(`You need a break, ${fouls} poor grades.`);
                break;
            }
        }
        totalGrades++;
        totalProblems++;
        totalScore += grade;
        lastProblem = problem;
        problemIndex += 2;
        problem = input[problemIndex];
        gradeIndex += 2;
        grade = input[gradeIndex];
    }

    average = totalScore / totalGrades;
    if (fouls < allowedFouls) {
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${totalProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring",
"5",
"Bus",
"6",
"Enough"])