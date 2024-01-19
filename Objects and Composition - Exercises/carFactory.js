function carFactory(order) {
    let parts = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
        hatchback: { type: 'hatchback', color: order.color },
        coupe: { type: 'coupe', color: order.color }
    }
    let car = {
        model: order.model,
        engine: null,
        carriage: null,
        wheels: null
    }
    if (order.power <= 90) {
        car.engine = parts.smallEngine;
    } else if (order.power <= 120) {
        car.engine = parts.normalEngine;
    } else {
        car.engine = parts.monsterEngine;
    }

    if (order.carriage == "hatchback") {
        car.carriage = parts.hatchback;
    } else {
        car.carriage = parts.coupe;
    }

    if (order.wheelsize % 2 == 0) {
        order.wheelsize -= 1;
    }
    car.wheels = new Array(4).fill(order.wheelsize);
    return car;
}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})