$(function(){
	if ($(".navbar").offset().top > 50) {
		console.log("nav blanco");
	    $(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
	    $(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			console.log("nav blanco");
		    $(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
		    $(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});	
});
