function repeatString(arg1, arg2) {
    let text = arg1;
    let count = arg2;
    let result = ``;

    for (let i = 0; i < count; i++) {
        result += text;
    }
    console.log(result);
}

repeatString(`String`, 2);