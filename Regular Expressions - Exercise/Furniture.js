function furniture(input){
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+[\.]?[0-9]+)!(?<quantity>[0-9]+)/g
    let totalMoney = 0;
    let curLine = input.shift();
    console.log("Bought furniture:");
    while(curLine !== "Purchase"){
        let validProduct = pattern.exec(curLine);
        curLine = input.shift();
        while(validProduct !== null){
            let productName = validProduct.groups.name;
            let productPrice = validProduct.groups.price;
            let productQuantity = validProduct.groups.quantity;
            totalMoney += productPrice * productQuantity;
            validProduct = pattern.exec(curLine);
            console.log(productName);
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
    }