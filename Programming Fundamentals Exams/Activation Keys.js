function activationKeys(input){
    let startKey = input.shift();
    let command = input.shift();
    while(command !== "Generate"){
        let separatedCommand = command.split(">>>");
        if(separatedCommand[0] === "Contains"){
            let neededSubstring = separatedCommand[1];
            if(startKey.includes(neededSubstring)){
               console.log(`${startKey} contains ${neededSubstring}`); 
            }else{
                console.log("Substring not found!");
            }
        }
        if(separatedCommand[0] === "Flip"){
            if(separatedCommand[1] === "Upper"){
                let cuttedElements = startKey.substring(separatedCommand[2], separatedCommand[3]);
                let newElements = cuttedElements.toUpperCase();
                startKey = startKey.replace(cuttedElements, newElements);
                console.log(startKey);
            }else if(separatedCommand[1] === "Lower"){
                let cuttedElements = startKey.substring(separatedCommand[2], separatedCommand[3]);
                let newElements = cuttedElements.toLowerCase();
                startKey = startKey.replace(cuttedElements, newElements);
                console.log(startKey);
            }
            
        }
        if(separatedCommand[0] === "Slice"){
            let neededElements = startKey.substring(separatedCommand[1], separatedCommand[2]);
            startKey = startKey.replace(neededElements, "");
            console.log(startKey);
                
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${startKey}`);
    }