function solve(product, day, quantity) {
    product = product;
    day = day;
    quantity = Number(quantity);
    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (product) {
                case "banana":
                    price = quantity * 2.50;
                    break;
                case "apple":
                    price = quantity * 1.20;
                    break;
                case "orange":
                    price = quantity * 0.85;
                    break;
                case "grapefruit":
                    price = quantity * 1.45;
                    break;
                case "kiwi":
                    price = quantity * 2.70;
                    break;
                case "pineapple":
                    price = quantity * 5.50;
                    break;
                case "grapes":
                    price = quantity * 3.85;
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (product) {
                case "banana":
                    price = quantity * 2.70;
                    break;
                case "apple":
                    price = quantity * 1.25;
                    break;
                case "orange":
                    price = quantity * 0.90;
                    break;
                case "grapefruit":
                    price = quantity * 1.60;
                    break;
                case "kiwi":
                    price = quantity * 3.00;
                    break;
                case "pineapple":
                    price = quantity * 5.60;
                    break;
                case "grapes":
                    price = quantity * 4.20;
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        default:
            console.log("error");
            break;
    }
    
    if (price !== 0) {
        console.log(price.toFixed(2));
    }
}

solve("orange", "Saturday", "3")