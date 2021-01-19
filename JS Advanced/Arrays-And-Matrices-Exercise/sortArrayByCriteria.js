function sortArray(stringsArr) {
    stringsArr = stringsArr
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);
    for (const word of stringsArr) {
        console.log(word);
    }
}

sortArray([
    'b',
    'aaa',
    'cc',
    'd'
]);