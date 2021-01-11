function lowerOrUpper(par1) {
    let letter = par1;

    if (letter === letter.toUpperCase()) {
        console.log(`upper-case`);
    } else if (letter === letter.toLowerCase()) {
        console.log(`lower-case`);
    }
}

lowerOrUpper(`f`);