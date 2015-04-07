$(document).ready(function() {
	fontResize();
	showArrows();


	$( window ).resize(function() {
		fontResize();
		showArrows();
	});

	$('.flip-container').on('click', function(){
		//$('.flip-container').removeClass('flip');
		$(this).toggleClass('flip');
		overlay = $(this).find('.overlay');

		if (overlay.is(":hidden"))
		{
			setTimeout(function(){
				overlay.show(); 
			}, 600);
		}
	});

	$('.review').on('scroll', function(){
		var arrow = $(this).parent().find('.arrow');
		arrow.fadeOut();
		arrow.addClass('scrolled');
	});
});

function fontResize(){
	var item = $(".item:nth-of-type(2)").width(); 
	var newSize = Math.ceil(parseInt(item)/18.5);
	if (newSize < 20){
		newSize = "20px";
	}
	else{
		newSize+="px";
	}

	$('.item h2').css('font-size', newSize);

	if ($( window ).width() > 699){
		var itemBig = $(".item:nth-of-type(1)").width(); 
		var newSizeBig = Math.ceil(parseInt(itemBig)/25.5) + "px";

		$('.item.big h2').css('font-size', "36px");
	}
}

function showArrows(){
	$('.back').each(function(i, b){
		var arrow = $(this).find('.arrow');
		var text = $(this).find('.text');

		rHeight = $(this).find('.review').height();
		tHeight = text.height();

		console.log('text height: ' + tHeight + '\nreview height: ' + rHeight + '\n');

		if (tHeight <= rHeight){
			arrow.hide();
		}
		else if(!arrow.hasClass('scrolled')){
			arrow.show();
		}
	});
}