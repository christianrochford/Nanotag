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

(function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider;
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 480) ? 1 :
           (window.innerWidth < 760) ? 2 : 3;
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 400,
      itemMargin: 0,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());