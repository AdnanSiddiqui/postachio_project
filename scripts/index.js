var tagline = document.getElementById('tagline');
var extra = document.getElementById('extra');

//function show(el) {
//	el.classList.add('shown');
//}

tagline.addEventListener('click', function() {
	extra.classList.add('shown');
}, false);
