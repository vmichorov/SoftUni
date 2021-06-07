const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

async function initialize() {

    return (req, res, next) => {
        req.storage = {
            getAllEntries,
            getEntryById,
            createEntry,
            createAcc,
            getAllAccessories,
            attachAccessory,
        };
        next();
    };
}

async function getAllEntries(query) {
    const options = {};


    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' }
    }
    if (query.from) {
        options.difficultyLevel = { $gte: Number(query.from) }
    }
    if (query.to) {
        options.difficultyLevel = options.difficultyLevel || {};
        options.difficultyLevel.$lte = Number(query.to);
    }
    const cubes = Cube.find(options).lean();

    return cubes;
}


async function getEntryById(id) {
    const cube = await Cube.findById(id).populate('accessories').lean();
    if (cube) {
        return cube;
    } else {
        return undefined;
    }
}

async function createEntry(cube) {
    const record = new Cube(cube)
    return record.save();
}

async function createAcc(acc) {
    const record = new Accessory(acc);
    return record.save();
}

async function getAllAccessories(accessories) {
    return Accessory.find({ _id: { $nin: accessories } }).lean();
}

async function attachAccessory(cubeId, accId) {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accId);
    if (!cube || !accessory) {
        throw new ReferenceError('No such ID in database!');
    }

    cube.accessories.push(accessory);
    return cube.save();
}

module.exports = {
    initialize,
    getAllEntries,
    getEntryById,
    createEntry,
    createAcc,
    getAllAccessories,
    attachAccessory,
}