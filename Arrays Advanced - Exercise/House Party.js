function houseParty(commands) {
    let guestsArr = [];
    for (const el of commands) {
        let sentence = el.split(" ");
        let name = sentence[0];
        if (sentence.length === 3) {
            if (guestsArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestsArr.push(name);
            }

        } else {
            if (!guestsArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestsArr.indexOf(name);
                guestsArr.splice(index, 1);
            }
        }

    }
    console.log(guestsArr.join("\n"));
}