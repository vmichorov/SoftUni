function login(input) {
    let user = input[0];
    let password = "";
    let index = 1;
    let current = input[index];
    let fails = 0;

    for (let i = user.length - 1; i >= 0; i--) {
        password += user[i];
    }

    while (current !== password) {
        fails++;
        if (fails === 4) {
            console.log(`User ${user} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");
        index++;
        current = input[index];
    }

    if (current === password) {
        console.log(`User ${user} logged in.`);
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);