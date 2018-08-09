const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleBoxes() {
    for (let i = 1; i <= 20; i++) {
        ctx.beginPath();
        ctx.fillStyle = "purple";
        ctx.strokeStyle = "black";
        ctx.fillRect(20 * i, 20 * i, 20, 20);
    }
}

purpleBoxes();