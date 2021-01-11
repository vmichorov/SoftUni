function addressBook(input) {
    let addressBook = {};
    for (let line of input) {
        let [name, address] = line.split(`:`);
        if (!addressBook.hasOwnProperty(name)) {
            addressBook[name] = ``;
        }
        addressBook[name] = address;
    }
    let sorted = Object.keys(addressBook).sort((a, b) => a.localeCompare(b));
    for (let el of sorted) {
        console.log(`${el} -> ${addressBook[el]}`);
    }
}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);