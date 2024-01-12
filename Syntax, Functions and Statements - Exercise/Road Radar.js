function roadRadar(speed, area) {
    let areas = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    if (speed <= areas[area]) {
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`);
    } else {
        let overLimits = speed - areas[area];
        if (overLimits <= 20) {
            console.log(`The speed is ${overLimits} km/h faster than the allowed speed of ${areas[area]} - speeding`);
        } else if (overLimits <= 40) {
            console.log(`The speed is ${overLimits} km/h faster than the allowed speed of ${areas[area]} - excessive speeding`);
        } else {
            console.log(`The speed is ${overLimits} km/h faster than the allowed speed of ${areas[area]} - reckless driving`);
        }
    }
}
roadRadar(200, 'motorway');