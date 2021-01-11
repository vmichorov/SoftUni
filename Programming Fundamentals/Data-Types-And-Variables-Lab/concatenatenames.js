function concatenateNames(par1, par2, par3) {
    let firstName = par1;
    let secondName = par2;
    let delimiter = par3;

    console.log(`${firstName}${delimiter}${secondName}`);
}

concatenateNames(`Vasil`, `Michorov`, `<>`)