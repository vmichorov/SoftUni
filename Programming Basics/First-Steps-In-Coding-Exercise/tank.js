function solve(length, width, height, percent) {
    length = Number(length);
    width = Number(width);
    height = Number(height);
    percent = Number(percent);
    let volume = length * width * height;
    let litres = volume * 0.001;
    percent = percent * 0.01;
    litres = litres * (1 - percent);

    console.log(litres);
}

solve("105", "77", "89", "18.5");