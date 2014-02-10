// JavaScript Document
$(document).ready(function() {
	var clicked = false;
	$("#stire_div").find("img").click( function() {
		loading();
		$("#popup_content").find("img").attr("src", $(this).attr("src"));
		setTimeout( function() {
			loadPopUp();
			}, 500);
	});
	$("div.close").hover(function() {
		$("span.ecs_tooltip").show();
	}, function() {
		$("span.ecs_tooltip").hide();
	})
	$("div.close").click(function() {
		disablePopUp();	
	});
	$(this).keyup(function(event) {
			if(event.which == 27)
				disablePopUp();	
	});
	function loading() {
		$("div.loader").show();
	}
	function closeLoading() {
		$("div.loader").fadeOut("normal");
	}
	var popupStatus = 0;
	function loadPopUp() {
		if(popupStatus == 0) {
			closeLoading();
			$("#toPopup").fadeIn(0500);
			$("#backgroundPopup").css("opacity", "0.7");
			$("#backgroundPopup").fadeIn("normal");	            
			popupStatus = 1;
		}
	}
	function disablePopUp() {
		if(popupStatus == 1) {
     		$("#toPopup").fadeOut("normal");
			$("#backgroundPopup").fadeOut("normal");
			popupStatus = 0;
		}
	}
});