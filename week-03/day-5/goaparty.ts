let angle: number = 0;

ctx.rotate(angle * Math.PI / 180);

ctx.translate(canvas.width/2, canvas.height/2);

let goaPartyGenerator = (angle)  => {
  setTimeout(function () {
    ctx.rotate(angle * Math.PI / 180);
    ctx.strokeRect(-50 + angle, 50, 100, 100);
    angle += 20;
    ctx.lineWidth = 5;
    ctx.strokeStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
    goaPartyGenerator(angle);
  }, 31);
};

