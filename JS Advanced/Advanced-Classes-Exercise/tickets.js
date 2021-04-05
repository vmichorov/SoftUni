function tickets(array, type) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];
    for (const item of array) {
        const tokens = item.split('|');
        tokens[1] = Number(tokens[1]);
        const ticket = new Ticket(tokens[0], tokens[1], tokens[2]);
        result.push(ticket);
    }
    switch (type) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status));
    }
    return result;
}

console.log(tickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|93.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
));