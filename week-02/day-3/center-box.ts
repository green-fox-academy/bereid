// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function rectAngle(squareSize: number){
    for(let i = 1; i <= 3; i++){
        ctx.strokeStyle = "black"
        ctx.strokeRect(canvas.width / 2 - squareSize * i / 2, canvas.height / 2 - squareSize * i / 2, squareSize * i, squareSize * i);
    }
}

rectAngle(100);