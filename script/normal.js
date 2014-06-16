jQuery(document).ready(function($) {
	if(window.location.hash) {
		$(window.location.hash).addClass('active').delay(900).queue( function (next) {
				$('.back').addClass('active');
				next();
		});
	}
  $('#menu a').hover(function() {
    $('#menu a').removeClass('select');
  });
  
  $('#menu').mouseleave(function () {
    $('#menu .active').addClass('select');
  });
	
	$('#listJob a').click(function () {
			$($(this).attr('href')).addClass('active').delay(900).queue( function (next) {
				$('.back').addClass('active');
				next();
			});
	});
	$('#listPost a.linkMore, #listWork a.linkMore').click(function () {
			$($(this).attr('href')).addClass('active').delay(900).queue( function (next) {
				$('.back').addClass('active');
				next();
			});
	});
	$('.back').click( function () {
		$('.post.active, .back').removeClass('active')
	});
	if($(document).has('#boxImg').length) {
		$('.contentImg .item').fancybox({
			padding: 1,	
		});
	}
	$('#contactForm').submit(function () {
		alert('Gửi thành công. Chúng tôi sẽ sớm gửi phản hồi. Cám ơn bạn rất nhiều!');
		$('#contactForm input, #contactForm textarea').val('');
		return false;
	});
	$('.close').click(function () {
		$(this).parent().remove();
	});
});