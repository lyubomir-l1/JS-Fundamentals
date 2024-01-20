function arraysDemo(firstArray, secondArray){
    let thirdArray = [];
    let evenIndex = 0;
    let oddIndex = "";
    for(i = 0; i < firstArray.length; i++){
        
    if(i % 2 === 0){
evenIndex = Number(firstArray[i]) + Number(secondArray[i]);
thirdArray.push(evenIndex);
    }else{
oddIndex = firstArray[i] + secondArray[i];
thirdArray.push(oddIndex)
    }
    }
    console.log(thirdArray.join(" - "));
}