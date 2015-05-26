$(document).ready(function(){
	$('.carousel-control.left').click(function() {
		$('#quote-carousel').carousel('prev');
	});

	$('.carousel-control.right').click(function() {
		$('#quote-carousel').carousel('next');
	});
	
	$('.carousel').carousel({
		interval: 1000 * 8
	});
});
