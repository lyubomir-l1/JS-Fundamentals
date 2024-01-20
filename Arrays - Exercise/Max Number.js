function arraysDemo(firstArray){
    let newArr = [];
    for(i = 0; i < firstArray.length; i++){
        let currentNum = firstArray[i];
        let isBigger = true;
        for(let k = i + 1; k < firstArray.length; k++){
            if(currentNum <= firstArray[k]){
                isBigger = false;
            }
        }
        if(isBigger){
            newArr.push(firstArray[i])
        }
    }
console.log(newArr.join(" "));
}