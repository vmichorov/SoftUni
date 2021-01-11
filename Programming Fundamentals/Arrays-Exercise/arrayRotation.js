function arrayRotation(input1, par1) {
    let myArr = input1;
    let rotations = par1;

    for (let i = 1; i <= rotations; i++) {
        let firstEl = myArr.shift();
        myArr.push(firstEl);
    }
    console.log(myArr.join(` `));
}

arrayRotation([2, 4, 15, 31], 5);