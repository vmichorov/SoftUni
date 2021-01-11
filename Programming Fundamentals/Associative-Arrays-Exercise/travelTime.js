function travelTime(input) {
    let countries = {};
    for (let line of input) {
        let [country, town, offer] = line.split(` > `);
        offer = Number(offer);
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {
                [town]: offer
            }
        } else {
            if (!countries[country].hasOwnProperty(town)) {
                countries[country][town] = offer;
            } else {
                if (countries[country][town] > offer) {
                    countries[country][town] = offer;
                }
            }
        }
    }
    let sortedCountries = Object.keys(countries).sort((a, b) => a.localeCompare(b));
    for (const country of sortedCountries) {
        let sortedTowns = Object.keys(countries[country]).sort((a, b) => countries[country][a] - countries[country][b]);
        let sequence = ``;
        for (let town of sortedTowns) {
            sequence += `${town} -> ${countries[country][town]} `;
        }
        console.log(`${country} -> ${sequence}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "France > Paris > 1500",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
    "France > Nice > 1300"
]);