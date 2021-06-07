const fs = require('fs').promises;
const uniqid = require('uniqid');

let data = {};
async function initialize() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch (err) {
        console.error('Error during reading database');
    }

    return (req, res, next) => {
        req.storage = {
            getAllEntries,
            getEntryById,
            createEntry
        };
        next();
    };
}

async function getAllEntries(query) {
    let cubes = Object
        .entries(data)
        .map(([id, value]) => Object.assign({}, { id }, value));

    if (query.search) {
        cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
    }
    if (query.from) {
        cubes = cubes.filter(c => c.difficultyLevel >= Number(query.from))
    }
    if (query.to) {
        cubes = cubes.filter(c => c.difficultyLevel <= Number(query.to))
    }

    return cubes;
}

async function getEntryById(id) {
    return data[id];
}

async function createEntry(el) {
    const id = uniqid();
    data[id] = el;

    try {
        fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Error during writing out database');
    }
}

module.exports = {
    initialize,
    getAllEntries,
    getEntryById,
    createEntry
}