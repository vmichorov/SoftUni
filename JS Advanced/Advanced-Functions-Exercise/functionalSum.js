function add(num1) {
    let sum = 0;
    sum += num1;

    function calculate(num2) {
        sum += num2;

        return calculate;
    }

    calculate.toString = function () {
        return sum;
    }
    return calculate;
}

console.log(add(1)(6)(-3));