// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function horizontal(x, y){
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();

}

function horizontalThree(newX, newY){
    for(let i = 0; i <= 2; i++){
        horizontal(newX , newY + i * 30);
    }
}

horizontalThree(20, 30);