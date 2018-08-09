const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]]
let fox: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]

function connect(list: number[][]) {
    for (let i = 0; i < list.length; i++) {
        if(i == list.length - 1){
            ctx.beginPath();
            ctx.strokeStyle = "green";
            ctx.moveTo(list[i][0], list[i][1]);
            ctx.lineTo(list[0][0], list[0][1]);
            ctx.stroke();
        }else{
            ctx.beginPath();
            ctx.strokeStyle = "green";
            ctx.moveTo(list[i][0], list[i][1]);
            ctx.lineTo(list[i + 1][0], list[i + 1][1]);
            ctx.stroke();
        }
    }
}

/*function connect2(list2: number[][]) {
    for (let j = 0; j <= list2.length; j++) {
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.moveTo(list2[j][0], list2[j][1]);
        ctx.lineTo(list2[j + 1][0], list2[j + 1][1]);
        ctx.stroke();
    }
}*/

connect(fox);