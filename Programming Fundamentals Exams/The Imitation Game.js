function imitationGame(data){
    let message = data.shift();
    let command = data.shift();
    
    while(command !== "Decode"){
        let curCommand = command.split("|");
    switch (curCommand[0]) {
        case "Move":
            let moveFirstLetters = Number(curCommand[1]);
            let moveString = message.substring(0, moveFirstLetters);
            message = message.replace(moveString, "") + moveString;
            break;
         case "Insert":
             let insertIndex = Number(curCommand[1]);
             let insertValue = curCommand[2];
             let todelete = message.substring(0, insertIndex)
             let insertString = message.substring(0, insertIndex) + insertValue;
             message = message.replace(todelete, insertString) 
             break;
         case "ChangeAll":
            let changeSubstring = curCommand[1];
            let changeReplacement = curCommand[2];
            while(message.includes(changeSubstring)){
                message = message.replace(changeSubstring, changeReplacement)
            } 
            break;
    }
        command = data.shift();
    }
    console.log(`The decrypted message is: ${message}`);
    }