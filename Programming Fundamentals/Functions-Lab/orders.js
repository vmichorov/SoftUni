function orders(arg1, arg2) {
    let product = arg1;
    let count = arg2;
    let totalPrice = 0;

    switch (product) {
        case `coffee`:
            totalPrice = count * 1.50;
            break;
        case `water`:
            totalPrice = count * 1.00;
            break;
        case `coke`:
            totalPrice = count * 1.40;
            break;
        case `snacks`:
            totalPrice = count * 2.00;
            break;
    }
    console.log(totalPrice.toFixed(2));
}

orders(`coffee`, 2);