const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 100x100 square to the center of the canvas.

let rectSize = 100;
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(canvas.width / 2 - rectSize / 2, canvas.height / 2 - rectSize / 2, rectSize, rectSize,)