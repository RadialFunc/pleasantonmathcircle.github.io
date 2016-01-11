$(document).ready(function() {

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