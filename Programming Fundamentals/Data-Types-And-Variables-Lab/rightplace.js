function rightPlace(par1, par2, par3) {
    let firstText = par1;
    let symbol = par2;
    let secondText = par3;

    firstText = firstText.replace(`_`, symbol);

    if (firstText === secondText) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}

rightPlace('Str_ng', 'i', 'String');