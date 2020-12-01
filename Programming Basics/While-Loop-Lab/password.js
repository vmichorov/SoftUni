function password(input) {
    let user = input[0];
    let password = input[1];
    let index = 2;
    let current = input[index];

    while (current !== password) {
        index++;
        current = input[index];
    }

    console.log(`Welcome ${user}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])