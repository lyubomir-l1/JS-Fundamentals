function addAndSubtract(firstInt, secondInt, lastInt){
    
    function add(a, b){
        let sumOfFirstTwo = a + b;
        return sumOfFirstTwo;
    }
    let sum = add(firstInt, secondInt);
    function subtract(c, d){
        let finalScore = c - d;
        return finalScore;
    }
    let answear = subtract(sum, lastInt);
    return answear;
}