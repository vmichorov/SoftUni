function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let website = input[i];

        switch (website) {
            case "Facebook":
                salary -= 150.00;
                break;
            case "Instagram":
                salary -= 100.00;
                break;
            case "Reddit":
                salary -= 50.00;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }

    if (salary > 0) {
        console.log(salary);
    }
}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"]);