// 미리보기용 코드
var img_file;

$('section li').hover(function(e) {
    var temp = $(this).children('a').attr('href');
    var pointer_y = e.pageY-10, pointer_x = e.pageX+100, lyPos;


    img_file = temp.substring(0,temp.lastIndexOf("/")+1)  + 'capture/' + temp.substring(temp.lastIndexOf("/") + 1, temp.lastIndexOf(".")) + '.png';
    htlm_file = temp;

    getHeadertoFile(htlm_file);
    // 파일체크하여 없을 경우 노이미지 노출
    if(fileChecker(img_file)) {
        $(this).append('<div class="capture_ly"><img src="' + img_file + '"></div>');
        lyPos=500;
    }
    else {
        $(this).append('<div class="capture_ly noimg">No Image</div>');
        lyPos=90;
    }

    // 레이어 위치 지정
    if(pointer_y >= $(document).height()-500) pointer_y = e.pageY-lyPos;
    $('.capture_ly').css({
        'top' : pointer_y,
        'left' : pointer_x
    });

}, function() {
    $(this).find('.capture_ly').remove();
});

var today = new Date();

// 마지막 수정일자 표시
$('section li').each(function() {
    var htlm_file = $(this).children('a').attr('href');

    setTimeout(() => {
        var checkDate = getHeadertoFile(htlm_file);
        var _gmt = new Date(checkDate);  // 최종 수정일자를 가져옴
        var year = _gmt.getFullYear();
        var month = _gmt.getMonth() +1;
        var day = _gmt.getDate();
        var allTimeText;
        var btMs = today.getTime() - _gmt.getTime();
        var btDay = parseInt(btMs / (1000*60*60*24));
        var btDayClass = "";
        // var hours = _gmt.getHours();
        // var minutes = _gmt.getMinutes();
        // var seconds = _gmt.getSeconds();
        // allTimeText = year + '.' + month + '.' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        // console.log(fileUrl, _gmt, allTimeText);

        // 오늘날짜와 차이 계산
        if(btDay > 30) {
            btDayClass = 'v2';
        }
        else if(btDay > 14) {
            btDayClass = 'v1';
        }

        allTimeText = year + '.' + (('00'+month.toString()).slice(-2)) + '.' + (('00'+day.toString()).slice(-2)); // 헤더에서 가져온 날짜정보를 보기좋게 변경하여 출력


        $(this).children('a').append("<span class='indexDate " + btDayClass + "'>" +  allTimeText + "</span>");
    }, 100);
});

function fileChecker(imgpath) {
    let check;
    $.ajax({
         url: imgpath,
         type: 'HEAD',
         async:false,
         timeout: 1000,
         success: function () {
              check = true;
         },
         error: function () {
             check = false;
         }
    });
    return check;
}

// 파일을 열어서 HTTP 헤더의 정보를 가져옵니다.
function getHeadertoFile(fileUrl) {
	var request = new XMLHttpRequest();

	request.open("GET", fileUrl, false);
	request.send();

	var data = new Object();

	// 헤더 정보를 가져온다.
	var headers = request.getAllResponseHeaders();
	var aHeaders = headers.split('\n');
	var j =0;

    // console.log(request.status);
    // if (request.status != 200) {
    //     return false;
    // }

	for (j= 0; j < aHeaders.length; j++) {
			var thisItem = aHeaders[j];
			var key = thisItem.substring(0, thisItem.indexOf(':'));
			var value = thisItem.substring(thisItem.indexOf(':')+1);
			data[key] = value;
	}

	return data['last-modified'];
}