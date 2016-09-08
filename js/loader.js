$(document).ready(function() {

	setTimeout(function(){
		$('.p1').addClass('hidden');
		$('.p2').addClass('show');
	}, 5000);
	setTimeout(function(){
		$('.p2').addClass('hidden').removeClass('show');
		$('.p3').addClass('show');
	}, 10000);
	setTimeout(function(){
		$('.p3').addClass('hidden').removeClass('show');
		$('.p4').addClass('show');
	}, 15000);

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 17000);
	setTimeout(function(){
		$('.start').addClass('none');
	}, 17300);

});
