var tagline = document.getElementById('tagline');
var extra = document.getElementById('extra');

tagline.addEventListener('click', function() {
	extra.classList.toggle('shown');
}, false);

var close = document.getElementById('extra-close');

close.addEventListener('click', function() {
	extra.classList.remove('shown');
	extra.classList.add('disappear');
	var timeoutId = window.setTimeout(function() {
		extra.classList.remove('disappear');
	}, 2000);
}, false);

var second = document.querySelectorAll('.modal')[1];
second.style.visibility = "hidden";