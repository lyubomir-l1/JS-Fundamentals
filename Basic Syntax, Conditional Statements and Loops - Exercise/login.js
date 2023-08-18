function login(parameters) {
    let userName = parameters.shift();
    let pass = userName.split("").reverse().join("");
    let counter = 0;
    for (const el of parameters) {
        
        if(el === pass){
console.log(`User ${userName} logged in.`);
        }else{
            counter++
            if(counter < 4){
                console.log("Incorrect password. Try again.");
            }
            if(counter === 4 ){
                console.log(`User ${userName} blocked!`);
            }
        }
        
    }
}