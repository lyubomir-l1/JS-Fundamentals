function arraysDemo(firstArray){
    let foundIndex = "no"
    for(let i = 0; i < firstArray.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        for(let l = 0; l < i; l++){
            leftSum = leftSum + firstArray[l];
        }
        for(let r = i + 1; r < firstArray.length; r++){
            rightSum = rightSum + firstArray[r];
        }
        if(leftSum === rightSum){
            foundIndex = i
        }
    }
console.log(foundIndex);
}