// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let percentSign = "%"
let spaceSign = " "

for(let i = 1; i < 5; i++){
    console.log(percentSign + spaceSign + percentSign + spaceSign + percentSign + spaceSign + percentSign + spaceSign)
    console.log(spaceSign + percentSign + spaceSign + percentSign + spaceSign + percentSign + spaceSign + percentSign)

}

let blackRow = "% % % %"
let whiteRow = " % % % %"

for(let i = 1; i < 5; i++){
    console.log(blackRow)
    console.log(whiteRow)
}