
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function add2(list, target) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum = list[i];
        for (j = i + 1; j < list.length; j++) {
            sum = sum + list[j];
            if (sum != target) {
                sum = list[i];
            }
            else {
                return [i, j];
            }
        }
    }
}

console.log(add2([2, 7, 11, 15], 9));