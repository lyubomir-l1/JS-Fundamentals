function movingTarget(array){
    let startingTargets = array.shift().split(" ").map(x => Number(x))
    let command = array.shift();
    while(command !== "End"){
        let destructedCommand = command.split(" ");
        let action = destructedCommand[0];
        let index = Number(destructedCommand[1]);
        let power = Number(destructedCommand[2]);
        switch(action){
            case "Shoot":
                if(startingTargets[index]){
                    startingTargets[index] -= power;
                    if(startingTargets[index] <= 0){
                        startingTargets.splice(index, 1);
                    }
                }
         break;
             case "Add":
                if(index > -1 && index < startingTargets.length){
                    startingTargets.splice(index, 0, power);
                }else{
                    console.log("Invalid placement!");
                }
         break;
             case "Strike":
                let lowCase = index - power;
                let upCase = index + power;
                if(startingTargets[lowCase] && startingTargets[upCase]){
                    startingTargets.splice(index - power, (power * 2) + 1);
                }else{
                    
            console.log("Strike missed!");
                }
        break;
        }
        command = array.shift();
    }
    console.log(startingTargets.join("|"));
    }