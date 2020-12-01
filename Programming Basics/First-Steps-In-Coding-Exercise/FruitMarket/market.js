function solve(strawberryPrice, bananaQuantity, orangeQuantity, raspberryQuantity, strawberryQuantity) {
    strawberryPrice = Number(strawberryPrice);
    bananaQuantity = Number(bananaQuantity);
    orangeQuantity = Number(orangeQuantity);
    raspberryQuantity = Number(raspberryQuantity);
    strawberryQuantity = Number(strawberryQuantity);
    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice * 0.60;
    let bananaPrice = raspberryPrice * 0.20;
    let strawberryTotal = strawberryPrice * strawberryQuantity;
    let raspberryTotal = raspberryPrice * raspberryQuantity;
    let orangeTotal = orangePrice * orangeQuantity;
    let bananaTotal = bananaPrice * bananaQuantity;
    let totalSum = bananaTotal + orangeTotal + raspberryTotal + strawberryTotal;

    console.log(totalSum);
}

solve("63.5", "3.57", "6.35", "8.15", "2.50");