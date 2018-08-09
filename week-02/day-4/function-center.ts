'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function lineToCenter(x: number, y: number){
    for(let i = 0; i <= canvas.width; i += 20){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(x + i, y);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
    for(let i = 0; i <= canvas.height; i += 20){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(canvas.width, y + i);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
    for(let i = 0; i <= canvas.width; i += 20){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(x + i, canvas.height);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
    for(let i = 0; i <= canvas.height; i += 20){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(x, y + i);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
}

lineToCenter(0, 0);