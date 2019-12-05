(function ($) {
  $(document).ready(function(){
  	convertToPager();

  	let convertToPager = () => {
  		let current = $('#views_slideshow_slide_counter_slide-page_1 > .num');
  		let total = $('#views_slideshow_slide_counter_slide-page_1 > .total');
  		console.log('Here ', current, total);
  	}

  });
})(jQuery);