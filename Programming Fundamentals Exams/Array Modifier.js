function arrayModyfier(input){
    let startArray = input.shift().split(" ").map(Number);
    let command = input.shift();
    while(command !== "end"){
    let innerCommand = command.split(" ");
    let firstCommand = innerCommand[0];
    let secondCommand = Number(innerCommand[1]);
    let thirdCommand = Number(innerCommand[2]);
    switch(firstCommand){
        case "swap":
                let firstToSwap = startArray[secondCommand];
                let secondToSwap = startArray[thirdCommand];
                startArray[secondCommand] = secondToSwap;
                startArray[thirdCommand] = firstToSwap;
            break;
            case "multiply":
                let firstToMultiply = startArray[secondCommand];
                let secondToMultiply = startArray[thirdCommand];
                let modified = firstToMultiply * secondToMultiply;
                startArray[secondCommand] = modified;
                
            break;
            case "decrease":
                let decereasedArray = startArray.map(x => x-1);
                startArray = decereasedArray;
            
            break;
    }
    command = input.shift();
    }
    console.log(startArray.join(", "));
    }