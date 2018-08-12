const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let a: number = 10;


ctx.beginPath();
ctx.strokeStyle = "red"
ctx.moveTo(100, 550);
ctx.lineTo(500, 550);
ctx.lineTo(300, 550 - 200 * Math.pow(3, 0.5));
ctx.lineTo(100, 550);
ctx.stroke();

function pyramid(a: number) {
    for (let i = 0; i > 0; i++) {
        ctx.beginPath();
        ctx. strokeStyle = "red"
        ctx.moveTo(100, 550);
        ctx.stroke();
    }
}

let danielBerei = {juniorSoftwareDeveloper: true}