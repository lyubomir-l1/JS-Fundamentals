function surchForANumber(array, actions){
    let elementsToTake = actions[0];
    let elementsToDelete = actions[1];
    let magicalNumber = actions[2];
    let counter = 0;
    let newArray = array.slice(0, elementsToTake);
    newArray.splice(0, elementsToDelete);
    for(i = 0; i < newArray.length; i++){
        let curNum = newArray[i];
        if(curNum === magicalNumber){
            counter++;
        }
    }
    
    console.log(`Number ${magicalNumber} occurs ${counter} times.`);
    }