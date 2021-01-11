function inventory(heroesArr) {
    let heroes = [];
    for (let hero of heroesArr) {
        let heroData = hero.split(` / `);
        let Hero = heroData[0];
        let level = Number(heroData[1]);
        let items = heroData[2].split(`, `).sort((a, b) => a.localeCompare(b)).join(`, `);
        let heroObject = {
            Hero,
            level,
            items
        }
        heroes.push(heroObject);
    }
    heroes = heroes.sort((a, b) => a.level - b.level);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);