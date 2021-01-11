function cardGame(input) {
    const highCards = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    const colors = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    let players = {};
    for (let line of input) {
        let [name, cards] = line.split(`: `);
        cards = cards.split(`, `);
        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }
        players[name].push(...cards);
    }
    let names = Object.keys(players);
    for (let name of names) {
        let points = 0;
        let cards = Array.from(new Set(players[name]));
        for (const card of cards) {
            let symbols = card.split(``);
            let color = symbols.pop();
            let cardNum = symbols.join(``);
            if (isNaN(cardNum)) {
                cardNum = highCards[cardNum];
            }
            cardNum = Number(cardNum);
            points += Number(colors[color]) * cardNum;
        }
        console.log(`${name}: ${points}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);