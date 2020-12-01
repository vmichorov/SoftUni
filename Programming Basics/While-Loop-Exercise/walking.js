function walking(input) {
    let goal = 10000;
    let index = 0;
    let totalSteps = 0;

    while (totalSteps < goal) {
        let current = input[index];
        if (current == "Going home") {
            totalSteps += Number(input[index + 1]);
            break;
        }
        totalSteps += Number(current);
        index++;
    }

    if (totalSteps >= goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${totalSteps - goal} steps over the goal!`)
    } else {
        console.log(`${goal - totalSteps} more steps to reach goal.`)
    }
}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"
])