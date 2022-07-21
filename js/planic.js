$(document).ready(function(){

	// fullpage.js
	new fullpage('#fullpage', {
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		fadingEffect: true,
		anchors:['main', 'introduce', 'spec', 'history', 'skills'],
	});

	// history box select.js
	$(".historyWrap .historyBox").hide();
	$(".historyWrap .incomms").show();
	

	$(".historyTab .btn_tab").click(function(e) {

	var i = $(this).index();
	// 탭 영역 인터랙션
	$(".historyTab .btn_tab").removeClass("select");
	$(this).toggleClass("select");
	// 클릭 후 리스트 삭제
	$(".historyWrap .historyBox").hide();
	// click list show
	switch (i) {
		case 0:
			$(".incomms").show();
			break;
		case 1:
			$(".hanwha").show();
			break;
		case 2:
			$(".douzone").show();
			break;
		}
	});

	// slick.js
	$('.historyList').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// accessibility: true,
		dots: true,
		// autoplay: true,
		// autoplaySpeed: 5000,
		// speed: 500,
		infinite: false,
		// cssEase: 'linear',
		arrows: true,
		variableWidth: true
	});

	// slick 너비
	$(document).ready(function() {
		var slick_boxWidth = $(".slick-list").outerWidth();
		$('.slick-slide').width(slick_boxWidth + 'px');
	});

	// header 색상 변경
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		//console.log(scroll);
		if (scroll >= 80) {
			//console.log('a');
			$(".header").addClass("v2");
		} else {
			//console.log('a');
			$(".header").removeClass("v2");
		}
	});

	// 모바일 메뉴
	$(window).ready(function(){
		$(".global__menu .btn__menu--mobile").click(function(){
			$(this).parents(".global__menu").toggleClass("open")
		});
	
		$(".global__menuList--item a").click(function(){
			$(this).parents(".global__menu").removeClass("open")
		});
	})


	// end
})
