var canvas;
var ctx;

function initGame() {
	canvas = document.getElementById("game-canvas");

	if (canvas.getContext) {
        ctx = canvas.getContext("2d");
    } else {
    	alert("Browser does not support canvas tag");
    	return;
    }

    window.requestAnimationFrame(draw);
}

