function createTicketList(array, sorter) {
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for (let str of array) {
        let [destination, price, status] = str.split("|");
        price = Number(price);
        let object = new Ticket(destination, price, status);
        result.push(object);
    }
    if (sorter != "price") {
        let sortedResult = result.sort((a, b) => a[sorter].localeCompare(b[sorter]));
        result = sortedResult;
    } else {
        let sortedResult = result.sort((a, b) => a[sorter] - b[sorter]);
        result = sortedResult;
    }
    return result;
}
console.log(createTicketList(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'));