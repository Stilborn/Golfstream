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
	// $('.test-btn').click(function(e){
	// 	e.preventDefault();
	// 	$('.form-test').arcticmodal();
	// });
	//Create-select
	$(".cr-select").click(function(){				
		$('.crct'+($(this).val())).toggleClass('d-none d-flex');
	});
	//Test
	$(".test-btn").click(function(e){
	var ball = 0;
	var i;
	// for (i = 0; i<=14; i++){
	// 	if ($('input[id="q1"]').is(':checked')){
	// 		ball +=1;
	// 		}
	// 	}
	if ($('input[id="q1"]').is(':checked')){ball +=1;}
	if ($('input[id="q2"]').is(':checked')){ball +=1;}
	if ($('input[id="q3"]').is(':checked')){ball +=1;}
	if ($('input[id="q4"]').is(':checked')){ball +=1;}
	if ($('input[id="q5"]').is(':checked')){ball +=1;}
	if ($('input[id="q6"]').is(':checked')){ball +=1;}
	if ($('input[id="q7"]').is(':checked')){ball +=1;}
	if ($('input[id="q8"]').is(':checked')){ball +=1;}
	if ($('input[id="q9"]').is(':checked')){ball +=1;}
	if ($('input[id="q10"]').is(':checked')){ball +=1;}
	if ($('input[id="q11"]').is(':checked')){ball +=1;}
	if ($('input[id="q12"]').is(':checked')){ball +=1;}
	if ($('input[id="q13"]').is(':checked')){ball +=1;}
	if ($('input[id="q14"]').is(':checked')){ball +=1;}
	if ($('input[id="q15"]').is(':checked')){ball +=1;}	
	$('#rezultat').html('вы прошли тест на '+Math.ceil(ball/15 * 100)+'%.')
	e.preventDefault();
		$('.form-test').arcticmodal();
	});
})
