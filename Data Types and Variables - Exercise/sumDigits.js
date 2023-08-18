function sumDigits(number){
  let numToStr = number.toString();
  let sum = 0;
  for(let i = 0; i < numToStr.length; i++){
    let curNum = Number(numToStr[i]);
    sum += curNum 
  }
  console.log(sum);
}