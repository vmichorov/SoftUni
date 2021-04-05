function colorize() {
    let rows = Array.from(document.getElementsByTagName('tr'));
    for (let i = 1; i < rows.length; i += 2) {
        document.getElementsByTagName('tr')[i].style.backgroundColor = 'teal';
    }
}