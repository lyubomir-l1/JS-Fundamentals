function oddAndEvenSum(singleNumber){
    let numArr = singleNumber.toString();
    let evenSum = 0;
    let oddSum = 0;
    for(let index = 0; index < numArr.length; index++ ){
        let curElement = Number(numArr[index]);
        if(curElement % 2 === 0 ){
            evenSum += curElement;
        }else{
            oddSum += curElement
        }
        }
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
    