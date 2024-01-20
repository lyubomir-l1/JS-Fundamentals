function storeProvision(inStock, delivery){
    let storeProducts = {};
    for(let i = 0; i < inStock.length; i+=2){
        let currentProduct = inStock[i];
        storeProducts[currentProduct] = Number(inStock[i+1]);
    }
    for(let i = 0; i < delivery.length; i+=2){
        currentProduct = delivery[i];
        if(!storeProducts.hasOwnProperty(currentProduct)){
            storeProducts[currentProduct] = 0;
        }
        storeProducts[currentProduct] += Number(delivery[i+1]);
    }
    for (const product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
    }
    }