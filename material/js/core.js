$( document ).ready(function() {
	$('.button_container .icon','#buttons').click( function(){
		$('.button_container','#buttons').removeClass('active');
		$(this).parents('.button_container').toggleClass('active');
	} );
});