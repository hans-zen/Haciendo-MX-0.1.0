$(document).ready(function($) {
	

	$('.back').click(function() {
		var anterior = $(this).closest('.month').prevAll('.month:first');
		if (anterior.length){
			$(anterior).toggle("slide");
			$(this).closest('.month').hide("slide");
		}else{
			alert("No tenemos eventos pasados a esta fecha");
		}
	});


	$('.next').click(function() {
		var siguiente = $(this).closest('.month').nextAll('.month:first');
		if(siguiente.length){
			$(siguiente).toggle("left");
			$(this).closest('.month').hide();
		}else{
			alert("Aún no tenemos eventos futuros")
		}
	});


	$('.search').click(function() {
		$('.pl').toggle();
		$(this).css({
			background: '#33ccff',
			color: 'white'
		});
	});
/*
	$('.search').hover(function() {
		$(this).css({
			background: '#29aebb',
			color: 'white'
		});
	}, function() {
		$(this).css({
			background: 'white',
			color: '#524d5a'
		});
	});
*/
	$('.pl').click(function() {
		$('.search').css({
			background: 'white',
			color: '#524d5a'
		});
	});

	$('.endf').click(function() {
		$('.filter-title').html("&nbsp;D.F");
		$('.event').filter('.df').css('display', 'block');
		$('.event').filter('.gdl').css('display', 'none');
		$('.event').filter('.mty').css('display', 'none');
		$('.pl').slideUp(500);
	});

	$('.engdl').click(function() {
		$('.filter-title').html("&nbsp;Guadalajara");
		$('.event').filter('.gdl').css('display', 'block');
		$('.event').filter('.df').css('display', 'none');
		$('.event').filter('.mty').css('display', 'none');
		$('.pl').slideUp(500);
	});

	$('.enmty').click(function() {
		$('.filter-title').html("&nbsp;Monterrey");
		$('.event').filter('.mty').css('display', 'block');
		$('.event').filter('.gdl').css('display', 'none');
		$('.event').filter('.df').css('display', 'none');
		$('.pl').slideUp(500);
	});

	$('.anyone').click(function() {
		$('.filter-title').html("&nbsp;Todos");
		$('.event').filter('.mty').css('display', 'block');
		$('.event').filter('.gdl').css('display', 'block');
		$('.event').filter('.df').css('display', 'block');
		$('.pl').slideUp(500);
	});

	$('.view').click(function() {
		$(this).closest('.event').nextAll('.event-description:first').toggle("slide");
	});

	$(document).scroll(function() {
		var arriba = $(window).scrollTop();
		if(arriba > 1){
			$('.mes').css('position', 'fixed');
		}else {
    		$('.mes').css('position', 'static');
  	}
	});



/*http://addthisevent.com/*/
	addthisevent.settings({
    license   : "aao8iuet5zp9iqw5sm9z",
    mouse     : false,
    css       : true,
    outlook   : {show:true, text:"Outlook Calendar"},
    google    : {show:true, text:"Google Calendar"},
    yahoo     : {show:true, text:"Yahoo Calendar"},
    hotmail   : {show:true, text:"Hotmail Calendar"},
    ical      : {show:true, text:"iCal Calendar"},
    facebook  : {show:true, text:"Facebook Event"},
    dropdown  : {order:"outlook,google,ical"},
    callback  : ""
});
/*http://addthisevent.com/*/




});