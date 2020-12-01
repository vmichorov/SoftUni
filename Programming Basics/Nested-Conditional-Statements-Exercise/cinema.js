function solve(type, rows, cols) {
    type = type;
    rows = Number(rows);
    cols = Number(cols);
    let totalPrice = 0;
    let seats = rows * cols;

    switch (type) {
        case "Premiere":
            totalPrice = seats * 12.00;
            break;
        case "Normal":
            totalPrice = seats * 7.50;
            break;
        case "Discount":
            totalPrice = seats * 5.00;
            break;
    }

    console.log(`${totalPrice.toFixed(2)} leva`);
}