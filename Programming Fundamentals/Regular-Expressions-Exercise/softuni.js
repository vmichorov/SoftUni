function barIncome(input) {
    let totalIncome = 0;
    for (let line of input) {
        let regex = /\%(?<name>[A-Z][a-z]+)\%([^\|\$\%\.]*?)\<(?<product>\w+)\>([^\|\$\%\.]*?)\|(?<count>\d+)\|([^\|\$\%\.]*?)(?<price>\d+(\.\d{1,2})?)\$/g;
        let order = regex.exec(line);
        if (order) {
            let orderSum = Number(order.groups.count) * Number(order.groups.price);
            totalIncome += orderSum;
            console.log(`${order.groups.name}: ${order.groups.product} - ${orderSum.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

barIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
console.log(`-----`);
barIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);