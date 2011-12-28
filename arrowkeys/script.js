function go(e) {
	if (e.keyCode > 36 && e.keyCode < 41) {
		window.x = x +1;
		document.getElementById("message").innerHTML = "You have pressed the arrow keys a total of " + x + " times!";
	}
}
