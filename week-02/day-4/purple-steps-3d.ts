'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


function draw3DSteps(vinput: number) {
    let var1 = vinput;
    for (let i = 1; i <= 7; i++) {
        ctx.fillStyle = "purple";
        ctx.fillRect(var1, var1, 10 * i, 10 * i);
        var1 += 10 * i
    }
}

draw3DSteps(10);