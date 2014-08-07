$(function(){
	$('.overlay').hide();
	$('.projbs, .projac, .projnar, .projhs, .projinfo, .projpoly').hide();

	var clicked = false;
	$('.icon').click(function(){
		$('.proj' + this.id).show();
		$('.overlay').show();
		clicked = true;
	});

	$('.close').click(function(){
		$('.projbs, .projac, .projnar, .projhs, .projinfo, .projpoly').hide();
		$('.overlay').hide();
	});


	$(document).mouseup(function (e){
    var container = $(".projbs, .projac, .projnar, .projhs, .projinfo, .projpoly");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('.overlay').hide();
    }
});
});