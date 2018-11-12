;(function () {
	'use strict';

    // nav
	var navFuc = function() {
        $("#top-box").css("opacity",1);
		var scrollTops = $(window).scrollTop();
        var bgH = $("#work-bg").height() - 96;

        if(scrollTops>$("#work-title").offset().top - 120){
            $(".top-nav").css("background-color","rgba(0, 0, 0, 0.8)");
        }else{
            $(".top-nav").css("background-color","rgba(0, 0, 0, 0)");
        }

        if (scrollTops > bgH) {
            $("#nav-box").addClass("bottom-nav");
            $("#nav-box").removeClass("top-nav");
            $("#nav-box a").css("color","#222222")
            $("#logo-img").attr("src","https://image1.dayishu.top/gw/images/logo_black.png");
            $(".li-line").css("top","64px");
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu02.png");
            $("#small-menu").css("margin-top","48px");
        } else {
            $("#nav-box").addClass("top-nav");
            $("#nav-box").removeClass("bottom-nav");
            $("#nav-box a").css("color","#ffffff")
            $("#logo-img").attr("src","https://image1.dayishu.top/gw/images/logo_white.png");
            $(".li-line").css("top","74px");
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu01.png");
            $("#small-menu").css("margin-top","64px");
        }
	};
	

	// Document on load.
	$(function(){
        navFuc();
        $(document).scroll(function () {
            navFuc();
        })
    });

    function topClick(){
        $('html,body').animate({scrollTop: 0},500);
    }

    function menuClick(){
        if($("#small-menu").height()==0){
            $(".top-nav").css("background-color","rgba(0, 0, 0, 0.8)")
            $("#small-menu").css("height","255px");
            $("#small-menu").css("padding","8px 0 16px 0");
            if($("#small-nav-img").attr("src")=="https://image1.dayishu.top/gw/images/menu01.png"){
                $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/close01.png");
            }else{
                $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/close02.png");
            }
        }else{
            $(".top-nav").css("background-color","rgba(0, 0, 0, 0)")
            $("#small-menu").css("height","0");
            $("#small-menu").css("padding","0");
            if($("#small-nav-img").attr("src")=="https://image1.dayishu.top/gw/images/close01.png"){
                $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu01.png");
            }else{
                $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu02.png");
            }
        }
    }

    $("#small-nav-img").on("click",menuClick);
    $(".go-top").on("click",topClick);

    $(window).scroll(function(){
        $("#small-menu").css("height","0");
        $("#small-menu").css("padding","0");
        var scrollTops = $(window).scrollTop();
        var bgH = $("#work-bg").height() - 96;
        if (scrollTops > bgH) {
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu02.png");
        } else {
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu01.png");
        }
    })
}());