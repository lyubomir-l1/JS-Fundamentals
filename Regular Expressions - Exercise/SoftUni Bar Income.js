function softUniBarIncome(input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g
   let totalIncome = 0;
  let command = input.shift();
  while(command !== "end of shift"){
    let curData = pattern.exec(command);
    if(curData){
        let curCustomer = curData.groups.customer;
        let curProduct = curData.groups.product;
        let curCount = Number(curData.groups.count);
        let curPrice = Number(curData.groups.price);
        let totalProductPrice = curCount * curPrice;
        console.log(`${curCustomer}: ${curProduct} - ${totalProductPrice.toFixed(2)}`);
        totalIncome += totalProductPrice;
        command = input.shift();
        curData = pattern.exec(command);
    }else{
        command = input.shift();
    }
    
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}