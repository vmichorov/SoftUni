function demo() {
    let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let limit = 5;
    let count = 0;
    for (let el of myArr) {
        console.log(el);
        count++;
        if (count === limit) {
            break;
        }
    }
}

demo();