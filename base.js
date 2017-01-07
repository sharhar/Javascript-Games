var canvas;
var ctx;
var gl;
var fragmentShader;
var vertexShader;
var shaderProgram;

function getShader(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
      return null;
    }
    var str = "";
    var k = shaderScript.firstChild;
    while (k) {
      if (k.nodeType == 3) {
        str += k.textContent;
      }
      k = k.nextSibling;
    }
    var shader;
    if (shaderScript.type == "x-shader/x-fragment") {
      shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
      shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
      return null;
    }
    gl.shaderSource(shader, str);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert(gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }

function initGame() {
	canvas = document.getElementById("game-canvas");

	try {
		gl = canvas.getContext("experimental-webgl");
		gl.viewportWidth = canvas.width;
      	gl.viewportHeight = canvas.height;

      	fragmentShader = getShader(gl, "shader-fs");
		vertexShader = getShader(gl, "shader-vs");
		
		shaderProgram = gl.createProgram();
    	
    	gl.attachShader(shaderProgram, vertexShader);
    	gl.attachShader(shaderProgram, fragmentShader);
    	gl.linkProgram(shaderProgram);

    	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      		alert("Could not initialise shaders");
    	}

    	
	} catch(e) {

	}
	
	if(!gl) {
 		ctx = canvas.getContext("2d");
 		window.requestAnimationFrame(drawCanvas);
	} else {
		window.requestAnimationFrame(drawGL);
	}
}

