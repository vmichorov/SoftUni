function cutReverse(sequence) {
    let firstHalf = sequence.slice(0, sequence.length / 2).split(``).reverse().join(``);
    let secondHalf = sequence.slice(sequence.length / 2).split(``).reverse().join(``);
    console.log(firstHalf);
    console.log(secondHalf);
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');