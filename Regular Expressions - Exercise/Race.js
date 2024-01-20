function race(input){
    let namesArr = input.shift();
    let namePattern = /[A-Za-z]+/g;
    let distancePattern = /[0-9]+/g;
    let line = input.shift();
    let raceObject = {};
    
    while(line !== "end of race"){
    let lineName = line.match(namePattern).join("");
    let lineDistance = line.match(distancePattern).join("");
    if(namesArr.includes(lineName)){
        let distance = 0;
        for (const digit of lineDistance) {
            distance += Number(digit);
        }
        if(!raceObject.hasOwnProperty(lineName)){
            raceObject[lineName] = distance;
        }else{
            raceObject[lineName] += distance;
        }
    
    }
        line = input.shift();
        
    }
    let sortedRacers = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);
    let firstPlace = sortedRacers[0][0];
    let secondPlace = sortedRacers[1][0];
    let thirdPlace = sortedRacers[2][0];
    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
    }