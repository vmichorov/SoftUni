function solve(input) {
    let radians = Number(input);
    let pi = Math.PI;
    let degree = radians * 180 / pi;

    console.log(degree.toFixed(0));
}

solve("6.2832")