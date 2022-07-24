(function($) {
    $.fn.extend({
        include : function(src) {
            this.each(function() {
                var container = $(this);
                var pageSrc   = src;

                $.get(pageSrc, function(data) {
                    container.html(data);
                });
            });
            return this;
        },
    });

    $(document).ready(function() {
        // 각각의 영역에 경로 확인 후 적용, 필요시 인클루드 파일은 계속 추가 가능

        // 마크업용 테스트버튼 생성
        TestButton();

        /* Header */
        if($('.header').hasClass('l_header')) {
            $('.header:not(.noinclude)').include('/html/include/inc_we_header.html'); // L 메인헤더
        }
        else if($('.header').hasClass('l_header')) {
            $('.header:not(.noinclude)').include('/html/include/inc_wel_header3.html'); // L 전문가회원찾기
        }
        else($('.header').hasClass('ledge_header')) {
            $('.header:not(.noinclude)').include('/html/include/inc_wel_header2.html'); // L edge 메인헤더
        }
        
        

        /* SUB Header */
        if($('.sub_header').hasClass('v2')) {
            $('.sub_header:not(.noinclude)').include('/html/include/inc_sao_header2.html'); // 스마트A온라인
        }
        else if($('.sub_header').hasClass('v3')) {
            $('.sub_header:not(.noinclude)').include('/html/include/inc_sao_header3.html'); // 스마트A온라인
        }
        else if($('.sub_header').hasClass('v4')) {
            $('.sub_header:not(.noinclude)').include('/html/include/inc_sao_header4.html'); // 급여관리 업무 따라하기
        }
        else if($('.sub_header').hasClass('v5')) {
            $('.sub_header:not(.noinclude)').include('/html/include/inc_sao_header5.html'); // Smart A 10 사용팁 관리
        }
        else if($('.sub_header').hasClass('v6')) {
            $('.sub_header:not(.noinclude)').include('/html/include/inc_sao_header6.html'); // 증명서 관리
        }
        else if($('.sub_header').hasClass('v7')) {
            $('.sub_header:not(.noinclude)').include('/html/include/inc_sao_header7.html'); // 근로(기타) 계약서
        }
        else if($('.sub_header').hasClass('v8')) {
            $('.sub_header:not(.noinclude)').include('/html/include/inc_sao_header8.html'); // 직원공지
        }
        else if($('.sub-header').parents('#wrap').hasClass('lulu-ui')) {
            $('.sub-header:not(.noinclude)').include('/lulu-ui/src/cfp/include/inc_cfp_subheader.html'); // 초록우산어린이재단 서브헤더
        }
        else {
            $('.sao .sub_header:not(.noinclude)').include('/html/include/inc_sao_header.html');    // 스마트A온라인 헤더
        }
        $('.ni .sub_header:not(.noinclude)').include('/html/include/inc_ni_sub_header.html');  // NICE신용지키미 Lite

        /* LNB */
        $('.lnb:not(.noinclude)').include('/html/include/inc_lnb.html');
        $('.lnb.lnb2:not(.noinclude)').include('/html/include/inc_lnb2.html');
        $('.lnb.lnb3:not(.noinclude)').include('/html/include/inc_lnb3.html');
        $('.lnb.lnb_main:not(.noinclude)').include('/html/include/inc_lnb_main.html');

        /* Accrodion SNB */
        $('.accordion_snb.snb_in:not(.noinclude)').include('/html/include/inc_snb_in.html');
        $('.snb_wrap.snb_em:not(.noinclude)').include('/html/include/inc_snb_em.html');
        $('.snb_wrap.snb_cf:not(.noinclude)').include('/html/include/inc_snb_cf.html');
        $('.accordion_snb.snb_al:not(.noinclude)').include('/html/include/inc_snb_al.html');
        $('.accordion_snb.snb_al2:not(.noinclude)').include('/html/include/inc_snb_al2.html');
        $('.accordion_snb.snb_am:not(.noinclude)').include('/html/include/inc_snb_am.html');
        $('.accordion_snb.snb_gt:not(.noinclude)').include('/html/include/inc_snb_gt.html');


        // SNB
        if($('.LUX_basic_snb').hasClass('snb_v2')) {
            /* 현재 SNB */
            if($('.LUX_basic_snb').hasClass('snb_nt')) $('.LUX_basic_snb.snb_v2.snb_nt:not(.noinclude)').include('/html/include/inc_snb2_nt.html');
            else if($('.LUX_basic_snb').hasClass('snb_em')) $('.LUX_basic_snb.snb_v2.snb_em:not(.noinclude)').include('/html/include/inc_snb2_em.html');
            else if($('.LUX_basic_snb').hasClass('snb_ea')) $('.LUX_basic_snb.snb_v2.snb_ea:not(.noinclude)').include('/html/include/inc_snb2_ea.html');
            else if($('.LUX_basic_snb').hasClass('snb_tr')) $('.LUX_basic_snb.snb_v2.snb_tr:not(.noinclude)').include('/html/include/inc_snb2_tr.html');
            else if($('.LUX_basic_snb').hasClass('snb_ad')) $('.LUX_basic_snb.snb_v2.snb_ad:not(.noinclude)').include('/html/include/inc_snb2_ad.html');
            else if($('.LUX_basic_snb').hasClass('snb_og')) $('.LUX_basic_snb.snb_v2.snb_og:not(.noinclude)').include('/html/include/inc_snb2_og.html');
            else if($('.LUX_basic_snb').hasClass('snb_eln')) $('.LUX_basic_snb.snb_v2.snb_eln:not(.noinclude)').include('/html/include/inc_snb2_eln.html');
            else $('.LUX_basic_snb.snb_v2:not(.noinclude)').include('/html/include/inc_snb2.html');
        } else {
            /* 초기 SNB */
            if($('.LUX_basic_snb').hasClass('sub_ca')) $('.LUX_basic_snb.sub_ca:not(.noinclude)').include('/html/include/inc_snb_ca.html');
            else if($('.LUX_basic_snb').hasClass('snb_td')) $('.LUX_basic_snb.snb_td:not(.noinclude)').include('/html/include/inc_snb_td.html');
            else if($('.LUX_basic_snb').hasClass('snb_co')) $('.LUX_basic_snb.snb_co:not(.noinclude)').include('/html/include/inc_snb_co.html');
            else $('.LUX_basic_snb:not(.noinclude)').include('/html/include/inc_snb.html');
        }

        $('.wf .snb_wrap').include('/html/include/inc_snb_wf.html');

        if($('.codedome_section').hasClass('v_al')) {
            $('.codedome_section.v_al:not(.noinclude)').include('/html/include/inc_codedome_al.html');
        } else {
            $('.codedome_section:not(.noinclude)').include('/html/include/inc_codedome.html');
        }

        $('.actionbar:not(.noinclude)').include('/html/include/inc_actionbar.html');
        $('.allmenu_section:not(.noinclude)').include('/html/include/inc_allmenu.html');
        // $('.LUX_basic_time:not(.noinclude)').include('/html/include/LUX_basic_time.html');
        $('.inquiryarea_new.search_cf:not(.noinclude)').include('/html/include/inc_search_cf.html');
        $('.actionbar.type2:not(.noinclude)').include('/html/include/inc_actionbar2.html');
        /*$('.LUX_basic_date_gap:not(.noinclude)').include('../include/LUX_basic_date_gap.html');*/

        $('.tv .westudio_lnb').include('/html/include/westudio_lnb.html');

    });

    // 이모티콘
    $('.inc_emoticon').include('/html/include/inc_emoticon.html');

})(jQuery);

