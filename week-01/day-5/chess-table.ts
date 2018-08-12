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

//masik megoldas

let blackRow = "% % % %"
let whiteRow = " % % % %"

for(let i = 1; i < 5; i++){
    console.log(blackRow)
    console.log(whiteRow)
}

// harmadik megoldas

for(let i = 0; i <= 0; i++){
    for(let j = 0; j <= 8; j++){
        if(i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1){
            console.log("%")
        }
        else{
            console.log(" ")
        }
    }
}