function factorialDivision(firstNumber, secondNumber) {

    function Firstfactorialize(firstNumber) {
        if (firstNumber < 0) {
            return -1;
        } else if (firstNumber == 0) {
            return 1;
        } else {
            return (firstNumber * Firstfactorialize(firstNumber - 1));
        }
    }

    function Secondfactorialize(secondNumber) {
        if (secondNumber < 0) {
        return -1;
        }else if (secondNumber == 0) {
        return 1;
        } else {
        return (secondNumber * Secondfactorialize(secondNumber - 1));
        }
    }

    console.log((Firstfactorialize(firstNumber) / Secondfactorialize(secondNumber)).toFixed(2));
    
}