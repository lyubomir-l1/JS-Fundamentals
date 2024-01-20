function wordsTracker(input){
    let words = {};
    let magicWords = input.shift().split(" ");
    for (const word of magicWords) {
        words[word] = 0;
        }
        for (const curWord of input) {
            if(words.hasOwnProperty(curWord)){
                words[curWord]++;
            }
    }
    let sorted = Object.entries(words).sort((a,b) => b[1] - a[1]);
    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
    
    }