function schoolGrades(input) {
    let students = {};
    for (let line of input) {
        line = line.split(` `);
        let name = line.shift();
        let grades = line.map(Number);
        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }
        students[name].push(...grades);
    }
    let sorted = Object.keys(students);
    sorted.sort(compareAvg);
    for (let [name, grades] of students) {
        console.log(`${name}: ${grades}`);
    }

    function compareAvg([nameA, gradesA], [nameB, gradesB]) {
        let avgA = gradesA.forEach(x => avgA += x);
        avgA /= gradesA.length;
        let avgB = gradesB.forEach(x => avgB += x);
        avgB /= gradesB.length;
        return avgA - avgB;
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])