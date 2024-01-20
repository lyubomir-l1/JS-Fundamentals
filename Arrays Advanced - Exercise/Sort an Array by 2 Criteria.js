function byTwoCriteria(words){
    let sortedArray = words.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArray.join("\n"));
    }