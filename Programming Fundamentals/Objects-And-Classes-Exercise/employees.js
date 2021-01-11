function employees(empArr) {
    for (let emp of empArr) {
        let employee = {
            name: emp,
            number: emp.length
        }
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])