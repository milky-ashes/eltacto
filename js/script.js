jQuery(document).ready(function(){


	$('input[placeholder], textarea[placeholder]').placeholder();
	
	
	if($('html').hasClass('lt-ie9')){
		$('input[type=checkbox] + label, input[type=radio] + label').on('click', function(){
			if(!($(this).prev().hasClass('current'))){
				$(this).prev().addClass('current');
			}
			else{
				$(this).prev().removeClass('current');
			}
		});
	}
	
	//big bunner on inpex page
	 
	$('.js-slider').flexslider({
		directionNav: false,
    	useCSS: false
	});

	 $('.js-thumb').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 202,
	    itemMargin: 0, 
	    controlNav: false,
    	useCSS: false
	  });

	 $('.js-color-slide').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 60,
	    itemMargin: 0,
	    controlNav: false,
    	useCSS: false
	  });

	 //for search in focus

	 $('.js-search').each(function(){
	 	$(this).on('focus', function(){
	 		$(this).closest('.search').addClass('focus');
	 	});
	 	$(this).on('blur', function(){
	 		$(this).closest('.search').removeClass('focus');
	 	});
	 });

	 //for hide or show basket menu

	$('.js-basket-link').each(function(){
	 	$(this).on('click', function(e){
	 		e.preventDefault();
	 		$(this).toggleClass('active');
	 		$(this).closest('div').toggleClass('active');
	 	});
	});

	//for hide or show basket menu
	$('.js-w-submenu').each(function(){
	 	$(this).closest('li').mouseenter(function(){
	 		$(this).addClass('active');
	 	});
	 	$(this).closest('li').mouseleave(function(){
	 		$(this).removeClass('active');
	 	});
	});

	$('.js-select').each(function(){
		$('.js-select').chosen();
	})

	//for show list

	$('.js-show-link').each(function(){

		$(this).on('click', function(e){
			e.preventDefault();
			var listNumber = $(this).data('list');
			$(this).addClass('hide');
			$('ul[data-list=' + listNumber + ']').addClass('show');
		});
		
	});

	$('.js-text-link').each(function(){
		$(this).on('click', function(e){
			e.preventDefault();
			var textNumber = $(this).data('text');
			$(this).addClass('hide');
			$('div[data-text=' + textNumber + ']').slideDown();
		});
		
	});

	//for personal slider
	$('#carousel').flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 99,
	    itemMargin: 0,
	    direction: "vertical",
	    asNavFor: '#slider',
	    minItems: 5,   
    	maxItems: 5,
    	useCSS: false
	  });
	   
	  $('#slider').flexslider({
	    animation: "slide",
	    controlNav: false,
	    directionNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel",
    	useCSS: false
	  });

	//for tabs

	$('.js-tabs').each(function(){
		$('.js-tabs-link').on('click', function(e){
			e.preventDefault();
			id = $($(this).attr('href'))

			if(!($(this).hasClass('active'))){
				$(this).closest('.js-tabs').find('.js-tabs-link').removeClass('active');
				$(this).closest('.js-tabs').find('.tab-block').removeClass('active');
				$(this).addClass('active');
				id.addClass('active');
			}
		});
	});


	//for popup
	$('.js-popup-link').on('click', function(e){
 		e.preventDefault();

 		$($(this).attr('href')).show();
 		$('body').append('<div id="fade"></div>');
		
  		$('.js-close').on('click', function(e){
  			e.preventDefault();

			$(this).closest('.js-popup').hide();
			$('#fade').remove();
		});
	});

	$(document).on('click', function(e){
		
		if(!($(e.target).closest('.js-popup').length)  && !($(e.target).hasClass('js-popup-link')) ){
			$('.js-popup').hide();
			$('#fade').remove();
		}
	});

	//for accordion
	$('.js-accord-link').each(function(){
		$(this).on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).closest('.js-accord-parent').find('.js-accord-content').slideToggle();
		})
	});



});