// 더존폰트 테스트
function douzoneFontText() {
    var dFont = 'font-family:douzone !important';
    var nFont = 'font-family:Nanum Square,"돋움",Dotum,Helvetica,"Apple SD Gothic Neo",sans-serif';
    var sFont = 'font-family:"돋움",Dotum,Helvetica,"Apple SD Gothic Neo",sans-serif';

    $('#markup_fixed_layer').append('<li><button id="dzfont_btn" type="button" style="width:100%;box-sizing:border-box;margin:0 2px;color:#fff;font-size:12px;background:#000;line-height:18px;padding:0 5px">더존_폰트변경</button></li>')
    $('#dzfont_btn').click(function() {
        if($(this).hasClass('toggle')) {
            $(this).removeClass('toggle');
            $('body, button, dl, h1, h2, h3, h4, h5, h6, li, ol, ul, .dialog_content .guide_infobox > p').css('font-family','Nanum Square,"돋움",Dotum,Helvetica,"Apple SD Gothic Neo",sans-serif');
            $('.LUX_basic_tbl td').attr('style',sFont);
            $(this).text('더존_폰트변경');
        }
        else {
            $('body, button, dl, h1, h2, h3, h4, h5, h6, li, ol, ul, .dialog_content .guide_infobox > p').css('font-family','douzone');
            $('.LUX_basic_tbl td').attr('style',dFont);
            $(this).addClass('toggle');
            $(this).text('나눔폰트_변경');
        }
    });
}

