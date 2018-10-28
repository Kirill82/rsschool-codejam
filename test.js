const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther.js');

const arr1 = [2, 3, 4, 1];
const arr2 = [1, 1, 1, 1];
const arr3 = [5, 4, 9, 12, 1, 6];

it('should check sum of arr1 elements', () => {
    assert.deepEqual(sumOfOther(arr1), [8, 7, 6, 9]);
});

it('should check sum of arr1 elements', () => {
    assert.deepEqual(sumOfOther(arr2), [3, 3, 3, 3]);
});

it('should check sum of arr1 elements', () => {
    assert.deepEqual(sumOfOther(arr3), [32, 33, 28, 25, 36, 31]);
});
