"use strict";
function zipList(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error('Lists must be of equal length');
    }
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.map((val, index) => [val, list2[index]])
        .reduce((acc, val) => acc.concat(val), []);
}
// Test cases
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
