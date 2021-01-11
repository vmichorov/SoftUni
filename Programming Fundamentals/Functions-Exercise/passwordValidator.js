function validator(arg1) {
    let password = arg1;
    let digits = 0;
    let isLongEnough = password.length >= 6 && password.length <= 10;
    let isSymbolIncluded = password.match("^[A-Za-z0-9]+$");

    for (let i = 0; i < password.length; i++) {
        let current = Number(password[i]);
        if (current >= 0 && current <= 9) {
            digits++;
        }
    }



    if ((isLongEnough) && (digits >= 2) && (isSymbolIncluded)) {
        console.log(`Password is valid`);
    } else {
        if (!isLongEnough) {
            console.log(`Password must be between 6 and 10 characters`);
        }
        if (!isSymbolIncluded) {
            console.log(`Password must consist only of letters and digits`);
        }
        if (digits < 2) {
            console.log(`Password must have at least 2 digits`);
        }
    }
}

validator(`Pa$s$s`);