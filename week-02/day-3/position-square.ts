// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number = 0
let y: number = 0

function threeRects(x, y){
    for(let i = 0; i <= 2; i++){
    ctx.fillStyle = "black";
    ctx.fillRect(x+i*50, y+i*50, 50, 50);
    }
}

threeRects(x, y);