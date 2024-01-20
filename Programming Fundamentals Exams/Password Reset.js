function passwordReset(input){
    let text = input.shift();
    let command = input.shift();
     
    while(command !== "Done"){
        let [curCommand, firstArg, secondArg] = command.split(" ");
        switch (curCommand) {
     
            case "TakeOdd":
                let newRawPass = "";
                for(let i = 1; i < text.length; i+=2){
                    newRawPass += text[i];
                }
                text = newRawPass;
                console.log(text);
                break;
     
            case "Cut":
                firstArg = Number(firstArg);
                secondArg = Number(secondArg);
     
                let cutString = text.slice(firstArg, firstArg + secondArg);
                text = text.replace(cutString, "");
                    console.log(text);
                break;
            case "Substitute":
                if(text.includes(firstArg)){
                    while (text.includes(firstArg)) {
                        text = text.replace(firstArg, secondArg);
                    }
                    console.log(text);
                }else{
                    console.log("Nothing to replace!");
                }
     
                break;
        }
        command = input.shift();
     
        
    }
    console.log(`Your password is: ${text}`);
    }