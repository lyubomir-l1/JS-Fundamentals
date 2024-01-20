function inventory(input){
    let heroes = [];
    input.forEach(line => {
        let [name, level, item] = line.split(" / ");
        let curentHero = {
            name,
            level: Number(level),
            item
        };
        heroes.push(curentHero);
    });
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach((hero) =>{
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.item}`);
    } )
    }