$(document).ready(function(){

	
	$(".historyWrap .historyBox").hide();
	$(".historyWrap .incomms").show();
	

	$(".historyTab .btn_tab").click(function(e) {

	var i = $(this).index();
	// 탭 영역 인터랙션
	$(".tab_box .btn_tab").removeClass("select");
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

})