function validityChecker(x1, y1, x2, y2) {

    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2);

    function check(x1, y1, x2, y2) {
        let status = '';
        let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        if (Number.isInteger(distance)) {
            status = 'valid';
        } else {
            status = 'invalid';
        }
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);