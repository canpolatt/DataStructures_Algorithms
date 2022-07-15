/*
Google Question
Given an array = [2,5,1,2,3,5,1,2,4]
It should return 2

Given an array = [2,1,1,2,3,5,1,2,4]
It should return 1

Given an array = [2,3,4,5]
It should return undefined

 */


// naive approach O(n)
function firstRecurringCharacter(nums) {
    // number[] -> number
    let map = new Map();

    // set map items
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return nums[i];
        }
            map.set(nums[i],'');
    }
    return undefined;
}


function firstRecurringCharacter2(nums){
    let map = {};

    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]!== undefined){
            return nums[i];
        }else {
            map[nums[i]]=i; // or true
        }
    }
    return undefined;
} // O(n)




//console.log(firstRecurringCharacter([2,5,5,2,3,4]))


//-----------------------------------------

function firstRecurringCharacter3(nums){
    let range=nums.length;
    let num=0;
    for (let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j] && j-i < range){
                range=j-i;
                num=nums[i];
            }
        }
    }
    return num;
}

console.log(firstRecurringCharacter3([2,5,3,2,5,3,4]))