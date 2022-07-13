let arr1 = [5, 5, 5, 10, 20]; //true
let arr2 = [5, 5, 10, 10, 20]; //false

// [] -> boolean
// lemonade:5$
// change -> user
// return type true/false
// each customer pay 5$(0),10$(5$),20$(15$)
//

function lemonadeChange(arr) {
  //count 5 and 10
  let five = 0;
  let ten = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
      five++;
    } else if (arr[i] == 10) {
      ten++;
      five--;
    } else if (arr[i] == 20) {
      if (ten > 0) {
        ten--;
        five--;
      } else {
        five = five - 3;
      }
    }
  }

  if (five < 0 || ten < 0) {
    return false;
  }
  return true;
}

console.log(lemonadeChange(arr2));
