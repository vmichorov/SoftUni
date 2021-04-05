function extract(id) {
    let text = document.getElementById(id).textContent;
    let result = [];
    let regex = /\((.+?)\)/gm;
    let match = regex.exec(text);
    while (match !== null) {
        result.push(match[1]);
        match = regex.exec(text);
    }
    return result.join('; ');
}