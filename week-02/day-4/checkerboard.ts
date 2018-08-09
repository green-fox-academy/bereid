const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

// nem responsive megoldas

function drawChess() {
    for (let i = 0; i <= 3; i++) {
        let duplasor = i;
        for (let i = 0; i <= 5; i++) {
            ctx.fillStyle = "black"
            ctx.fillRect(i * 100, duplasor * 100, 50, 50);
        }
        for (let i = 0; i <= 5; i++) {
            ctx.fillStyle = "black"
            ctx.fillRect(i * 100 + 50, duplasor * 100 + 50, 50, 50);
        }
    }
}

// responsive megoldas

function drawChessresponsive(size) {
    for (let j = 0; j < canvas.width; j++) {
        for (let i = 0; i < canvas.height; i++) {
            if (i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
                ctx.fillStyle = "black"
                ctx.fillRect(j * size, i * size, size, size);
            }
        }
    }
}

drawChessresponsive(5);