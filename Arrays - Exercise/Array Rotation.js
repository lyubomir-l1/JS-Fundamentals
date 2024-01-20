function arraysDemo(firstArray, numRotations){
    newArr = [];

    for(i = 0; i < numRotations; i++){
        let cutElement = firstArray.shift();
        
        firstArray.push(cutElement);
    }
    console.log(firstArray.join(" "))
}