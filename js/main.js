$(function () {	
	//Hamburger
	$('.hamburger').click(function () {
		$('.menu-show').toggleClass('order');
		$('.nav__list').toggleClass('menu-showed');
	});
	//Create-select
	$(".cr-select").click(function(){				
		$('.crct'+($(this).val())).toggleClass('d-none d-flex');
	});
})
