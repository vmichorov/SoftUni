function poundsToDollars(par1) {
    /// 1 British Pound = 1.31 Dollars
    let pounds = Number(par1);
    let dollars = (pounds * 1.31).toFixed(3);

    console.log(dollars);
}

poundsToDollars(39);