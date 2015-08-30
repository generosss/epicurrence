var Slider = (function($) {

	var Slider;

	var init = function() {

		// create new slider properties
		Slider = new SliderProps($('.ads-slider'), 0, 0, 0);

		// set slide total
		Slider.total = Slider.element.find('.slide').length - 1;

		// set default slide states
		Slider.element.find('.slide').each(function(index) {

			// add active slide class
			if(index == 0) $(this).addClass('slide-active');

			// append anchor tags to slider nav
			if(Slider.total > 0) $('.slider-nav').append('<a href="javascript:;" class="slidebtn"></a>');

		});

		// set first testimonial nav active
		Slider.element.find('a.slidebtn:eq(0)').addClass('active');

		// set listener for testimonial nav
		Slider.element.on("click", "a.slidebtn", goToItem);

		// Auto rotate
		if(Slider.total > 0) autoRotate();

	};

	var goToItem = function(e) {

		// make sure current item doesn't get double clicked
		if(Slider.next == $(this).index('.slidebtn')) return;

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = $(this).index('.slidebtn');

		// animate to new item
		animate();

	};

	var previous = function() {

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = Slider.next == 0 ? Slider.total : Slider.next - 1;

		// animate to new item
		animate();

	};

	var next = function() {

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = Slider.next == Slider.total ? 0 : Slider.next + 1;
		
		// animate to new item
		animate();

	};

	var autoRotate = function() {

		setTimeout(function() {

			next();
			autoRotate();

		}, 5000);

	};

	var animate = function() {

		// set active slide
		Slider.element.find('.slide').removeClass('slide-active');

		// adjust nav
		Slider.element.find('.slidebtn').removeClass('active');
		Slider.element.find('.slidebtn:eq(' + Slider.next + ')').addClass('active');

		setTimeout(function() {
			Slider.element.find('.slide:eq(' + Slider.next + ')').addClass('slide-active');
		}, 50);

	};

	return {
		init: init,
		next: next,
		previous: previous
	};

}(jQuery));

function SliderProps(element, total, next, current) {

	this.element = element;
	this.total = total;
	this.next = next;
	this.current = current;

}