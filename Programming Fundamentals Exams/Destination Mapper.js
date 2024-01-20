function destinationMapper(input){
    let pattern = /(?<separator>=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let realDestination = input.matchAll(pattern);
    let destinationArr = [];
    let rezult = 0;
    for (const match of realDestination) {
        destinationArr.push(match.groups.destination);
        let curNum = match.groups.destination.length;
        rezult += curNum
        
    }
    console.log(`Destinations: ${destinationArr.join(", ")}`);
    console.log(`Travel Points: ${rezult}`);
    }