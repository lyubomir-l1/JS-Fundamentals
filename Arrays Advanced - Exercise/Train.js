function train(array) {
    let passangersInTrain = array.shift().split(" ").map(Number);
    let maxCapacity = Number(array.shift());
    let arrayLength = array.length
    for (let i = 0; i < arrayLength; i++) {
        let commandNum = array[i].split(" ");
        if (commandNum[0] === "Add") {
            let newWagonPassangers = Number(commandNum[1]);
            passangersInTrain.push(newWagonPassangers);

        } else {
            for (let j = 0; j < passangersInTrain.length; j++) {
                let passangersInCurrentWagon = passangersInTrain[j]
                if (passangersInCurrentWagon + Number(commandNum[0]) <= maxCapacity) {
                    passangersInTrain[j] += Number(commandNum[0]);
                    break;
                }
            }
        }

    }
    console.log(passangersInTrain.join(" "));
}