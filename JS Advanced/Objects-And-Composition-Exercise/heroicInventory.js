function inventory(heroesArr) {
    let result = [];
    for (const hero of heroesArr) {
        let [name, level, items] = hero.split(' / ');
        items = items ? items.split(', ') : [];
        let current = {
            name,
            level: Number(level),
            items,
        };
        result.push(current);
    }
    return JSON.stringify(result);
}

console.log(inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]));