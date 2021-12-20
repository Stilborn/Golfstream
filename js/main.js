$(function () {	
	//Hamburger
	$('.hamburger').click(function () {
		$('.menu-show').toggleClass('order');
		$('.nav__list').toggleClass('menu-showed');
	});
	//ModalWindows
		//Record
	$('.record').click(function(e){
		e.preventDefault();
		$('.form-record').arcticmodal();
	});
		//Test
	$('.test-btn').click(function(e){
		e.preventDefault();
		$('.form-test').arcticmodal();
	});
	//Create-select
	$(".cr-select").click(function(){				
		$('.crct'+($(this).val())).toggleClass('d-none d-flex');
	});
})
