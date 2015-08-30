var Modal = (function($) {

	var init = function() {


	};
	
	var toggleModal = function(id) {

		if($('body').hasClass('body-modal-open')) {
			close(id);
		} else {
			show(id);
		}
	
	};

	var show = function(id) {
		
		$('body').addClass('body-modal-open');

		setTimeout(function() {
			$(id).addClass('modal-active');
		},25);
		
	}

	var close = function(id) {

		$('body').removeClass('body-modal-open');

		setTimeout(function() {
			$('.modal').removeClass('modal-active');
		},25);
		
	};

	return {
		init: init,
		toggleModal: toggleModal,
		show: show,
		close: close
	};

}(jQuery));