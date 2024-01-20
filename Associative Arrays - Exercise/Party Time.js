function partyTime(input){
    let vipList = [];
    let regularList = [];
    let curGuest = input.shift();
    while(curGuest !== "PARTY"){
        let isVip = !isNaN(curGuest[0]);
    if(isVip){
        vipList.push(curGuest);
    }else{
        regularList.push(curGuest);
    }
    curGuest = input.shift();
    }
    let allGuests = vipList.concat(regularList);
    for (const guest of input) {
        allGuests.splice(allGuests.indexOf(guest), 1);
    }
    console.log(allGuests.length);
    allGuests.forEach(guest=>console.log(guest));
    }