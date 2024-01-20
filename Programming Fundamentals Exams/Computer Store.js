function computerStore(input){
    let priceWithoutTaxes = 0;
    for (const command of input) {
        if(command !== "special" && command !== "regular"){
            let curCommand = Number(command);
            if(curCommand < 0){
                console.log("Invalid price!");
                continue;
            }
            priceWithoutTaxes += curCommand;
        }else if(command === "special"){
            if(priceWithoutTaxes === 0){
                console.log("Invalid order!")
            }else{
                let taxes = priceWithoutTaxes * 0.2;
                let totalPrice = (priceWithoutTaxes + taxes) * 0.9;
                console.log(`Congratulations you've just bought a new computer!
                Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
                Taxes: ${taxes.toFixed(2)}$
                -----------
                Total price: ${totalPrice.toFixed(2)}$` );
            }
            }else if(command === "regular"){
                if(priceWithoutTaxes === 0){
                    console.log("Invalid order!")
                }else{
                let taxes = priceWithoutTaxes * 0.2;
                let totalPrice = (priceWithoutTaxes + taxes);
                console.log(`Congratulations you've just bought a new computer!
                Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
                Taxes: ${taxes.toFixed(2)}$
                -----------
                Total price: ${totalPrice.toFixed(2)}$` );
                }
            }
        }
    }