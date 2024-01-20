function distinctArray(numbers){
    let uniqueNumbersArr = [];
    for(let i = 0; i < numbers.length; i++){
        if(!uniqueNumbersArr.includes(numbers[i])){
            uniqueNumbersArr.push(numbers[i]);
        }
    }
    console.log(uniqueNumbersArr.join(" "));
    }