const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let canvasWidht: number = canvas.width;
let canvasHeight: number = canvas.height;
let lineHeight: number = 20;


for(let i = canvasWidht; i > 0; i -= lineHeight){
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(i, canvasHeight - i);
    ctx.lineTo(canvas.width - i, canvas.height - i);
    ctx.stroke();
}



ctx.strokeStyle = "red";
ctx.moveTo(20, canvasHeight - 20);
ctx.lineTo(canvas.width/2, canvas.height - 300);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.moveTo(canvas.width/2, canvas.height - 300);
ctx.lineTo(canvas.width - 20, canvas.height - 20);
ctx.stroke();



/*ctx.strokeStyle = "red";
ctx.moveTo(20 + 20, canvasHeight - 20);
ctx.lineTo(canvas.width/2 + 10, canvas.height - 300 + 10);
ctx.stroke();


ctx.beginPath();
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(0 + 20, canvas.height -20);
ctx.lineTo(canvas.width - 20, canvas.height - 20);
ctx.stroke();




ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(12, 6);
ctx.lineTo(0, 6);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(0, 6);
ctx.lineTo(6, 0);
ctx.stroke();*/

