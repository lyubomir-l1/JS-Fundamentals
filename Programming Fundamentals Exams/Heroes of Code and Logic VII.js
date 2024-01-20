function heroes(input){
    let numOfHeroes = Number(input.shift());
    let targetObject = {};
    let targetArr = [];
    for (let index = 0; index < numOfHeroes; index++) {
        let line = input.shift().split(" ");
        let heroName = line[0];
        let hitPoints = Number(line[1]);
        let manapoints = Number(line[2]);
       targetObject = {heroName, hitPoints, manapoints};
       targetArr.push(targetObject);
    }
    let command = input.shift();
    while (command !== "End") {
        let curCommand = command.split(" - ");
        
        switch (curCommand[0]) {
            case "CastSpell":
                let castSpellName = curCommand[1];
                let castManaNeeded = Number(curCommand[2]);
                let spellName = curCommand[3];
                let castfound = targetArr.find((x)=> x.heroName === castSpellName);
                let castIndex = targetArr.indexOf(castfound);
                if(castfound){
                    if(targetArr[castIndex].manapoints >= castManaNeeded){
                        targetArr[castIndex].manapoints -= castManaNeeded;
                        console.log(`${castSpellName} has successfully cast ${spellName} and now has ${targetArr[castIndex].manapoints} MP!`);
                    }else{
                        console.log(`${castSpellName} does not have enough MP to cast ${spellName}!`);
                    }
                }
    
            break;
            case "TakeDamage":
                let damageName = curCommand[1];
                let damage = Number(curCommand[2]);
                let attacker = curCommand[3];
                let damagefound = targetArr.find((x)=> x.heroName === damageName);
                let damageIndex = targetArr.indexOf(damagefound);
                if(damagefound){
                    targetArr[damageIndex].hitPoints -= damage;
                    if(targetArr[damageIndex].hitPoints > 0){
                        console.log(`${damageName} was hit for ${damage} HP by ${attacker} and now has ${targetArr[damageIndex].hitPoints} HP left!`);
                    }else{
                        console.log(`${damageName} has been killed by ${attacker}!`);
                        targetArr.splice(damageIndex, 1);
                    }
                }
            break;
            case "Recharge":
                let rechargeName = curCommand[1];
                let amount = Number(curCommand[2]);
                let rechargefound = targetArr.find((x)=> x.heroName === rechargeName);
                let rechargeIndex = targetArr.indexOf(rechargefound);
                if(rechargefound){
                    let takenCharge = 0;
                    let chargeNeeded = 200 - targetArr[rechargeIndex].manapoints;
                if(chargeNeeded >= amount){
                    takenCharge = amount;
                    targetArr[rechargeIndex].manapoints += takenCharge;
                }else{
                    takenCharge = chargeNeeded;
                    targetArr[rechargeIndex].manapoints += takenCharge;
                }
                    console.log(`${rechargeName} recharged for ${takenCharge} MP!`);
                }
            break;
            case "Heal":
                let healName = curCommand[1];
                let healAmount = Number(curCommand[2]);
                let healfound = targetArr.find((x)=> x.heroName === healName);
                let healIndex = targetArr.indexOf(healfound);
                if(healfound){
                    let healCharge = 0;
                    let healNeeded = 100 - targetArr[healIndex].hitPoints;
                if(healNeeded >= healAmount){
                    healCharge = healAmount;
                    targetArr[healIndex].hitPoints += healCharge;
                }else{
                    healCharge = healNeeded;
                    targetArr[healIndex].hitPoints += healCharge;
                }
                    console.log(`${healName} healed for ${healCharge} HP!`);
                }
            break;
        }   
        command = input.shift();
    }
    for (const prop of targetArr) {
        console.log(`${prop.heroName}`);
        console.log(`  HP: ${prop.hitPoints}`);
        console.log(`  MP: ${prop.manapoints}`);
    }
    }