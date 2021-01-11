function loadingBar(arg1) {
    let percent = arg1;
    let barLoader = `..........`;
    let barArray = barLoader.split(``);
    if (percent === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        for (let i = 0; i < percent / 10; i++) {
            barArray.pop();
            barArray.unshift(`%`);
        }
        console.log(`${percent}% [${barArray.join(``)}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(100);