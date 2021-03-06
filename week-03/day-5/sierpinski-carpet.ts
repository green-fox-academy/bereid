const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

class Sierpinski {
  centerSquare(x, y, size) {
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }
  nineSquares(x, y, size, i) {
    if (i < 5) {
      this.centerSquare(x, y, size / 3);
      for (let row = -1; row <= 1; row++) {
        for (let col = -1; col <= 1; col++) {
          if (col != 0 || row != 0) {
            this.nineSquares(x - col * (size / 3), y - row * (size / 3), size / 3, i + 1);
          }

        }
      }

    }
  }
}

let myLoopedSquares: Sierpinski  = new Sierpinski();

myLoopedSquares.nineSquares(canvas.width / 2, canvas.height / 2, canvas.width, 0);