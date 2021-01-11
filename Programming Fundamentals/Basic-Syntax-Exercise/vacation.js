function vacation(par1, par2, par3) {
    let group = Number(par1);
    let type = par2;
    let day = par3;
    let price = 0.00;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                price = group * 8.45;
                if (group >= 30) {
                    price *= 0.85;
                }
            } else if (day === "Saturday") {
                price = group * 9.80;
                if (group >= 30) {
                    price *= 0.85;
                }
            } else if (day === "Sunday") {
                price = group * 10.46;
                if (group >= 30) {
                    price *= 0.85;
                }
            }
            break;
        case "Business":
            if (day === "Friday") {
                if (group >= 100) {
                    price = (group - 10) * 10.90;
                } else {
                    price = group * 10.90;
                }
            } else if (day === "Saturday") {
                if (group >= 100) {
                    price = (group - 10) * 15.60;
                } else {
                    price = group * 15.60;
                }
            } else if (day === "Sunday") {
                if (group >= 100) {
                    price = (group - 10) * 16.00;
                } else {
                    price = group * 16.00;
                }
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price = group * 15.00;
                if (group >= 10 && group <= 20) {
                    price *= 0.95;
                }
            } else if (day === "Saturday") {
                price = group * 20.00;
                if (group >= 10 && group <= 20) {
                    price *= 0.95;
                }
            } else if (day === "Sunday") {
                price = group * 22.50;
                if (group >= 10 && group <= 20) {
                    price *= 0.95;
                }
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation("40", "Regular", "Saturday");