$( document ).ready(function() {
	$('.button_container .icon','#buttons').click( function(){
		$(this).parent().parent().toggleClass('active');
	} );
});