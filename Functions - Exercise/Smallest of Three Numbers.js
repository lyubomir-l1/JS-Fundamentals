function smallestOfThreeNumbers (numOne, numTwo, numThree){
    let smallestOfTwo = 0;
    let smallestNum = 0;
    if(numOne < numTwo){
        smallestOfTwo = numOne;
    }else{
        smallestOfTwo = numTwo;
    }
    if(smallestOfTwo < numThree){
        smallestNum = smallestOfTwo;
    }else{
        smallestNum = numThree;
    }
    console.log(smallestNum);
    }