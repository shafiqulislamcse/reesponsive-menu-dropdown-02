$('document').ready(function(){
	$('header .toggle').click(function(){
		$('nav ul').slideToggle('200');
		$('nav ul ul').css('display','none');
	});


	$('ul li').click(function() {
	  $('ul ul').slideUp();
	  $(this).find('ul').slideToggle();
	});

	$(window).resize(function() {
	  if($(window).width() > 768) {
	    $('ul').removeAttr('style');
	  }
	});
});