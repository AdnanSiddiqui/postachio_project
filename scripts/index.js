var tagline = document.getElementById('tagline'),
 extra = document.getElementById('extra'),
 extraClose = document.getElementById('extra-close'),
 modalClose = document.querySelectorAll('.close'),
 i,
 length = modalClose.length,
 seeker = document.querySelector('#seeker'),
 storyteller = document.querySelector('#storyteller'),
 resume = document.querySelector('.modal#resume'),
 samples = document.querySelector('.modal#samples');

var addClass = function( elementClicked, elementModified, classAdded ) {
	elementClicked.addEventListener( 'click', function() {
		elementModified.classList.add( classAdded );
	}, false );
}

addClass( tagline, extra, 'extra-shown' );

addClass( seeker, resume, 'appear' );

addClass( storyteller, samples, 'appear' );

extraClose.addEventListener('click', function() {
	extra.classList.remove('extra-shown');
	extra.classList.add('extra-disappear');
	var timeoutId = window.setTimeout(function() {
		extra.classList.remove('extra-disappear');
	}, 2000);
}, false);

for( i = 0; i < length; i++ ) {
	modalClose[i].addEventListener('click', function() {
		if (resume.className == "modal appear" ) {
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


