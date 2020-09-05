jQuery(function($){
	'use strict';
	
	$(document).ready(function(){
		$('.slider').slick({
			dots: true,
			autoplay: true,
			fade: true
		});
	});
	$(document).mouseup(function(e){ 
		var main= $('.nav')
		var div = $('.burger');
		var div2=  $('.burger-wrap');
		if (!main.is(e.target) && main.has(e.target).length === 0) { 
			div2.removeClass('open');
			div.removeClass('closed');
		}
	});
	$('.burger').click(function() {
		$('.burger-wrap').toggleClass('open');
		$('.burger').toggleClass('closed');
	});

//change background nav when scroll************************
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 600) { 
			$('.nav').css('background-color', 'rgba(25,25,25, 1)');
		} else if ($(this).scrollTop() < 600 && $(this).scrollTop() > 100) {
			$('.nav').css('background-color', 'rgba(25,25,25, .75)');
		}
	});
	
	
	
	//Show-hide submunu registration*****************************
	$('.nav__link--reg').click(function() {
		
		$('#submenu').toggleClass('showMenu');
		$('#registration').toggleClass('hover');
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.nav__link--reg').length) {
			$('#submenu').removeClass('showMenu');
			$('.nav__link--reg').removeClass('hover');
		}
		e.stopPropagation();
	});
	//Accardion submenu**************************************  
	$('.burger-wrap__submenu').click(function(event){
		$(this).toggleClass('active');
		$(this).next().slideToggle(300);
	  });  
})





