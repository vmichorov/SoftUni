function movies(commands) {
    let movies = [];
    for (let i = 0; i < commands.length; i++) {
        let currCommand = commands[i];
        if (currCommand.includes(`addMovie`)) {
            let currMovie = {};
            currMovie.name = currCommand.substring(9);
            movies.push(currMovie);
        } else if (currCommand.includes(`directedBy`)) {
            let data = currCommand.split(` directedBy `);
            let movie = data[0];
            let director = data[1];
            movies.find(m => {
                if (m.name === movie) {
                    m.director = director;
                }
            })
        } else if (currCommand.includes(`onDate`)) {
            let data = currCommand.split(` onDate `);
            let movie = data[0];
            let date = data[1];
            movies.find(m => {
                if (m.name === movie) {
                    m.date = date;
                }
            })
        }
    }
    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            let jsonMovie = JSON.stringify(movie);
            console.log(jsonMovie);
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);