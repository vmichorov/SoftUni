function calculate(area, volume, data) {
    const figures = JSON.parse(data);
    const result = figures.map(f => ({
        area: area.call(f),
        volume: volume.call(f),
    }));
    return result;
}

const ex1 = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`

console.log(calculate(area, volume, ex1));

function area() {
    return this.x * this.y;
}

function volume() {
    return this.x * this.y * this.z;
}