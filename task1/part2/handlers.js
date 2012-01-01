
var pikaLeft = 0;
var pikaTop = 0;

var pikaXSpeed = 0;
var pikaYSpeed = 0;

var pikaTopSpeed =15;

var upKeyIsDown = false;
var leftKeyIsDown = false;
var downKeyIsDown = false;
var rightKeyIsDown = false;

xOff = 152;
yOff = 184;
xMax = $(window).width() - xOff;
yMax = $(window).height() - yOff;


$(document).ready(function() {
  	$(document).bind("keydown", function(evt) {
  		downHandler(evt);
  		evt.preventDefault();
  	});

  $(document).bind("keyup", function(evt) {
  	upHandler(evt);
  	evt.preventDefault();
  });

  $(window).resize(function() {
    xMax = $(window).width() - xOff;
	yMax = $(window).height() - yOff;
  });

  window.setInterval(function() { move() },9);
  window.setInterval(function() { decelerate(2) },14);



});


function arrowKeySet(keycode,bool) {

	switch(keycode) {
	case 37:
		//LEFT
		leftKeyIsDown = bool;
		break;

	case 38:
		//UP
		upKeyIsDown = bool;
		break;

	case 39:
		//RIGHT
		rightKeyIsDown = bool;		
		break;

	case 40:
		//DOWN
		downKeyIsDown = bool;
		break;
	}
}

function downHandler(evt) {
	arrowKeySet(evt.keyCode,true);
}

function upHandler(evt) {
	arrowKeySet(evt.keyCode,false);
}


function move() {

	accelerate(2);

	window.pikaLeft += pikaXSpeed;
	window.pikaTop += pikaYSpeed;

	window.pikaTop =  (window.pikaTop > yMax) ? yMax : window.pikaTop ;
	window.pikaTop =  (window.pikaTop < 0) ? 0 : window.pikaTop;
	window.pikaLeft =  (window.pikaLeft > xMax) ? xMax : window.pikaLeft;
	window.pikaLeft =  (window.pikaLeft < 0) ? 0 : window.pikaLeft;

	$("#pika").css("left",window.pikaLeft );
	$("#pika").css("top",window.pikaTop );
	
}

function accelerate(acc) {

	if ((pikaXSpeed > -pikaTopSpeed) && leftKeyIsDown) {
		pikaXSpeed -= acc;
	}

	if ((pikaYSpeed > -pikaTopSpeed) && upKeyIsDown) {
		pikaYSpeed -= acc;
	}
	
	if ((pikaYSpeed < pikaTopSpeed) && downKeyIsDown) {
		pikaYSpeed += acc;
	}

	if ((pikaXSpeed < pikaTopSpeed) && rightKeyIsDown) {
		pikaXSpeed += acc;
	}

}

function decelerate(acc) {
	if (pikaXSpeed > 0) {
		if (pikaXSpeed - acc < 0) {
			pikaXSpeed = 0;	
		} else {
			pikaXSpeed-= acc;
		}
	} else if (pikaXSpeed < 0) {
		if (pikaXSpeed + acc > 0) {
			pikaXSpeed = 0;	
		} else {
			pikaXSpeed+= acc;
		}
	}

	if (pikaYSpeed > 0) {
		if (pikaYSpeed - acc < 0) {
			pikaYSpeed = 0;	
		} else {
			pikaYSpeed-= acc;
		}
	} else if (pikaYSpeed < 0) {
		if (pikaYSpeed + acc > 0) {
			pikaYSpeed = 0;	
		} else {
			pikaYSpeed+= acc;
		}
	}
}