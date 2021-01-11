function reverseString(par1) {
    let text = par1;
    let reverseText = ``;

    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i];
    }

    console.log(reverseText);
}

reverseString(`SoftUni`);