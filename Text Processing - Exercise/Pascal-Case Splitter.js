function pascalCaseSplitter(input){
    let splitedWord = input.split(/(?=[A-Z])/).join(", ");
    console.log(splitedWord);
    }