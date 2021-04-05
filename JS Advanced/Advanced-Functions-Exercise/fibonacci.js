function getFibonator() {
    let n1 = 1;
    let n2 = 0;

    return function fib() {
        let result = n1 + n2;
        n1 = n2;
        n2 = result;
        return result;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13