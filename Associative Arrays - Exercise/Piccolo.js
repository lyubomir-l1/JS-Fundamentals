function piccolo(input){
    let parkingList = new Map();
    let fullList = input.map(el=>el.split(", "));
    fullList.forEach(element => {
        let command = element[0];
        let carNumber = element[1];
        if(command === "IN"){
            parkingList.set(carNumber, command);
        }else if(command === "OUT"){
            parkingList.delete(carNumber);
    
        }
    });
    let sortedCarNumbers =  Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));
    if(sortedCarNumbers.length === 0){
        console.log("Parking Lot is Empty");
    }
    sortedCarNumbers.forEach((carNumber)=> console.log(`${carNumber[0]}`));
    }