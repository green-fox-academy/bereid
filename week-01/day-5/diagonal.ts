// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let line: number = 6;
let squareSides: string = "%%%%%"
let squareInsides: string = "   "

console.log(squareSides);
for(let i = 1; i <= 4; i++){
    if(i = 1){
    console.log("%%  %")    
    }
    if(i = 2){
    console.log("% % %")    
    }
    if(i = 3){
    console.log("%  %%")    
    }
    if(i = 4){
    console.log("%" + squareInsides + "%")
    }
}
console.log(squareSides);

