// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let rectColor: string[] = ['green', 'blue', 'yellow', 'black'];

function fourRectangles() {
    for (let i = 1; i <= rectColor.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = rectColor[i - 1];
        ctx.fillRect(40 * i, 40 * i, i * 10, i * 10);
    }
}

fourRectangles();