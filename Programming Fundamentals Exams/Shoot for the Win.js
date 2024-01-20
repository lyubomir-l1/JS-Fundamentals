function shootForTheWin(array) {
    let targets = array.shift().split(" ").map(Number);
    let shotTargetsCount = 0;
    for (const command of array) {
        if(command !== "End"){
            let curIndex = Number(command);
            if(curIndex >= 0 && curIndex < targets.length){
                let reduceIncreaseNumber = Number(targets[curIndex]);
                targets.splice(curIndex, 1, "-1");
                shotTargetsCount++;
                for(let i = 0; i < targets.length; i++){
                    if(targets[i] !== "-1" && targets[i] > reduceIncreaseNumber){
                        targets[i] -= reduceIncreaseNumber;
                    }else if(targets[i] !== "-1" && targets[i] <= reduceIncreaseNumber){
                        targets[i] += reduceIncreaseNumber;
                    }
                }
            }
        }else{
            console.log(`Shot targets: ${shotTargetsCount} -> ${targets.join(" ")}`);
        }
    }

}