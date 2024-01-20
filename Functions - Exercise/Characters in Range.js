function charactersInRange(firstChar, lastChar){
    let position = "";
let rangeStart = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt());
let rangeStop = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt());
for(let curChar = rangeStart +1; curChar < rangeStop; curChar++){
position += String.fromCharCode(curChar) + " "
}
console.log(position);
}