function shoppingList(array) {
    let startlist = array.shift().split("!");
    let command = array.shift();
    while(command !== "Go Shopping!"){
    let nextAction = command.split(" ");
    let advice = nextAction[0];
    let product = nextAction[1];
    let newProduct = nextAction[2];
    let productIndex = 0;
    switch(nextAction[0]){
        case "Urgent": 
        if(!startlist.includes(product)){
            startlist.unshift(product);
        }
        break;
        case "Unnecessary": 
            productIndex = startlist.indexOf(product);
            if(productIndex > -1){
                startlist.splice(productIndex, 1);
            }
        break;
        case "Correct": 
        productIndex = startlist.indexOf(product);
            if(productIndex > -1){
                startlist.splice(productIndex, 1, newProduct);
            }
        break;
        case "Rearrange":
        productIndex = startlist.indexOf(product); 
        if(productIndex > -1){
           let cutElement = startlist.splice(productIndex, 1);
           startlist.push(cutElement);
        }
        break;
    }
    command = array.shift();
    }
    console.log(startlist.join(", "));
    }