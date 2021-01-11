function lastKSequence(par1, par2) {
    let n = par1;
    let k = par2;
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let start = Math.max(0, i - k);
        let end = i - k;
        result.push(sum);
    }
}