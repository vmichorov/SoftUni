function processor(array) {
    let result = [];
    const commands = {
        add(result, text) {
            result.push(text);
        },
        remove(result, text) {
            while (result.includes(text)) {
                const index = result.indexOf(text);
                result.splice(index, 1);
            };
        },
        print(result) {
            console.log(result.join(','));
        }
    };
    for (const el of array) {
        const [command, text] = el.split(' ');
        commands[command](result, text);
    }
}

processor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);