
function findFactorialRecursive(number) { // O(n)
    //code here
    if (number === 1) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1);
}


function findFactorialIterative(number) { // O(n)
    //code here
    if(number<2){
        return 1;
    }

    if(number===2){
        return 2;
    }
    let answer = 1;
    while (number > 0) {
        answer *= number;
        number--;
    }
    return answer;
}

console.log(findFactorialRecursive(6))
console.log(findFactorialIterative(6))