var Epic = (function($) {

	var init = function() {

		// preload functionality
		if(typeof Loader !== 'undefined') {
			Loader.preload('body', '#percent', function() { 

				setTimeout(function(){
					$('.loader').fadeOut(500);
					setTimeout(function(){
						$('body').addClass('animate-in');
					}, 250);
				}, 250);
		
			})
		}

		// Modal functionality
		if(typeof Modal !== 'undefined') 
			Modal.init();

		// Form functionality
		if(typeof Forms !== 'undefined') 
			Forms.init();

		// Ad Slider functionality
		if(typeof Slider !== 'undefined') 
			Slider.init();

		// handle the lack of SVG support
		if(!Modernizr.svg) {
			
			$('img[src*="svg"]').attr('src', function() {
				return $(this).attr('src').replace('.svg', '.png');
			});
		
		} else {

			// replace svg with svg code
			jQuery('img.svg-raw').each(function(){
	            var $img = jQuery(this);
	            var imgID = $img.attr('id');
	            var imgClass = $img.attr('class');
	            var imgURL = $img.attr('src');

	            jQuery.get(imgURL, function(data) {
	                // Get the SVG tag, ignore the rest
	                var $svg = jQuery(data).find('svg');

	                // Add replaced image's ID to the new SVG
	                if(typeof imgID !== 'undefined') {
	                    $svg = $svg.attr('id', imgID);
	                }
	                // Add replaced image's classes to the new SVG
	                if(typeof imgClass !== 'undefined') {
	                    $svg = $svg.attr('class', imgClass+' replaced-svg');
	                }

	                // Remove any invalid XML tags as per http://validator.w3.org
	                $svg = $svg.removeAttr('xmlns:a');

	                // Replace image with new SVG
	                $img.replaceWith($svg);

	            }, 'xml');

	        });
		}

	};
	
	var togglePastEvents = function() {

		$('.header').toggleClass('active-past');
	
	};

	return {
		init: init,
		togglePastEvents: togglePastEvents
	};

}(jQuery));

$(function() {
	Epic.init();
});