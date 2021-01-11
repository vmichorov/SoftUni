function matrix(arg1) {
    let n = arg1;

    for (let i = 0; i < n; i++) {
        let sequence = ``;
        for (let j = 0; j < n; j++) {
            sequence += n + ` `;
        }
        console.log(sequence);
    }
}

matrix(3);