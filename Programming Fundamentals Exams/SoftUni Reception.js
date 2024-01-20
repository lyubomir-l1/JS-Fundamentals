function softUniReception(arr) {
    let singleNums = arr.map(Number);
    let eficiencyPerHour = singleNums[0] + singleNums[1] +singleNums[2];
    let numOfStudents = arr[3];
    let hourcount = 0;
    while(numOfStudents > 0){
        numOfStudents -= eficiencyPerHour;
        hourcount++;
        if(hourcount % 4 === 0){
            hourcount++;
        }
    }

    
    console.log(`Time needed: ${hourcount}h.`);
}