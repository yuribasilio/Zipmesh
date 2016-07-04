$(document).ready(function(){
	$('body').on('click', '.btn-show-search', function(e){
		e.preventDefault()
		$('form.search').removeClass('hide');
		$(this).addClass('hide');
		$('.btn-close-search').addClass('show');
	})
	$('body').on('click', '.btn-close-search', function(e){
		e.preventDefault()
		$('form.search').addClass('hide');
		$('.btn-show-search').removeClass('hide');
		$('.btn-close-search').removeClass('show');
	});

	var header = $('.tb-navigation');   
    	$(window).scroll(function () { 
    		if ($(this).scrollTop() > 97) { 
    			header.addClass("fix-navigation");
    			$('.tb-header').css("padding-bottom","75px"); } 
    		else { 
    			header.removeClass("fix-navigation"); 
    			$('.tb-header').css("padding-bottom","0px");
    		} 
    	}); 
});