var Loader = (function($) {

	var items = new Array();
	var $element, $percent_element;
	var current = 0;

	var preload = function(element, percent_element, callback) {

		// cache selectors
		$element = $(element);
		$percent_element = $(percent_element);

		// grab all images in element
		items = getImages();

		// load each image
		for(var i = 0; i < items.length; i++) {
			
			var imgLoad = new Image();

			$(imgLoad).load(function() {
				
				updatePercent(callback);

			}).attr('src', items[i]);
			
			updatePercent(callback);

		}

	};

	var updatePercent = function(callback) {

		// add one to current
		setTimeout(function() {
			
			current++;
			$percent_element.css( "width", "" + Math.round((current / items.length) * 100) + "%" );

			// execute callback
			if(current == items.length) callback();

		}, 250);

	};

	var getImages = function() {
		
		$element.find('*:not(script)').each(function() {
			
			var url = "";
			if ($(this).css('background-image').indexOf('none') == -1) {
			
				url = $(this).css('background-image');
				if(url.indexOf('url') != -1) {
					var temp = url.match(/url\((.*?)\)/);
					url = temp[1].replace(/\"/g, '');
				}
			
			} else 
			if($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
				url = $(this).attr('src');
			}
			
			if (url.length > 0) {
				items.push(url);
			}

		});

		return items;

	}

	return {
		preload: preload
	};

}(jQuery));