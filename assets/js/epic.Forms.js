var Forms = (function($) {

	var init = function() {

		// set size listener
		$('.forms-size a').on("click", setSize)	


	};

	var setSize = function() {

		// cache parent
		var $parent = $(this).parent();

		// add remove active classes
		$parent.find('a').removeClass('active');
		$(this).addClass('active');

		$parent.find('.value').val($(this).html());

	};

	return {
		init: init
	};

}(jQuery));