function pirates(input) {
    let targetObject = {};
    let targetArr = [];
    let firstCommand = input.shift();
    while (firstCommand !== "Sail") {
     let newArr = firstCommand.split("||");
     let city = newArr[0];
     let population = Number(newArr[1]);
     let gold = Number(newArr[2]); 
     let found = targetArr.find((x)=> x.city === city);
     let startIndex = targetArr.indexOf(found);
     if(found){
         targetArr[startIndex].population += population;
         targetArr[startIndex].gold += gold;
     }else{
     targetObject = {city, population, gold};
     targetArr.push(targetObject);
     }
     firstCommand = input.shift();
    } 
    let secondCommand = input.shift();
    while(secondCommand !== "End"){
     let curCommand = secondCommand.split("=>");
     switch (curCommand[0]) {
         case "Plunder":
             let plunderCity = curCommand[1];
             let peopleKilled = Number(curCommand[2]);
             let goldGained = Number(curCommand[3]);
             console.log(`${plunderCity} plundered! ${goldGained} gold stolen, ${peopleKilled} citizens killed.`);
             let foundCity = targetArr.find((x)=> x.city === plunderCity);
             let plunderIndex = targetArr.indexOf(foundCity);
             if(foundCity){
                 targetArr[plunderIndex].population -= peopleKilled;
                 targetArr[plunderIndex].gold -= goldGained;
             }
             if(targetArr[plunderIndex].population <= 0 || targetArr[plunderIndex].gold <= 0){
                 console.log(`${plunderCity} has been wiped off the map!`);
                 targetArr.splice(plunderIndex, 1);
             }
             break;
 
         case "Prosper":
            let prosperCity = curCommand[1];
             let increasingGold =  Number(curCommand[2]);
             let foundProsperCity = targetArr.find((x)=> x.city === prosperCity);
             let prosperIndex = targetArr.indexOf(foundProsperCity);
             if(foundProsperCity){
                 if(increasingGold >= 0){
                 targetArr[prosperIndex].gold += increasingGold;
                 console.log(`${increasingGold} gold added to the city treasury. ${prosperCity} now has ${targetArr[prosperIndex].gold} gold.`);
                 }else{
                     console.log("Gold added cannot be a negative number!");
                 }
             }
             break;
     
        
     }
     secondCommand = input.shift();
    }
    if(targetArr.length > 0){
 console.log(`Ahoy, Captain! There are ${targetArr.length} wealthy settlements to go to:`);
 targetArr.forEach((o)=> console.log(`${o.city} -> Population: ${o.population} citizens, Gold: ${o.gold} kg`))
    }else{
     console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
 }