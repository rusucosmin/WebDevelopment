$(document).ready(function() {
	
    redrawDotNav();

	/* Scroll event handler */
    $(window).bind('scroll',function(e){
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.year1914').click(function(){
    	$('html, body').animate({
    	    scrollTop:$('#year1914').offset().top
    	}, 1000 );
    	return false;
	});
    $('a.year1915').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#year1915').offset().top
    	}, 1000 );
    	return false;
    });
    $('a.year1916').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#year1916').offset().top
    	}, 1000 );
    	return false;
    });
	$('a.year1917').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#year1917').offset().top
    	}, 1000 );
    	return false;
	});
	$('a.year1918').click(function () {
	    $('html, body').animate({
	        scrollTop:$('#year1918').offset().top
	    }, 1000 );
	    return false;
	});
	$('a.year1919').click(function () {
	    $('html, body').animate({
	        scrollTop:$('#year1919').offset().top
	    }, 1000);
	    return false;
	});
	$('a.romania').click(function () {
	    $('html, body').animate({
	        scrollTop:$('#romania').offset().top
	    }, 1000);
	    return false;
	});
	$('a.gallery').click(function () {
	    $('html, body').animate({
	        scrollTop:($('#gallery').offset().top+57)
	    }, 1000);
	    return false;
	});
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});
/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
    var section1Top = $('#year1914').offset().top - (($('#year1915').offset().top - $('#year1914').offset().top) / 2);
    // The top of each section is offset by half the distance to the previous section.
    var section2Top = $('#year1915').offset().top - (($('#year1916').offset().top - $('#year1915').offset().top) / 2);
    var section3Top = $('#year1916').offset().top - (($('#year1917').offset().top - $('#year1916').offset().top) / 2);
    var section4Top = $('#year1917').offset().top - (($('#year1918').offset().top - $('#year1917').offset().top) / 2);
    var section5Top = $('#year1918').offset().top - (($('#year1919').offset().top - $('#year1918').offset().top) / 2);
    var section6Top = $('#year1919').offset().top - (($('#romania').offset().top - $('#year1919').offset().top) / 2);
    var section7Top = $('#romania').offset().top -  (($('#gallery').offset().top - $('#romania').offset().top) / 2);
    var section8Top = $('#gallery').offset().top -  (($(document).height() - $('#gallery').offset().top) / 2);
    $('nav#primary a').removeClass('active');
    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
        $('nav#primary a.year1914').addClass('active');
    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
        $('nav#primary a.year1915').addClass('active');
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
        $('nav#primary a.year1916').addClass('active');
    } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
        $('nav#primary a.year1917').addClass('active');
    } else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top) {
        $('nav#primary a.year1918').addClass('active');
    } else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top) {
        $('nav#primary a.year1919').addClass('active');
    } else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top) {
        $('nav#primary a.romania').addClass('active');
    } else if ($(document).scrollTop() >= section8Top) {
        $('nav#primary a.gallery').addClass('active');
    }
}
