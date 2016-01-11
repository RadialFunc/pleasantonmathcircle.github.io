$(document).ready(function() {

	smoothScroll.init({
		speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    	easing: 'easeInOutCubic', // Easing pattern to use
	});

	adjust = function() {
	  	if ($(window).scrollTop() <= 0) {
	        $('#navbar').removeClass('opaque');
	        $('#logo').removeClass('opaque');
	        $('.nav-text').removeClass('dark-nav-text');
	    } else {
	        $('#navbar').addClass('opaque');  
	        $('#logo').addClass('opaque');
	        $('.nav-text').addClass('dark-nav-text');
	    }
	}

	adjust();

	$(window).scroll(function(scroll) {
		adjust();
	});
});