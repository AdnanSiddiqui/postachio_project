var tagline = document.getElementById('tagline');
var extra = document.getElementById('extra');

tagline.addEventListener('click', function() {
	extra.classList.toggle('shown');
}, false);

var close = document.getElementById('close');

function removeClass() {
	extra.classList.remove('disappear');
}

close.addEventListener('click', function() {
	extra.classList.remove('shown');
	extra.classList.add('disappear');
	var timeoutId = window.setTimeout(function() {
		extra.classList.remove('disappear');
	}, 2000);
}, false);
