
var pikaLeft = 0;
var pikaTop = 0;

var pikaXSpeed = 0;
var pikaYSpeed = 0;

var pikaTopSpeed =15;

xOff = 152;
yOff = 184;
xMax = $(window).width() - xOff;
yMax = $(window).height() - yOff;

mouseX = 0;
mouseY = 0;

$(document).ready(function() {

  	$(window).resize(function() {
    	xMax = $(window).width() - xOff;
		yMax = $(window).height() - yOff;
  	});

	window.setInterval(function() { move() },9);
	window.setInterval(function() { decelerate(1) },13);


	$(window).mousemove(function(event) {
		mouseX = event.pageX;
		mouseY = event.pageY;
	});

});



function move() {

	accelerate(1);

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

	if ((pikaXSpeed > -pikaTopSpeed) && (window.pikaLeft + 100 > mouseX)) {
		pikaXSpeed -= acc;
	}

	if ((pikaYSpeed > -pikaTopSpeed) && (window.pikaTop + 20 > mouseY)) {
		pikaYSpeed -= acc;
	}
	

	if ((pikaXSpeed < pikaTopSpeed) && (window.pikaLeft + 100 < mouseX)) {
		pikaXSpeed += acc;
	}

	if ((pikaYSpeed < pikaTopSpeed) && (window.pikaTop + 20 < mouseY)) {
		pikaYSpeed += acc;
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