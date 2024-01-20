function pianist(input){
    let givenPieces = Number(input.shift());
    let targetArr = [];
    let targetObject = {};
    for(let i = 0; i < givenPieces; i++){
        let [piece, composer, key] = input.shift().split("|");
    targetObject = {piece, composer, key};
    targetArr.push(targetObject);
    }
    let command = input.shift();
    while(command !== "Stop"){
    let curCommand = command.split("|");
    switch (curCommand[0]) {
        case "Add":
            let piece = curCommand[1];
            let composer = curCommand[2];
            let key = curCommand[3];
            let addObject = {piece, composer, key};
            let found = targetArr.find((x)=> x.piece === piece);
            let addIndex = targetArr.indexOf(found);
            if(found){
                console.log(`${piece} is already in the collection!`);
            }else{
            targetArr.push(addObject);
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
            break;
            case "Remove":
            let removePiece = curCommand[1];
            let foundToRemove = targetArr.find((x)=> x.piece === removePiece);
            let removeIndex = targetArr.indexOf(foundToRemove);
            if(foundToRemove){
                targetArr.splice(removeIndex, 1);
                console.log(`Successfully removed ${removePiece}!`);
            }else{
            console.log(`Invalid operation! ${removePiece} does not exist in the collection.`);
            }
            break;
            case "ChangeKey":
            let changePiece = curCommand[1];
            let newKey = curCommand[2];
            let foundToChange = targetArr.find((x)=> x.piece === changePiece);
            let changeIndex = targetArr.indexOf(foundToChange);
            if(foundToChange){
                targetArr[changeIndex].key = newKey;
                console.log(`Changed the key of ${changePiece} to ${newKey}!`);
            }else{
            console.log(`Invalid operation! ${changePiece} does not exist in the collection.`);
            }
            break;
    }
        command = input.shift();
    
    }
    for (const prop of targetArr) {
        console.log(`${prop.piece} -> Composer: ${prop.composer}, Key: ${prop.key}`);
    }
    }