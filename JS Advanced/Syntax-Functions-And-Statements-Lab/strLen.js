function strLen(firstStr, secondStr, thirdStr) {
    let totalLen = firstStr.length + secondStr.length + thirdStr.length;
    let averageLen = Math.floor(totalLen / 3);
    console.log(totalLen);
    console.log(averageLen);
}

strLen('chocolate', 'ice cream', 'cake');
strLen('pasta', '5', '22.3');