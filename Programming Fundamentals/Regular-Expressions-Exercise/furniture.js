function furniture(input) {
    let total = 0;
    let bought = `Bought furniture:`;
    for (let line of input) {
        let regEx = />>(?<name>[A-Za-z]*)<<(?<price>\d+(\.\d+)?)!(?<count>\d)/;
        let product = regEx.exec(line);
        if (product) {
            bought += `\n` + product.groups.name;
            total += Number(product.groups.price) * Number(product.groups.count);
        }
    }
    bought += `\n` + `Total money spend: ${total.toFixed(2)}`;
    console.log(bought);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);