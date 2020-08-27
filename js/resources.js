!(function($) {
	"use strict";
		
	
	
	// Mobile Navigation
	if ($('.nav-menu').length) {
		var $mobile_nav = $('.nav-menu').clone().prop({
		  id: 'mobile-nav',
		  class: 'mobile-nav d-lg-none'
		});
		$('body').append($mobile_nav);
		$('body').prepend('<div class="hamburger mobile-nav-toggle d-lg-none"><div class="line1"></div><div class="line2"></div><div class="line3"></div></div>');
		$('body').append('<div class="mobile-nav-overly d-lg-none"></div>');

		$(document).on('click', '.mobile-nav-toggle', function(e) {
		  $('body').toggleClass('mobile-nav-active');
		  $('.hamburger').toggleClass('nav-close-icon');
		  $('.mobile-nav-overly').toggle();
		});
		
		$(document).on('click', '.mobile-nav .drop-down > a', function(e) {
			e.preventDefault();
			$(this).next().slideToggle(300);
			$(this).parent().toggleClass('active');
		  });
	  

		$(document).click(function(e) {
		  var container = $(".mobile-nav, .mobile-nav-toggle");
		  if (!container.is(e.target) && container.has(e.target).length === 0) {
			if ($('body').hasClass('mobile-nav-active')) {
			  $('body').removeClass('mobile-nav-active');
			  $('.hamburger').toggleClass('nav-close-icon');
			  $('.mobile-nav-overly').fadeOut();
			}
		  }
		});
		} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
		$(".mobile-nav, .mobile-nav-toggle").hide();
	}
		
  
    // Back to top button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
		  $('.back-to-top').fadeIn('slow');
		} else {
		  $('.back-to-top').fadeOut('slow');
		}
	  });
	
	  $('.back-to-top').click(function() {
		$('html, body').animate({
		  scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	  });
	 
})(jQuery);