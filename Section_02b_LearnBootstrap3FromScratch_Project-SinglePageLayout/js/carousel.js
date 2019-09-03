$(document).ready(function() {
	$(".next-link").on("click", nextLink);
	$(".previous-link").on("click", previousLink);
});


function nextLink(e) {
	var currentActiveImage = $(".image-shown");
	var nextActiveImage = currentActiveImage.next();
	
	if(nextActiveImage.length == 0) {
		nextActiveImage = $(".carousel-inner img").first();
	}
	
	currentActiveImage.removeClass("image-shown").css("z-index", -10);
	nextActiveImage.addClass("image-shown").css("z-index", 20);
	
	$(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);
	e.preventDefault();	
}


function previousLink(e) {
	var currentActiveImage = $(".image-shown");
	var nextActiveImage = currentActiveImage.prev();
	
	if(nextActiveImage.length == 0) {
		nextActiveImage = $(".carousel-inner img").last();
	}
	
	currentActiveImage.removeClass("image-shown").css("z-index", -10);
	nextActiveImage.addClass("image-shown").css("z-index", 20);
	
	$(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);
	e.preventDefault();
}