function worldTour(input){
    let stops = input.shift();
    let line = input.shift();
    while(line !== "Travel"){
        let curLine = line.split(":");
        line = input.shift();
        switch (curLine[0]) {
            case "Add Stop":
                let adStopIndex = Number(curLine[1]);
                let addString = curLine[2];
                if(adStopIndex >= 0 && adStopIndex < stops.length){
                    let todelete = stops.substring(0, adStopIndex);
                    let insertString = stops.substring(0, adStopIndex) + addString;
                    stops = stops.replace(todelete, insertString);
                }
                console.log(stops);
                break;
            case "Remove Stop":
                let startRemoveIndex = Number(curLine[1]);
                let endRemoveIndex = Number(curLine[2]);
                if(startRemoveIndex >= 0 && startRemoveIndex < stops.length && endRemoveIndex >= 0 && endRemoveIndex < stops.length){
                    let removeSubstring = stops.substring(startRemoveIndex, endRemoveIndex + 1);
                    stops = stops.replace(removeSubstring, ""); 
                }
                console.log(stops);
                break;
            case "Switch":
                let oldString = curLine[1];
                let newString = curLine[2];
                if(stops.includes(oldString)){
                        let splitted = stops.split(oldString);
                        stops = splitted.join(newString);
                    }
                
                console.log(stops);
                break;
        }
    }  
    console.log(`Ready for world tour! Planned stops: ${stops}`);
    }