//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
    if (str.length === 0) {
        return "";
    }
    return str[str.length-1] + reverseString(str.substr(0,str.length-1))
}

console.log(reverseString('yoyo mastery'));

//should return: 'yretsam oyoy'



function reverseString2(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString2(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString2('yoyo mastery'));