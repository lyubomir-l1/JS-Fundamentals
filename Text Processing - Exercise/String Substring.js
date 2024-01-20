function stringSubstring(word, text){
    let textArr = text.split(" ");
    let wordLow = word.toLowerCase();
    let isFound = false;
    for (const element of textArr) {
        let curEl = element.toLowerCase();
        if(curEl === wordLow){
            isFound = true;
            console.log(word);
            return;
        }
    
    }
    if(!isFound){
        console.log(`${word} not found!`);
    }
    
    
    // if(text.toLowerCase().includes(word)){
    //     console.log(word);
    //     return;
    // }else{
    //     console.log(`${word} not found!`);
    // }
    }