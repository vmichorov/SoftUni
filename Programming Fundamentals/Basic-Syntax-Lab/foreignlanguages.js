function foreignLanguages(par1) {
    let country = par1;

    switch (country) {
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }
}

foreignLanguages("USA");
foreignLanguages("Mexico");
foreignLanguages("Germany");