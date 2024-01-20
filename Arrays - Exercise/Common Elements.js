function arraysDemo(firstArray, secondArray){
    for(i = 0; i < firstArray.length; i++){
        for(k = 0; k < secondArray.length; k++){
            if(firstArray[i] === secondArray[k]){
                console.log(firstArray[i]);
            }
        }
    }
}