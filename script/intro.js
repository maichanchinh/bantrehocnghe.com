jQuery(document).ready(function($) {
	var curImg = 0;
	var loop;
	var countImg = $('#slider img').length;
  function changeSlide() {
    curImg = curImg == countImg ? 1 : curImg + 1;
    $('#slider img.cur').removeClass('cur');
    $('#slider img:nth-child(' + curImg + ')').addClass('cur');
    loop = setTimeout(changeSlide, 7000);
  }
	
  function turnActive() {
    pos = $('#menu .active').offset().left - $('#menu').offset().left;
    $('.magic-1, .magic-2').css({'left': pos + 'px'});
  }
  
  turnActive();
  
  $('#menu a').hover(function() {
    $('#menu a').removeClass('select');
    $(this).addClass('select');
    pos = $(this).offset().left - $('#menu').offset().left;
    $('.magic-1, .magic-2').css({'left': pos + 'px'});
  });
  
  $('#menu').mouseleave(function () {
    $('#menu a').removeClass('select');
    $('#menu .active').addClass('select');
    $('.magic-1, .magic-2').removeAttr('style');
    turnActive();
  });
	$('.pull').click(function () {
		$(this).parent().addClass('active');
    $('#footer').addClass('bigBG');
		if($(this).parent().has('#slider').length) {
			setTimeout(changeSlide, 800);
			$('.video').addClass('front');
		}
		if($(this).parent().has('#youtube').length) {
			$('#footer').addClass('video');
			player.playVideo();
			clearTimeout(loop);
		}
	});
	$('.push').click(function () {
		$(this).parent().removeClass('active');
		if($(this).parent().has('#slider').length) {
    	$('#footer').removeClass('bigBG');
			$('.video').removeClass('front');
		}
		$('#footer').removeClass('video');
		player.pauseVideo();
		clearTimeout(loop);
	});
	$('#tips a').click(function () {
		if(!$('.wrapper').hasClass('active')) {
			$('.wrapper').addClass('active');
		}
		if($($(this).attr('href')).hasClass('active')) {
			$('.tip').removeClass('active');
			$('.wrapper').removeClass('active');
		}
		else {
			$('.tip').removeClass('active');
			$($(this).attr('href')).addClass('active');
		}
	})
	$('.close').click(function () {
		$(this).parent().remove();
	});
});


function loaded() {
	popUp = new iScroll('scroll', {checkDOMChanges: true});
	myScroll_1 = new iScroll('tip-1', {checkDOMChanges: true});
	myScroll_2 = new iScroll('tip-2', {checkDOMChanges: true});
	myScroll_3 = new iScroll('tip-3', {checkDOMChanges: true});
	myScroll_4 = new iScroll('tip-4', {checkDOMChanges: true});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);

var player = null;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player');
}