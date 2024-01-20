function cutAndReverce(input){
    let firstHalf = input.substring(0, input.length / 2).split("").reverse().join("");
    let secondHalf = input.substring(input.length / 2, input.length).split("").reverse().join("");
    console.log(firstHalf);
    console.log(secondHalf);
    }