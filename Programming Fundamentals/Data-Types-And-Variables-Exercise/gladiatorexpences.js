function gladiatorExpences(par1, par2, par3, par4, par5) {
    let lostFights = Number(par1);
    let helmetPrice = Number(par2);
    let swordPrice = Number(par3);
    let shieldPrice = Number(par4);
    let armorPrice = Number(par5);

    let helmetBrakes = 0;
    let swordBrakes = 0;
    let shieldBrakes = 0;
    let armorRepairs = 0;

    let totalPrice = 0;

    for (let i = 1; i <= lostFights; i++) {
        let isHelmetBroken = false;
        let isSwordBroken = false;
        let isShieldBroken = false;

        if (i % 2 === 0) {
            isHelmetBroken = true;
            helmetBrakes++;
        }
        if (i % 3 === 0) {
            isSwordBroken = true;
            swordBrakes++;
        }
        if (isHelmetBroken && isSwordBroken) {
            isShieldBroken = true;
            shieldBrakes++;
            if (shieldBrakes % 2 === 0) {
                armorRepairs++;
            }
        }
    }

    totalPrice = ((helmetBrakes * helmetPrice) + (swordBrakes * swordPrice) +
        (shieldBrakes * shieldPrice) + (armorRepairs * armorPrice)).toFixed(2);

    console.log(`Gladiator expenses: ${totalPrice} aureus`);
}

gladiatorExpences(7,
    2,
    3,
    4,
    5
)