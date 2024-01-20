function arraysDemo(firstArray, magicNum){
    for (let i = 0; i < firstArray.length - 1; i++) {
        for (let j = i + 1; j < firstArray.length; j++){
            if (Number(firstArray[i]) + Number(firstArray[j]) === Number(magicNum)){
                console.log(firstArray[i] + ` ` + firstArray[j]);     
            }
        }
    }
}