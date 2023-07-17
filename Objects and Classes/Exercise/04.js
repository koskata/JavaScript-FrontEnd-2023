function solve(arr) {

    let movies = [];

    arr.forEach((command) => {
        if (command.includes("addMovie")) {
            let name = command.substr(9)
            movies.push({
                name,
            });
        }
        else if (command.includes("directedBy")) {
            const [movieName, directorName] = command.split(" directedBy ");
            
            const movie = movies.find((n) => n.name === movieName);

            if (movie) {
                movie.director = directorName;
            }
        }
        else if (command.includes("onDate")) {
            const [movieName, date] = command.split(" onDate ");

            const movie = movies.find((n) => n.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    });

        movies.filter((m) => m.name && m.date && m.director)
        .forEach((m) => console.log(JSON.stringify(m)));
}

solve(
    [
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]
);