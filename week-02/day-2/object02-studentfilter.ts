export {}

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
  ];
  
function whoGotCandies(list){
    let newArray: string[] = []
    list.forEach(element => {
        if(element.candies > 4){
            newArray.push(element.name);
        }
    });
    return newArray;
}
console.log(whoGotCandies(students));

function averageCandies(list){
    let i: number = 0;
    list.forEach(element => {
        if(element.candies > 4){
        i += element["candies"]  
    }});
    i = i / list.length;
    return i;
 }
console.log(averageCandies(students));