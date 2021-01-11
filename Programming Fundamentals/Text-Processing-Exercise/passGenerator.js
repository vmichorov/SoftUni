function passGenerator(input) {
    let result = ``;
    let password = (input[0] + input[1]).toLowerCase();
    let chars = (input[2]).toUpperCase();
    let charsIndex = 0;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char === `a` || char === `e` || char === `o` || char === `i` || char === `u`) {
            if (charsIndex === chars.length) {
                charsIndex = 0;
            }
            char = chars[charsIndex];
            charsIndex++;
        }
        result += char;
    }
    console.log(`Your generated password is ${result.split(``).reverse().join(``)}`);
}

passGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);

// sElbGtNgAvRtOhEGzzNpAvRlO
//  e  a e e e a ia  i e o i