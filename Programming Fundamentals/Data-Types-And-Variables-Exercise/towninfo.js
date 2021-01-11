function townInfo(par1, par2, par3) {
    let townName = par1;
    let population = Number(par2);
    let area = Number(par3);
    console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
}

townInfo('Sofia',
    1286383,
    492
)