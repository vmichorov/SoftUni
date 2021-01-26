function townPopulation(townsArr) {
    let townsObj = {};
    for (const element of townsArr) {
        let [name, population] = element.split(' <-> ');
        if (!townsObj.hasOwnProperty(name)) {
            townsObj[name] = 0;
        }
        townsObj[name] += Number(population);
    }
    let entries = Object.entries(townsObj);
    for (const entry of entries) {
        console.log(`${entry[0]} : ${entry[1]}`);
    }
}

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);