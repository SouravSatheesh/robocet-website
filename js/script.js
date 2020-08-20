!(function($) {
	"use strict";
		
	$(document).ready(function() {
	
		setTimeout(function(){
			$('#loader-wrapper').hide();
		}, 2500);
		
	});
	
	  // Smooth scroll for the navigation menu and links with .scrollto classes
	$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto, .announcement, .announce-btn', function(e) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			e.preventDefault();
			var target = $(this.hash);
			console.log(this.hash)
			if (target.length) {
			  var scrollto = target.offset().top;
			  console.log(scrollto)
			  if ($('#header').length) {
				scrollto -= $('#header').outerHeight()
				console.log($('#header').outerHeight())
			  }
			  if ($(this).attr("href") == '#header') {
				scrollto = 0;
			  }
			  console.log(scrollto)
			  $('html, body').animate({
				scrollTop: scrollto
			  }, 1500, 'easeInOutExpo');
	  
			  if ($(this).parents('.nav-menu, .mobile-nav').length) {
				$('.nav-menu .active, .mobile-nav .active').removeClass('active');
				$(this).closest('li').addClass('active');
			  }
	  
			  if ($('body').hasClass('mobile-nav-active')) {
				$('body').removeClass('mobile-nav-active');
				$('.hamburger').toggleClass('nav-close-icon');
				$('.mobile-nav-overly').toggle();
			}
			  return false;
			}
		}
	});
	
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
	
  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 100;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li a').removeClass('active');
        }
		main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
		if($(this).attr('id') === "resources"){
			main_nav.find('a[href=""]').addClass('active');
		}
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first, #mobile-nav ul:first li:first").addClass('active');
      }
    });
  });

	
  
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
	  
	$('.event-tile img, .event-tile span').on('click', function(){
		$('.event-tile .event-overlay').css("display","block");
	});
	
	$(document).click(function(event) {
		if(!$(event.target).closest(".event-description, .event-tile img, .event-tile span").length){
			$('.event-tile .event-overlay').css("display","none");
		}
	});
	
	$('.event-description i').click(function() {
		$('.event-tile .event-overlay').css("display","none");
	});
	
  function aos_init() {
    AOS.init({
      easing: "ease-in-out",
      once: true
    });
  }
	aos_init();
	 
})(jQuery);