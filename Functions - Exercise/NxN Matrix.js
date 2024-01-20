function matrix(number){
    let arr = [];
for(let i = 0; i < number; i++){
    let newNum = "";
    for(let k = 0; k < number; k++){
    newNum += `${number} `;
    }
    arr.push(newNum)
  }
  console.log(arr.join("\n"));
}