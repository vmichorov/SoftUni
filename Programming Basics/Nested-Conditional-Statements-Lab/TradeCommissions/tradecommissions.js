function solve(city, sales) {
    city = city;
    sales = Number(sales);
    let commission = 0;

    switch (city) {
        case "Sofia":
            if (sales < 0) {
                console.log("error"); 
            } else if (sales <= 500) {
                commission = sales * 0.05;
                console.log(commission.toFixed(2));
            } else if (sales <= 1000) {
                commission = sales * 0.07;
                console.log(commission.toFixed(2));
            } else if (sales <= 10000) {
                commission = sales * 0.08;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = sales * 0.12;
                console.log(commission.toFixed(2));
            }
            break;
        case "Varna":
            if (sales < 0) {
                console.log("error"); 
            } else if (sales <= 500) {
                commission = sales * 0.045;
                console.log(commission.toFixed(2));
            } else if (sales <= 1000) {
                commission = sales * 0.075;
                console.log(commission.toFixed(2));
            } else if (sales <= 10000) {
                commission = sales * 0.10;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = sales * 0.13;
                console.log(commission.toFixed(2));
            }
            break;
        case "Plovdiv":
            if (sales < 0) {
                console.log("error"); 
            } else if (sales <= 500) {
                commission = sales * 0.055;
                console.log(commission.toFixed(2));
            } else if (sales <= 1000) {
                commission = sales * 0.08;
                console.log(commission.toFixed(2));
            } else if (sales <= 10000) {
                commission = sales * 0.12;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = sales * 0.145;
                console.log(commission.toFixed(2));
            }
            break;
        default:
            console.log("error");
    }
}

solve("Varna", "3874.50");