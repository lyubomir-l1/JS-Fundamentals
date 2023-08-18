function vacation(people, type, day){
    let price = 0;
    if(day === "Friday"){
        switch(type){
            case "Students": price = people * 8.45; break;
            case "Business": price = people * 10.9; break;
            case "Regular": price = people * 15; break;
        }
    }else if(day === "Saturday"){
        switch(type){
            case "Students": price = people * 9.8; break;
            case "Business": price = people * 15.6; break;
            case "Regular": price = people * 20; break;
        }
    }else if(day === "Sunday"){
        switch(type){
            case "Students": price = people * 10.46; break;
            case "Business": price = people * 16; break;
            case "Regular": price = people * 22.5; break;
        }
    }
    if(type === "Students" && people >= 30){
        price *= 0.85
    }else if(type === "Business" && people >= 100){
        price = (people - 10) * (price / people);
    }else if(type === "Regular" && people >= 10 && people <= 20){
        price *= 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}