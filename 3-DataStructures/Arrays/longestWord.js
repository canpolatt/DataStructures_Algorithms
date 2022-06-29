function LongestWord(sen) {
    // code goes here
    const arr = sen.split(" ");
    let max = 0;
    for (i in arr) {
        if (max < lengthOnlyCharacters(arr[i])) {
            max = lengthOnlyCharacters(arr[i]);
            sen = arr[i];
        }
    }
    return sen;
}

function lengthOnlyCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            count++;
        }
    }
    return count;
}

console.log(LongestWord("fun&!! time"));