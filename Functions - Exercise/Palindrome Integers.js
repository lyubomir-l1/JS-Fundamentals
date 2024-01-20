function palindromeIntegers(array){
    let arrayLength = array.length
for(let index = 0; index < arrayLength; index++){
    let numAsString = array[index].toString();
    let reversedString = numAsString.split("").reverse().join("");
  if(numAsString === reversedString){
    console.log(true);
  }else{
    console.log(false);
  }
}
}