$ (function () {
	
	//Menu opener hamburger
	$ (".menu-open").click(function(){
		$ (".menu-collaps").toggleClass("d-none").css("order","1");
		$ (".menu").toggleClass("menu-opened");
	});

	//Preloader
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');


	//arcticModal
	$(".novigation__btn, .footer__btn, .advantage__btn, .consultation__btn").click(function(e){
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	})

	//Slide
	  $('.review__content').slick({ 
	  	dots: true,
	  	prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
	  	nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	  });

})