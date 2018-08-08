// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineDraw(x,y){
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
    }

function threeLineDraw (step){
    for(let i = 0; i <= 100; i++){
        lineDraw(step * i, 0);
    }
}

threeLineDraw(6);