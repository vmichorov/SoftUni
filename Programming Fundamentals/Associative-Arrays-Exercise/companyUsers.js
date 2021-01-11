function companyUsers(input) {
    let companies = {};
    for (let line of input) {
        let [company, id] = line.split(` -> `);
        if (!companies.hasOwnProperty(company)) {
            companies[company] = {
                [id]: id
            }
        } else {
            if (!companies[company].hasOwnProperty(id)) {
                companies[company][id] = id;
            } else {

            }
        }
    }
    let keys = Object.keys(companies).sort((a, b) => a.localeCompare(b));
    for (let company of keys) {
        console.log(company);
        let employees = Object.keys(companies[company]);
        for (let emp of employees) {
            console.log(`-- ${companies[company][emp]}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);