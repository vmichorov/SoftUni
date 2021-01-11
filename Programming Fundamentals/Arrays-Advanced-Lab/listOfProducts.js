function listOfProducts(inputArr) {
    let sortedArr = inputArr.sort();
    for (let i = 0; i < inputArr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`);
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);