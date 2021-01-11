function convertJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    let objAsJSON = JSON.stringify(person);
    console.log(objAsJSON);
}

convertJSON('George', 'Jones', 'Brown');