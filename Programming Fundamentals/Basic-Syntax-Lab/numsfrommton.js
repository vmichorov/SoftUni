function numsFromMToN(par1, par2) {
    let m = Number(par1);
    let n = Number(par2);

    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

numsFromMToN("6", "2");