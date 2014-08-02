$(function(){
	$('.black').hide();
	$('#hero-img').on('mouseenter', function(){
		$('.black').fadeIn(400);
	}).on('mouseleave', function(){
  		$(".black").fadeOut(400);
	});
});