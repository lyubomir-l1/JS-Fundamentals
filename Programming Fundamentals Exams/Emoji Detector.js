function emojiDetector(input) {
    let text = input.shift();
    let coolPattern = /\d/g;
    let validEmojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g
    let coolThresholdNums = text.match(coolPattern);
    let coolThreshold = 1;
    let startEmoji = text.match(validEmojiPattern);
    let emoji = [];
    let emojiValues = {};
    for (const num of coolThresholdNums) {
        coolThreshold *= Number(num);
    }
    let allEmojis = text.matchAll(validEmojiPattern);
    for (const el of allEmojis) {
        emoji.push(el.groups.emoji);
    }
    for (let i = 0; i < emoji.length; i++) {
        let element = emoji[i];
        let elementValue = 0;
        for (let j = 0; j < element.length; j++) {
            let letterValue = Number(element.charCodeAt(j));
            elementValue += letterValue;
        }
        if (elementValue >= coolThreshold) {
            emojiValues[element] = elementValue;
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emoji.length} emojis found in the text. The cool ones are:`);
    for (let i = 0; i < startEmoji.length; i++) {
        for (const key in emojiValues) {
            if (startEmoji[i].includes(key)) {
                console.log(startEmoji[i]);
            }
        }
    }

}