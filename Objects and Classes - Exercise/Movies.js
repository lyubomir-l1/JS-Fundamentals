function movies(input){
    let films = [];
    input.forEach(line => {
        if(line.includes('addMovie ')){
            let name = line.split("addMovie ")[1];
            films.push({name});
        }else if(line.includes('directedBy')){
            let [name, director] = line.split(" directedBy ");
            let movie = films.find(el => el.name === name);
            if(movie){
                movie.director = director;
            }
        }else if(line.includes('onDate')){
            let [name, date] = line.split(" onDate ");
            let movie = films.find(el => el.name === name);
            if(movie){
                movie.date = date;
            }
        }
    });
    films.forEach(movie =>{
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    })
    }