// get url parameter
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function() {
    var data_name,
        param_ls = getUrlParameter('p'),
        param_check = $('.container .aside .menu').find($('a[data-ls='+param_ls+']')).length,
        file_name = "LS_component";

    if(param_ls != null) {
        if(param_check) {
            $('.component_contents[data-ls=' + param_ls + ']').addClass('show');
            $('.container .aside .menu a[data-ls=' + param_ls + ']').addClass('on');
        }
        else alert('parameter 값이 잘못되었습니다');

        // ls_viewer일 경우
        if(param_ls === 'LS_viewer' || param_ls === 'LS_viewer2') {
            $('body').addClass('body_dimm');

            /*
            $.ajax({
                type: "GET",
                url: "viewer.html",
                success: function (data) {
                    var dom = $(data);

                    dom.filter('script').each(function () {
                        $.globalEval(this.text || this.textContent || this.innerHTML || '');
                    });
                    $('#popup').html(dom);
                }
            });
            */
        }
    }
    else {
        $('.component_contents[data-ls=default]').addClass('show');
    }

    $('.container .aside .menu a').click(function(e) {

        if($(this).attr('href') == "#") {
            e.preventDefault();
            data_name = $(this).attr('data-ls');
            $(location).attr('href', file_name+".html?p="+data_name);
        }
    })

    // include
    $.fn.extend({
        include : function(src, demo) {
            if(demo == null || demo != 0) {
                demo = 1;
            }
            this.each(function() {
                var container = $(this);
                var pageSrc   = src;
                $.get(pageSrc, function(data) {
                    var matched_data = hljs.highlightAuto(data);
                    // console.log(data);
                    if(demo) {
                        container.html('<div class="demo_preview"><button type="button">Code view</button><div class="preview_wrap">' + data + '</div></div><div class="demo_snippet"><h3><span>HTML</span></h3><a href="#" class="snippet_clr"><svg viewBox="0 0 24 24" style="display: inline-block; fill: rgb(255, 255, 255); height: 24px; width: 24px; user-select: none;"><path d="M0.036,22.257L10.292,12L0.036,1.743l1.71-1.711L12,10.288L22.26,0.029l1.71,1.711L13.71,12l10.26,10.257l-1.71,1.709 L12,13.71L1.744,23.966L0.036,22.257z"></path></svg><span class="blind">닫기</span></a><pre><code class="html">'+ matched_data.value + '</code></pre></div>');
                    } else {
                        container.html(data);
                    }
                });
            });
            return this;
        },
    });
});

// LS_viewr 닫기 버튼
$(document).on('click','.LS_viewer .LS_btn.btn_clr',function() {
    $('.LS_viewer').remove();
    $('body').removeClass('body_dimm');
});