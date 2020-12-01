function solve(month, nights) {
    month = month;
    nights = Number(nights);
    let studio = 0.00;
    let apartment = 0.00;

    switch (month) {
        case "May":
        case "October":
            if (nights > 14) {
                studio = (nights * 50.00) * 0.70;
                apartment = (nights * 65.00) * 0.90;
            } else if (nights > 7) {
                studio = (nights * 50.00) * 0.95;
                apartment = nights * 65.00;
            } else {
                studio = (nights * 50.00);
                apartment = (nights * 65.00);
            }
            break;
        case "June":
        case "September":
            if (nights > 14) {
                studio = (nights * 75.20) * 0.80;
                apartment = (nights * 68.70) * 0.90;
            } else {
                studio = (nights * 75.20);
                apartment = (nights * 68.70);
            }
            break;
        case "July":
        case "August":
            if (nights > 14) {
                studio = nights * 76.00;
                apartment = (nights * 77.00) * 0.90;
            } else {
                studio = nights * 76.00;
                apartment = nights * 77.00;
            }
            break;
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

solve("August", "20");