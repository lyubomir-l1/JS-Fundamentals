function odd(string) {
    let wordObject = {};
    let rezult = "";
let stringArray = string.split(" ").map(w => w.toLowerCase());
for (const str of stringArray) {
    if(!wordObject.hasOwnProperty(str)){
        wordObject[str] = 0;
    }
    wordObject[str]++;
}
let sorted = Object.entries(wordObject).sort((a, b) => b[1] - a[1]);
for (const el of sorted) {

    if (el[1] % 2 === 1) {
       rezult += `${el[0]} ` 
    }
}
console.log(rezult);
}