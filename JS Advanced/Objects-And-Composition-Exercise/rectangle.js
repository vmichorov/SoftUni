function rectangle(width, height, color) {
    let rectangle = {
        width,
        height,
        color: capitalize(color),
        calcArea() {
            return this.width * this.height;
        }
    }

    return rectangle;

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
}

let rect = rectangle(4, 6, 'blue');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());