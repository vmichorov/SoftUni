function addAndSubtract(arg1, arg2, arg3) {
    function add(first, second) {
        return first + second;
    }

    function subtract(result, third) {
        return result - third;
    }

    let result = add(arg1, arg2);
    result = subtract(result, arg3);

    return result;
}

console.log(addAndSubtract(23, 6, 10));