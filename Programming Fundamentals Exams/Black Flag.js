function blackFlag(data) {
    let daysOfPLunder = Number(data[0]);
    let daylyPlunder = Number(data[1]);
    let expectedPLunder = Number(data[2]);
    let totalPLunder = 0;
    for(let i = 1; i <= daysOfPLunder; i++){ 
totalPLunder += daylyPlunder;
if(i % 3 === 0){
    totalPLunder += daylyPlunder / 2;
} 
if(i % 5 === 0){
    totalPLunder -= (totalPLunder * 0.3);
}
    }
    if(totalPLunder >= expectedPLunder){
        console.log(`Ahoy! ${totalPLunder.toFixed(2)} plunder gained.`);
    }else{
       console.log(`Collected only ${((totalPLunder / expectedPLunder) * 100).toFixed(2)}% of the plunder.`);
    }
}