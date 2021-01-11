function towns(townsArr) {
    for (let townEl of townsArr) {
        let townData = townEl.split(` | `);
        let townObj = {
            town: townData[0],
            latitude: Number(townData[1]).toFixed(2),
            longitude: Number(townData[2]).toFixed(2)
        }
        console.log(townObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);