function gladiatorInventory(inputArr) {
    let inventory = inputArr[0].split(` `);
    for (let i = 1; i < inputArr.length; i++) {
        let command = inputArr[i];
        if (command.includes(`Buy`)) {
            let commandArr = command.split(` `);
            inventory.push(commandArr[1]);
        } else if (command.includes(`Trash`)) {
            let commandArr = command.split(` `);
            for (let i = 0; i < inventory.length; i++) {
                if (commandArr[1] === inventory[i]) {
                    inventory.splice(i, 1);
                    break;
                }
            }
        } else if (command.includes(`Repair`)) {
            let commandArr = command.split(` `);
            for (let i = 0; i < inventory.length; i++) {
                if (commandArr[1] === inventory[i]) {
                    let item = inventory.splice(i, 1);
                    inventory.push(item[0]);
                }
            }
        } else if (command.includes(`Upgrade`)) {
            let commandArr = command.split(` `);
            let upgradeArr = commandArr[1].split(`-`);
            for (let i = 0; i < inventory.length; i++) {
                if (upgradeArr[0] === inventory[i]) {
                    inventory.splice(i + 1, 0, upgradeArr.join(`:`));
                    break;
                }
            }
        }
    }
    console.log(inventory.join(` `));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);