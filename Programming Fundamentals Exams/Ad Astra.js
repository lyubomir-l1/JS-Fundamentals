function astra(input){
    let text = input.shift();
    let pattern = /(#|\|)(?<itemName>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1\B/g;
    let caloriesPerDay = 2000;
    let matches = text.matchAll(pattern);
    let finalMatches = text.matchAll(pattern);
    let sumCals = 0;
    for (const match of matches) {
    sumCals += Number(match.groups.calories);
    
    }
let daysToLast = Math.floor(sumCals / caloriesPerDay)
console.log(`You have food to last you for: ${daysToLast} days!`);   
for (const iterator of finalMatches) {
    console.log(`Item: ${iterator.groups.itemName}, Best before: ${iterator.groups.expDate}, Nutrition: ${iterator.groups.calories}`);
}

}