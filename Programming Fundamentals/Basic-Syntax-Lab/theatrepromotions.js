function theatrePromotions(par1, par2) {
    let day = par1;
    let age = Number(par2);
    let price = 0;

    if (age < 0) {
        console.log("Error!");
        return;
    } else if (age <= 18) {
        switch (day) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 5;
                break;
        }
    } else if (age <= 64) {
        switch (day) {
            case "Weekday":
                price = 18;
                break;
            case "Weekend":
                price = 20;
                break;
            case "Holiday":
                price = 12;
                break;
        }
    } else if (age <= 122) {
        switch (day) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 10;
                break;
        }
    } else {
        console.log("Error!");
        return;
    }

    console.log(`${price}$`);
}

theatrePromotions("Weekday", "-10");