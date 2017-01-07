var x = -50;
var y = -50;
var time = 0;

function drawGL() {
    gl.clearColor(1, 0, 1, 1);

    gl.clear(gl.COLOR_BUFFER_BIT);

    window.requestAnimationFrame(drawGL);
}

function drawCanvas() {
    ctx.save();

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="#FF0000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.restore();

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.fillStyle="#000000";

    ctx.translate(300, 300);
    ctx.rotate(100*time*Math.PI/180);
    

    ctx.fillRect(x,y,100,100);
    time += 0.01;

    window.requestAnimationFrame(drawCanvas);
}