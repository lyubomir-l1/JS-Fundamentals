function modernTimesOf(text){
    let wordsArr = text.split(" ");
    let validCurWord = false;
    let wordToPrint = "";
    for (const word of wordsArr) {
        if(word.startsWith("#") && word.length > 1){
           wordToPrint = word.substring(1, word.length); 
           let curWord = word.toLowerCase().substring(1, word.length);;
           let charArr = curWord.split("");
           for (const char of charArr) {
            if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
                validCurWord = true;
            }else{
                validCurWord = false;
                break;
            }
           }
           if(validCurWord){
            console.log(wordToPrint);
           }
        }
    }

   



// let wordsArr = text.split(" ");
// let isValid = false;
//     for (const word of wordsArr) {
//         let charWord = word.toLowerCase();
//         if(word.startsWith("#") && word.length > 1){
//             charWord = word.substring(1, word.length)
//             for(let i = 0; i < charWord.length; i++){
//                 let char = charWord[i];
                
//                 if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
//                     isValid = true;
//                 }
//             }
//             if(isValid){
//                 console.log(charWord);
//             }
//         }
//     }
}