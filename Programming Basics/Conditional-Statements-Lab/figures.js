function solve(type, firstNum, secondNum) {
    if (type === "square") {
        let side = Number(firstNum);
        let area = side * side;

        console.log(area.toFixed(3));
    } else if (type === "rectangle") {
        let sideA = Number(firstNum);
        let sideB = Number(secondNum);
        let area = sideA * sideB;

        console.log(area.toFixed(3));
    } else if (type === "circle") {
        let radius = Number(firstNum);
        let pi = Math.PI;
        let area = pi * radius * radius;

        console.log(area.toFixed(3));
    } else if (type === "triangle") {
        let side = Number(firstNum);
        let height = Number(secondNum);
        let area = (side * height) / 2;

        console.log(area.toFixed(3));
    }
}

solve("square", "5");
solve("rectangle", "7", "2.5");
solve("circle", "6");
solve("triangle", "4.5", "20");