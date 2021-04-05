function sumTable() {
    let sum = 0;
    let rows = Array.from(document.getElementsByTagName('tr'));
    for (let i = 1; i < rows.length - 1; i++) {
        sum += Number(rows[i].lastChild.textContent);
    }
    document.getElementById('sum').textContent = sum;
}