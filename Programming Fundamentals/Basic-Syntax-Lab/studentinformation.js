function studentInformation(par1, par2, par3) {
    let name = par1;
    let age = Number(par2);
    let grade = Number(par3);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

studentInformation("Peter", "17", "5.86");