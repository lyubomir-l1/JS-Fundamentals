function loadingBar(number){
    if (number === 100){
        console.log(`100% Complete!`);
    }else if(number < 100){
    let percentCount = "%".repeat(10 - (100 - number)/ 10);
    let pointCount = ".".repeat((100 - number) / 10);
    
    console.log(`${number}% [${percentCount}${pointCount}]`);
    console.log("Still loading...");
    }
    }