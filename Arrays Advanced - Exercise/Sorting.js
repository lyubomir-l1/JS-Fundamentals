function sorting(numbers){
    let sortedArray = numbers.sort((a, b) => a - b);
    let rezultArray = [];   
    for(let i = 0; i < sortedArray.length; i++){
        let lastElement = sortedArray.pop();
        let firstElement = sortedArray.shift();
    rezultArray.push(lastElement);
    rezultArray.push(firstElement);
    }
    rezultArray.push(sortedArray.pop());
    rezultArray.push(sortedArray.shift());
    console.log(rezultArray.join(" "));
    }