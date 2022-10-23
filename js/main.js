$(function() {
	// burger menu header
    $(".burger-menu").on("tap click", function () { 
		$(this).toggleClass("cross");
		$('.burger').toggleClass("cross");
		$('.content').toggleClass("active");
		$('.nav-list').toggleClass("active-nav-list");
		$('.nav-link').toggleClass("active-nav-link");
		$('.header_btn').toggleClass("header-btn-active");
		$('body').toggleClass('stop-scrolling');
	});
	
	
	// review slider
	$('#review').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 601,
			settings: {
				arrows : false,
			}
		  }
		]
	  });


	   // modal window header and title website
	   $('.popup .close').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
	  });
	  $('.popup .blocker').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
	  });
	  //homepage fv popup_catalog
	  $('#login, #loginTwo').click(function(){
		$('.popup_catalog').addClass('open');
		$('#wrapper').addClass('popup');
	  });
	
});