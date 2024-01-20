function replaced(input){
    let arrFromInput = input.toLowerCase().split("");
    let newArr = [];
    for (let i = 0; i < arrFromInput.length; i++){
    if(arrFromInput[i] !== arrFromInput[i + 1]){
       newArr.push(arrFromInput[i]);
        // //if(i < 0){
        //     i++
        // }
    }
    }
    console.log(newArr.join(""));
    }