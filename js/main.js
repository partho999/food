(function($){
	'use strict'
	// menu fixed:
	$(window).scroll( function(){
		var durotto = $(window).scrollTop();
		if (durotto > 120) {
			$('header').addClass('header.fixed')
			$('.mobile-bar').css({
				color: "#111",
				fontSize : '25'
			})

		} else{
			$('header').removeClass('header.fixed')
			$('.mobile-bar').css({
				color: "#FFF",
				fontSize : '25'
			})
		}
	});

	// The Mobile menu:
	$('.mobile-bar').on('click', function(){
		$('.food-menu-icon').fadeIn({});
	});
	$('.bar-icon-close').on('click', function(){
		$('.food-menu-icon').fadeOut({});
	});

	// Resize the menu:
	$(window).resize(function(){
		var screenSize = $(window).width();
		if (screenSize > 991) {
			$('.food-menu-icon').css({
				display:'none'
			});
		}
	});

}) (jQuery);