function towns(input){
    let town = {};
    input.forEach(line => {
        let [townName, latitude, longitude] = line.split(" | ");
        town.town = townName;
        town.latitude = Number(latitude).toFixed(2);
        town.longitude = Number(longitude).toFixed(2);
        console.log(town);
    
    });
    }