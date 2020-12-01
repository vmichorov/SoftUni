function solve(examH, examM, arrivingH, arrivingM) {
    examH = Number(examH);
    examM = Number(examM);
    arrivingH = Number(arrivingH);
    arrivingM = Number(arrivingM);

    // NOT FINISHED

    if ((examH === arrivingH) && (examM === arrivingM)) {
        console.log(`On time`);
    } else if ((examH > arrivingH) && (examM === arrivingM)) {
        let hourDiff = examH - arrivingH;
        console.log(`Early`);
        console.log(`${hourDiff}:00 hours before the start`);
    } else if ((examH < arrivingH) && (examM === arrivingM)) {
        let hourDiff = arrivingH - examH;
        console.log(`Late`);
        console.log(`${hourDiff}:00 hours after the start`)
    } else if ((examH === arrivingH) && (examM > arrivingM)) {
        let minDiff = examM - arrivingM;
        if (minDiff <= 30) {
            console.log(`On time`);
        } else {
            console.log(`Early`);
        }
        console.log(`${minDiff} minutes before the start`);
    } else if ((examH === arrivingH) && (examM < arrivingM)) {
        let minDiff = arrivingM - examM;
        console.log(`Late`)
        console.log(`${minDiff} minutes after the start`);
    } 
}

solve("14",
"30",
"14",
"50");