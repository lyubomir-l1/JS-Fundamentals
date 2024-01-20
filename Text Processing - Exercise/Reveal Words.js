function revealWords(words, sentence){
    let arrWords = words.split(", ");
    let arrSentence = sentence.split(" ");
    for(let i = 0; i < arrSentence.length; i++){
        for(let j = 0; j < arrWords.length; j++){
            if(arrSentence[i].length === arrWords[j].length && arrSentence[i].includes("*")){
                arrSentence[i] = arrWords[j];
            }
        }
    };
    
    console.log(arrSentence.join(" "));

}