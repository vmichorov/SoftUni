function mathOperations(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
    }
    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(10, 6, '-');
mathOperations(3, 5.5, '*');
mathOperations(18, 2, '/');
mathOperations(17, 4, '%');
mathOperations(10, 2, '**');