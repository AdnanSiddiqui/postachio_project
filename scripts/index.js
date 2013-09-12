var tagline = document.getElementById('tagline');
var extra = document.getElementById('extra');

tagline.addEventListener('click', function() {
	extra.classList.toggle('extra-shown');
}, false);

var extraClose = document.getElementById('extra-close');

extraClose.addEventListener('click', function() {
	extra.classList.remove('extra-shown');
	extra.classList.add('extra-disappear');
	var timeoutId = window.setTimeout(function() {
		extra.classList.remove('extra-disappear');
	}, 2000);
}, false);

var seeker = document.querySelector('#seeker'),
	storyteller = document.querySelector('#storyteller'),
	resume = document.querySelector('.modal#resume'),
	samples = document.querySelector('.modal#samples');

seeker.addEventListener('click', function() {
	resume.classList.add('appear');
}, false);

storyteller.addEventListener('click', function() {
	samples.classList.add('appear');
}, false);

var modalClose = document.querySelectorAll('.close');

var i,
	length = modalClose.length;

for( i = 0; i < length; i++ ) {
	modalClose[i].addEventListener('click', function() {
		if (resume.className == "modal appear" ) {
			console.log('true');
			resume.classList.remove('appear');
			resume.classList.add('disappear');
			var timeoutId = window.setTimeout(function() {
				resume.classList.remove('disappear');
			}, 1500);			
		}

		samples.classList.remove('appear');
		samples.classList.add('disappear');
		var timeoutId = window.setTimeout(function() {
			samples.classList.remove('disappear');
		}, 1500);
	}, false);
}

var footer = document.getElementsByTagName('footer')[0];



