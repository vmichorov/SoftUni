function trainTheTrainers(input) {
    let gradesNum = Number(input[0]);
    let projectIndex = 1;
    let project = input[projectIndex];
    let gradeIndex = 2;
    let projectAverage = 0;
    let totalAverage = 0;
    let projects = 0;

    while (project !== "Finish") {
        projects++;
        for (let i = 0; i < gradesNum; i++) {
            let grade = Number(input[gradeIndex + i]);
            projectAverage += grade;
        }
        projectAverage /= gradesNum;
        console.log(`${project} - ${projectAverage.toFixed(2)}.`);
        totalAverage += projectAverage;
        projectIndex = projectIndex + gradesNum + 1;
        project = input[projectIndex];
        projectAverage = 0;
        gradeIndex = projectIndex + 1;
    }

    totalAverage /= projects;
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])