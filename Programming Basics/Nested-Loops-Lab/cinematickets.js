function cinemaTickets(input) {

    // NEED TO BE RECODED - TIME LIMIT / WRONG ANSWER

    let currentMovie = input[0];
    let command = input[0];
    let seats = Number(input[1]);
    let index = 2;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let currentMovieTickets = 0;
    let capacity = 0;

    while (command !== "Finish") {
        while (command !== "End" && command !== "Finish") {
            command = input[index];
            switch (command) {
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
                case "student":
                    studentTickets++
                    break;
            }
            currentMovieTickets++;
            capacity = currentMovieTickets / seats * 100;
            index++;
            command = input[index];
        }
        console.log(`${currentMovie} - ${capacity.toFixed(2)}% full.`);
        totalTickets += currentMovieTickets;
        capacity = 0;
        currentMovieTickets = 0;
        index++;
        currentMovie = input[index];
        index++;
        if (currentMovie === undefined) {
            break;
        }
        seats = Number(input[index]);
        index++;
        command = input[index];
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])