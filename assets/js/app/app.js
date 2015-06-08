$(document).ready(function(){

	winW = $(window).width();
	winH = $(window).height();
	footerH = $('footer').height();

	$('#banner').height(winH);

	if(winW < 760){
		$('nav').css({height: winH});
		$('.dd-parent').addClass('clickable');
	} else {
		$('nav').css({height: '45'});
		$('.dd-parent').removeClass('clickable');
	}

	$('.icon-menu').click(function(e){
		e.preventDefault();
		$('nav').addClass('on');
		$('.icon-menu').hide();
	});
	$('.icon-close').click(function(e){
		e.preventDefault();
		$('nav').removeClass('on');
		$('.icon-menu').show();
	});

	$('.clickable').click(function(e){
		e.preventDefault();
		if($(this).next('.dropdown').hasClass('open')){
			$(this).next('.dropdown').removeClass('open');
		} else {
			$(this).next('.dropdown').addClass('open');
		}
	});

	$('.icon-arrow-down').click(function(e){
		e.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});

	$('#filter').change(function(){
		selected = $(this).val();
		$('.list-item').hide();
		if(selected === 'others'){
			$('.list-item').fadeIn(200);
			$('#filter option').each(function(){
				if($(this).val() !== '' && $(this).val() !== 'others'){
					$('.' + $(this).val()).hide();
				}
			});
		}else if(selected === ''){
			$('.list-item').fadeIn(200);
		}else{
			$('.'+selected).fadeIn(200);
		}
	});

	$('.icon-view').click(function(e){
		e.preventDefault();
		$('header').css({position: 'fixed'});
		$('#gallery').fadeIn(200);
		$('.gallery-slider').flexslider({
	      slideshow: false,
	      animation: "slide",
	      animationLoop: true,
	      directionNav: true
	    });
	});
	$('.icon-close').click(function(e){
		e.preventDefault();
		$('header').css({position: 'absolute'});
		$('#gallery').fadeOut(200);
	});
	$('.gallery-link').click(function(e){
		e.preventDefault();
		slide = $(this).attr('data-gallery');
		$('header').css({position: 'fixed'});
		$('#gallery').fadeIn(200);
		$('.gallery-slider').flexslider({
	      slideshow: false,
	      animation: "slide",
	      animationLoop: true,
	      directionNav: true
	    });
	    $('.gallery-slider').flexAnimate(1); 
	});
});

$(window).resize(function(){

	winW = $(window).width();
	winH = $(window).height();
	footerH = $('footer').height();

	$('#banner').height(winH);

	if(winW < 760){
		$('nav').css({height: winH});
		$('.icon-menu').show();
		$('.dd-parent').addClass('clickable');
	} else {
		$('nav').css({height: '45'});
		$('.icon-menu').hide();
		$('.dd-parent').removeClass('clickable');
		$('.dropdown').removeClass('open');
	}

	$('nav').removeClass('on');

	$('.clickable').click(function(e){
		e.preventDefault();
		if($(this).next('.dropdown').hasClass('open')){
			$(this).next('.dropdown').removeClass('open');
		} else {
			$(this).next('.dropdown').addClass('open');
		}
	});

});