// 빌드 css 테스트
function buildTest() {
    $('#markup_fixed_layer').append('<li><button id="buildtest_btn" type="button" style="width:100%;box-sizing:border-box;margin:0 2px;color:#fff;font-size:12px;background:#000;line-height:18px;padding:0 5px">빌드테스트</button></li>')

    $('#buildtest_btn').click(function() {
        $('link').remove();

        if($('#buildtest_btn').hasClass('dev')) {
            $('head').append('<link rel="stylesheet" type="text/css" href="/selene/css/selene.css"><link rel="stylesheet" type="text/css" href="https://static.wehago.com/dist/wehago_common.css"><link rel="stylesheet" type="text/css" href="https://static.wehago.com/dist/wehago_svc1.css"><link rel="stylesheet" type="text/css" href="https://static.wehago.com/dist/wehago_svc2.css">')
            $(this).text('빌드테스트:운영');
            $(this).removeClass('dev');
            $(this).addClass('dev2');
        }
        else if($('#buildtest_btn').hasClass('dev2')){
            $('head').append('<link rel="stylesheet" type="text/css" href="/selene/css/selene.css"><link rel="stylesheet" type="text/css" href="https://static.wehagov.com/dist/wehagov_common.css"><link rel="stylesheet" type="text/css" href="https://static.wehagov.com/dist/wehagov_svc1.css"><link rel="stylesheet" type="text/css" href="https://static.wehagov.com/dist/wehagov_svc2.css">')
            $(this).text('빌드테스트:v운영');
            $(this).removeClass('dev2');
        } else {
            $('head').append('<link rel="stylesheet" type="text/css" href="/selene/css/selene.css"><link rel="stylesheet" type="text/css" href="http://172.16.114.131/dist/wehago_common.css"><link rel="stylesheet" type="text/css" href="http://172.16.114.131/dist/wehago_svc1.css"><link rel="stylesheet" type="text/css" href="http://172.16.114.131/dist/wehago_svc2.css">')
            $(this).text('빌드테스트:개발');
            $(this).addClass('dev');
        }
    })
}

function globalTest() {
    $('#markup_fixed_layer').append('<li><button id="gl_jatext_btn" type="button" style="width:100%;box-sizing:border-box;margin:0 2px;color:#fff;font-size:12px;background:#000;line-height:18px;padding:0 5px">JA</button></li><li><button id="gl_entext_btn" type="button" style="width:100%;box-sizing:border-box;margin:0 2px;color:#fff;font-size:12px;background:#000;line-height:18px;padding:0 5px">EN</button></li>')

    $('#gl_entext_btn').click(function() {
        if($('body').hasClass('en')) {
            $('#gl_entext_btn').text('EN');
        }
        else {
            $('#gl_entext_btn').text('EN on');
        }
        $('body').toggleClass('en');

    });
    $('#gl_jatext_btn').click(function() {
        if($('body').hasClass('ja')) {
            $('#gl_jatext_btn').text('JA');
        }
        else {
            $('#gl_jatext_btn').text('JA on');
        }
        $('body').toggleClass('ja');

    });
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.reload(true); // 강제새로고침(캐시제거)
}

function TestButton() {
    // var exceptionSvcArr = ['cfp-dashboard'];
    var hasClassCfp = $('#wrap').hasClass('cfp-dashboard');

    if (!hasClassCfp) {
        $('body').append('<div id="markup_fixed_textbox" style="z-index:99999;position:fixed;top:5px;right:5px;"><button type="button" onclick="deleteAllCookies()" style="margin:0 2px;color:#fff;font-size:12px;background:rgba(0,0,0,.65);line-height:18px;padding:0 5px">캐시/쿠키삭제</button><button type="button" class="btn_markup" style="margin:0 2px;color:#fff;font-size:12px;background:rgba(0,0,0,.65);line-height:18px;padding:0 5px">마크업테스트용</button><ul id="markup_fixed_layer" style="display:none"></ul></div>');

        // 더존폰트 테스트용 버튼
        douzoneFontText();

        // 빌드 css 테스트
        buildTest();

        globalTest();

        $('#markup_fixed_textbox .btn_markup').click(function() {
            $('#markup_fixed_layer').toggle();
        });
    }
}



