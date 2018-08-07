'use strict';

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

const students: any[] = [
    {name: 'Theodor', age: 3, candies: 2},
    {name: 'Paul', age: 9.5, candies: 2},
    {name: 'Mark', age: 12, candies: 5},
    {name: 'Peter', age: 7, candies: 3},
    {name: 'Olaf', age: 12, candies: 7},
    {name: 'George', age: 10, candies: 1}
  ];

function takeListOfCandies(list) {
    let i: number = 0;
    list.forEach(element => {
        i += element["candies"]
    });
    return i;
}

console.log(takeListOfCandies(students));

function takeListOfAges(list){
    let i: number = 0
    list.forEach(element => { 
        if (element.candies < 5) {
            i += element["age"]
        }});
    return i;
}

console.log(takeListOfAges(students));