function convertObject(objAsString) {
    let person = JSON.parse(objAsString);
    let keys = Object.keys(person);
    for (let key of keys) {
        console.log(`${key}: ${person[key]}`);
    }
}

convertObject('{"name": "George", "age": 40, "town": "Sofia"}');