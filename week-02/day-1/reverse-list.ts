// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

// with a built in method

let numList: number[] = [3, 4, 5, 6, 7];
let newList = numList.reverse();
console.log("My new list is " + newList);

// with a loop

let numList2: number[] = [3, 4, 5, 6, 7];
let newList2: number[] = []
for (let i = numList.length -1; i >= 0; i--) {
    newList2.push(numList2[i]);
}

console.log("My new list made with a loop is: " + newList2);