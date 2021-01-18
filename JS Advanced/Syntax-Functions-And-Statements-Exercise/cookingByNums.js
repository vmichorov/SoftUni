function cookingByNums(num, comm1, comm2, comm3, comm4, comm5) {
    num = Number(num);
    let commandsArr = [comm1, comm2, comm3, comm4, comm5];
    for (let i = 0; i < commandsArr.length; i++) {
        let command = commandsArr[i];
        switch (command) {
            case 'chop':
                num = num / 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num = num + 1;
                console.log(num);
                break;
            case 'bake':
                num = num * 3;
                console.log(num);
                break;
            case 'fillet':
                num = num * 0.80;
                console.log(num);
                break;
        }
    }
}

// cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');