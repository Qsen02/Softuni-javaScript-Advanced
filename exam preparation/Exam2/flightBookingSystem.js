class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.fligths = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }
    addFlight(flightNumber, destination, departureTime, price) {
        for (let fligth of this.fligths) {
            if (fligth.flightNumber == flightNumber) {
                return `Flight ${flightNumber} to ${destination} is already available.`;
            }
        }
        this.fligths.push({ flightNumber, destination, departureTime, price });
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }
    bookFlight(passengerName, flightNumber) {
        for (let fligth of this.fligths) {
            if (fligth.flightNumber == flightNumber) {
                this.bookings.push({ passengerName, flightNumber });
                this.bookingsCount++;
                return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
            }
        }
        return `Flight ${flightNumber} is not available for booking.`;
    }
    cancelBooking(passengerName, flightNumber) {
        for (let booking of this.bookings) {
            if (booking.passengerName == passengerName && booking.flightNumber == flightNumber) {
                let index = this.bookings.indexOf(booking);
                this.bookings.splice(index, 1);
                this.bookingsCount--;
                return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
            }
        }
        throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }
    showBookings(criteria) {
        if (this.bookingsCount == 0) {
            throw new Error(`No bookings have been made yet.`);
        }
        let result = "";
        if (criteria == "all") {
            result += `All bookings(${this.bookingsCount}):`;
            for (let { passengerName, flightNumber }
                of this.bookings) {
                result += `\n${passengerName} booked for flight ${flightNumber}.`;
            }
            return result;
        } else if (criteria == "cheap") {
            let count = 0;
            result += "Cheap bookings:";
            for (let { passengerName, flightNumber }
                of this.bookings) {
                for (let flight of this.fligths) {
                    if (flight.flightNumber == flightNumber && flight.price <= 100) {
                        count++;
                        result += `\n${passengerName} booked for flight ${flightNumber}.`
                    }
                }
            }
            if (count == 0) {
                return "No cheap bookings found.";
            }
            return result;
        } else if (criteria == "expensive") {
            let count = 0;
            result += "Expensive bookings:";
            for (let { passengerName, flightNumber }
                of this.bookings) {
                for (let flight of this.fligths) {
                    if (flight.flightNumber == flightNumber && flight.price > 100) {
                        count++;
                        result += `\n${passengerName} booked for flight ${flightNumber}.`;
                    }
                }
            }
            if (count == 0) {
                return "No expensive bookings found.";
            }
            return result;
        }
    }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));


// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));


// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));


const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));