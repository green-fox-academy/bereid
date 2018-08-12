//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

let nums: number[] = [34, 12, 24, 9, 5]
let sortedNums: number[] = []
let sortedNumsDescending: number[] = []

function newLists(nums: number[], isItTrue: boolean) {
    if (isItTrue = true) {
        let sortedNums = nums.sort(function (a, b) { return a - b });
        let sortedNumsDescending = sortedNums.reverse();
        return sortedNumsDescending;
    }
    else {
        let sortedNums = nums.sort(function (a, b) { return a - b });
        return sortedNums;
    }
}

console.log(newLists(nums, true));