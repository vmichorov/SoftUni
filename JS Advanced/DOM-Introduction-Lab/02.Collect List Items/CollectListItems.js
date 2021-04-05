function extractText() {
    let result = [];
    let elements = Array.from(document.querySelectorAll('li'));
    for (let i = 0; i < elements.length; i++) {
        let text = elements[i].textContent;
        result.push(text);
    }
    result = result.join("\n");
    document.getElementById('result').textContent = result;
}