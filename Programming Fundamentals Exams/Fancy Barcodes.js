function fancyBarcodes(input){
    let numOfLines = Number(input.shift());
    let pattern = /(?<surrounding>@#+)(?<characters>[A-Z][a-z0-9A-Z]{4,}[A-Z])(@#+)/g;
    let digitPat = /\d/g;
    for(let i = 0; i < numOfLines; i++){
        let command = input.shift();
        let pathMatch = command.match(pattern);
        let digitmatch = command.match(digitPat);
        if(pathMatch){
            if(digitmatch){
            console.log(`Product group: ${digitmatch.join("")}`);
            }else{
             let digit = "00";
             console.log(`Product group: ${digit}`);
           } 
        }else{
            console.log("Invalid barcode");
        }
    }
    }