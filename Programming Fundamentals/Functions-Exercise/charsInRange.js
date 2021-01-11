function charsInRange(firstChar, secondChar) {
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);

    let start = firstCode < secondCode ? firstCode : secondCode;
    let end = secondCode < firstCode ? firstCode : secondCode;

    let sequence = ``;
    for (let i = start + 1; i < end; i++) {
        let char = String.fromCharCode(i);
        sequence += char + ` `;
    }

    console.log(sequence);
}

charsInRange(`C`, `#`);