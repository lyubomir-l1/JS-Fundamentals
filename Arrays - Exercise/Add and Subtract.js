function arraysDemo(firstArray){
    let beginSum = 0;
    let finalSum = 0;
    let newArray = [];
    for(i = 0; i < firstArray.length; i++){
        let tempNumber = Number(firstArray[i]);
        let newNumber = 0;
        if(tempNumber % 2 === 0){
            newNumber = tempNumber + i;
            beginSum += tempNumber;
            finalSum += newNumber
            newArray.push(newNumber);
        }else{
            newNumber = tempNumber - i;
            beginSum += tempNumber;
            finalSum += newNumber;
            newArray.push(newNumber);
        }
    }
    console.log(newArray);
    console.log(beginSum);
    console.log(finalSum);
}