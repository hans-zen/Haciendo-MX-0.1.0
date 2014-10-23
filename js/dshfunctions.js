$(document).ready(function($) {



	$('.tipo').click(function() {
		if($('.drop-lugar').is(':visible')){
			$('.drop-lugar').hide();
		}
	$('.drop-tipo').toggle();
	});

	$('.lugar').click(function() {
		if($('.drop-tipo').is(':visible')){
			$('.drop-tipo').hide();
		}
	$('.drop-lugar').toggle();
	});


	$('.inv').click(function() {
		$('.eventitle').html("&nbsp;Financiamiento y apoyos&nbsp;");
		$('.card').each(function(){
      		if($(this).hasClass('money')){
      			$(this).show();
      		}
      		else{
      			$(this).hide();
      		}
		});
	});

	$('.cursos').click(function() {
		$('.eventitle').html("&nbsp;Cursos y Conferencias&nbsp;");
		$('.card').each(function(){
      		if($(this).hasClass('curso')){
      			$(this).show();
      		}
      		else{
      			$(this).hide();
      		}
		});
	});
	$('.comunity').click(function() {
		$('.eventitle').html("&nbsp;Reuniones de comunidad&nbsp;");
		$('.card').each(function(){
      		if($(this).hasClass('comunidades')){
      			$(this).show();
      		}
      		else{
      			$(this).hide();
      		}
		});
	});

	$('.concursos').click(function() {
		$('.eventitle').html("&nbsp;Concursos&nbsp;");
		$('.card').each(function(){
      		if($(this).hasClass('concurso')){
      			$(this).show();
      		}
      		else{
      			$(this).hide();
      		}
		});
	});

	$('.alltipo').click(function() {
		$('.eventitle').html("&nbsp;Todos&nbsp;");
		$('.card').each(function(){
      		$(this).show();
		});
	});

	$('.allugar').click(function() {
		$('.evenlugar').html("&nbsp;Todos&nbsp;");
		$('.card').each(function(){
      		$(this).show();
		});
	});


	$('.distrito').click(function() {
		$('.evenlugar').html("&nbsp;D.F&nbsp;");
		$('.card').each(function(){
      		if($(this).hasClass('df')){
      			$(this).show();
      		}
      		else{
      			$(this).hide();
      		}
		});
	});

	$('.guadal').click(function() {
		$('.evenlugar').html("&nbsp;Guadalajara&nbsp;");
		$('.card').each(function(){
      		if($(this).hasClass('gdl')){
      			$(this).show();
      		}
      		else{
      			$(this).hide();
      		}
		});
	});

	$('.item').click(function() {
		$('.drop-tipo').hide();
		$('.drop-lugar').hide();
	});

	//SHOW/HIDE EVENTOS
	$('.card').click(function() {

		var evento = $(this).nextAll('.about-event:first');
		
		if ($(window).width() < 500) {
			evento.toggle();
		}
		else { 
			if($('.content-display').is(':empty')){
				evento.clone().appendTo('.content-display').show();
			}	
			else{
				$('.content-display').empty();
				evento.clone().appendTo('.content-display').show();
			}	
		}

	}); // FIN DE SHOW/HIDE EVENTOS



	$(document).scroll(function() {
		if ($(window).width() < 500){
			var arriba = $(window).scrollTop();
		if(arriba > 50){
			$('.upbar').addClass('fixup');
		}else {
    		$('.upbar').removeClass('fixup');
		}

		}
		
	});



	$('.back').click(function() {
	var anterior = $(this).closest('.month').prevAll('.month:first');
		if (anterior.length){
			$(anterior).toggle("slide");
			$(this).closest('.month').hide("slide");
			$('.content-display').empty();
		}else{
			alert("No tenemos eventos pasados a esta fecha");
		}
	});


	$('.next').click(function() {
	var siguiente = $(this).closest('.month').nextAll('.month:first');
		if(siguiente.length){
			$(siguiente).toggle("left");
			$(this).closest('.month').hide("slide");
			$('.content-display').empty();
		}else{
			alert("Aún no tenemos eventos futuros");
		}
	});




	/*http://addthisevent.com/*/
	addthisevent.settings({
	    mouse     : false,
	    css       : false,
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


	$('a[data-text]').each(function(){
		var dynamictext = $(this).prevAll('.event-title:first').html();
      $(this).attr('data-text', "'" + dynamictext + "'");
   	});


});

	window.twttr=(function(d,s,id){var t,js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})}(document,"script","twitter-wjs"));

