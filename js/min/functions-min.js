$(document).ready(function($){$(".back").click(function(){var e=$(this).closest(".month").prevAll(".month:first");e.length?($(e).toggle("slide"),$(this).closest(".month").hide("slide")):alert("No tenemos eventos pasados a esta fecha")}),$(".next").click(function(){var e=$(this).closest(".month").nextAll(".month:first");e.length?($(e).toggle("left"),$(this).closest(".month").hide()):alert("Aún no tenemos eventos futuros")}),$(".search").click(function(){$(".pl").toggle(),$(this).css({background:"#33ccff",color:"white"})}),$(".pl").click(function(){$(".search").css({background:"white",color:"#524d5a"})}),$(".endf").click(function(){$(".filter-title").html("&nbsp;D.F"),$(".event").filter(".df").css("display","block"),$(".event").filter(".gdl").css("display","none"),$(".event").filter(".mty").css("display","none"),$(".pl").slideUp(500)}),$(".engdl").click(function(){$(".filter-title").html("&nbsp;Guadalajara"),$(".event").filter(".gdl").css("display","block"),$(".event").filter(".df").css("display","none"),$(".event").filter(".mty").css("display","none"),$(".pl").slideUp(500)}),$(".enmty").click(function(){$(".filter-title").html("&nbsp;Monterrey"),$(".event").filter(".mty").css("display","block"),$(".event").filter(".gdl").css("display","none"),$(".event").filter(".df").css("display","none"),$(".pl").slideUp(500)}),$(".anyone").click(function(){$(".filter-title").html("&nbsp;Todos"),$(".event").filter(".mty").css("display","block"),$(".event").filter(".gdl").css("display","block"),$(".event").filter(".df").css("display","block"),$(".pl").slideUp(500)}),$(".view").click(function(){$(this).closest(".event").nextAll(".event-description:first").toggle("slide")}),$(document).scroll(function(){var e=$(window).scrollTop();e>1?$(".mes").css("position","fixed"):$(".mes").css("position","static")}),addthisevent.settings({license:"aao8iuet5zp9iqw5sm9z",mouse:!1,css:!0,outlook:{show:!0,text:"Outlook Calendar"},google:{show:!0,text:"Google Calendar"},yahoo:{show:!0,text:"Yahoo Calendar"},hotmail:{show:!0,text:"Hotmail Calendar"},ical:{show:!0,text:"iCal Calendar"},facebook:{show:!0,text:"Facebook Event"},dropdown:{order:"outlook,google,ical"},callback:""})});