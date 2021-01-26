function carFactory(object) {
    let requirements = object;
    let car = {
        model: requirements.model,
    };
    if (requirements.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        };
    } else if (requirements.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        };
    } else {
        car.engine = {
            power: 200,
            volume: 3500
        };
    }
    car.carriage = {
        type: requirements.carriage,
        color: requirements.color
    };
    if (requirements.wheelsize % 2 == 0) {
        requirements.wheelsize--;
    }
    requirements.wheelsize = Math.floor(requirements.wheelsize);
    car.wheels = [requirements.wheelsize, requirements.wheelsize, requirements.wheelsize, requirements.wheelsize];
    return car;
}

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));