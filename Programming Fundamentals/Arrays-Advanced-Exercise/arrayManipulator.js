function arrayManipulator(numbersArr, commandsArr) {
    let result = numbersArr;
    let pairSums = [];
    for (let i = 0; i < commandsArr.length; i++) {
        let currCommand = commandsArr[i];
        if (currCommand.includes(`add `)) {
            let currCommArr = currCommand.split(` `);
            let index = Number(currCommArr[1]);
            let element = Number(currCommArr[2]);
            result.splice(index, 0, element);
        } else if (currCommand.includes(`addMany`)) {
            let currCommArr = currCommand.split(` `);
            let index = Number(currCommArr[1]);
            let nums = currCommArr.splice(2).map(Number);
            for (let i = nums.length - 1; i >= 0; i--) {
                result.splice(index, 0, nums[i]);
            }
        } else if (currCommand.includes(`contains`)) {
            let currCommArr = currCommand.split(` `);
            let element = Number(currCommArr[1]);
            for (let i = 0; i < result.length; i++) {
                if (element === result[i]) {
                    console.log(i);
                    break;
                } else if (element !== result[i] && i === result.length - 1) {
                    console.log(-1);
                }
            }
        } else if (currCommand.includes(`remove `)) {
            let currCommArr = currCommand.split(` `);
            let index = currCommArr[1];
            result.splice(index, 1);
        } else if (currCommand.includes(`shift`)) {
            let currCommArr = currCommand.split(` `);
            let rotations = currCommArr[1];
            let element = result.shift();
            result.push(element);
        } else if (currCommand.includes(`sumPairs`)) {
            for (let i = 0; i < result.length; i += 2) {
                if (i + 1 === result.length) {
                    pairSums.push(result[i]);
                } else {
                    let sum = result[i] + result[i + 1];
                    pairSums.push(sum);
                }
            }
        } else if (currCommand.includes(`print`)) {
            console.log(result);
            break;
        }
    }
}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);