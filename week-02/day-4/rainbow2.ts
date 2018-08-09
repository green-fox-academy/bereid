'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let colors: string [] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let distance: number = 3;

function rainbowBoxes (input: number, color: string) {
    let period = canvas.height / distance;
    for (let i: number = 0; i < period; i++) {
        let size = input - (i * distance);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(canvas.width / 2 - size/2, canvas.height / 2 - size/2, size, size);
    }
}
rainbowBoxes(canvas.height, colors[0]);