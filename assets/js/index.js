

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['home', 'about', 'faq', 'people', 'calendar', 'contact'],
		menu: '#menu',
		responsiveWidth: 600,
		responsiveHeight: 600,
		loopBottom: true
	});


	// regarding updating the navbar
	adjust = function() {
	  	if ($(window).scrollTop() <= 5) {
	        $('#navbar, #logo, #logo-other').removeClass('opaque');
	        $('.nav-text').removeClass('dark-nav-text');
	    } else {
	        $('#navbar, #logo, #logo-other').addClass('opaque');
	        $('.nav-text').addClass('dark-nav-text');
	    }
	}

	adjust();

	$(window).scroll(function(scroll) {
		adjust();
	});
});