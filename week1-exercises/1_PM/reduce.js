const assert = require('assert');
const { cursorTo } = require('readline');

/**
 * Complete the implementation of sum and reduce such that reducing an array
 * returns the sum of its values. e.g. [0,4,3,6,9].reduce(sum, 0) === 22
 */

const sum = (acc, cur) => {
    return acc + cur;
};

/**
 * This works too!
 * 
 * Array.prototype.reduce = function(fun, init) {
    let arr = this;
    let acc = init;
    for (let i = 0; i < arr.length; i++)
    {
        acc = fun(acc, arr[i]);
    }
    return acc;
};
 * 
 */

Array.prototype.reduce = function(fun, init) {
    let acc = init;
    this.forEach((elt) => {
        acc = fun(acc, elt);
    });
    return acc;
};

const arr1 = [0, 1, 2, 3, 4];
const arr2 = [3, -4, 134, 0.5, 7];
const arr3 = [0, 0];

assert(arr1.reduce(sum, 0) === 10);
assert(arr2.reduce(sum, 0) === 140.5);
assert(arr3.reduce(sum, 0) === 0);