;(function () {
	'use strict';

    // nav
	var navFuc = function() {
        $("#top-box").css("opacity",1);
		var scrollTops = $(window).scrollTop();
        var bgH = $("#bg").height() - 96;
        if(scrollTops>$("#top-title").offset().top - 120){
            $(".top-nav").css("background-color","rgba(0, 0, 0, 0.8)");
        }else{
            $(".top-nav").css("background-color","rgba(0, 0, 0, 0)");
        }
        if (scrollTops > bgH) {
            $("#nav-box").addClass("bottom-nav");
            $("#nav-box").removeClass("top-nav");
            $("#logo-img").attr("src","https://image1.dayishu.top/gw/images/logo_black.png");
            $(".li-line").css("top","64px");
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu02.png");
            $("#small-menu").css("margin-top","48px");

            $("#top-fixed").css("display","block");
        } else {
            $("#nav-box").addClass("top-nav");
            $("#nav-box").removeClass("bottom-nav");
            $("#logo-img").attr("src","https://image1.dayishu.top/gw/images/logo_white.png");
            $(".li-line").css("top","74px");
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu01.png");
            $("#small-menu").css("margin-top","64px");

            $("#top-fixed").css("display","none");
        }
        
	};
	

	// Document on load.
	$(function(){
        // var titleHeight = ($("#bg").height() - $("#top-title").height())/2;
        // $("#top-title").css("margin-top",titleHeight+"px");
        navFuc();
        $(document).scroll(function () {
            navFuc();
        })
    });
    var offsetTop = 0;
    function liClick(){
        $("#small-menu").css("height","0");
        $("#small-menu").css("padding","0");
        var scrollTops = $(window).scrollTop();
        var bgH = $("#bg").height() - 96;
        if (scrollTops > bgH) {
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu02.png");
        } else {
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu01.png");
        }
        if($(this)[0].innerText=="首页"){
            offsetTop = 0;
        }else if($(this)[0].innerText=="公司简介"){
            if($(window).width()>768){
                offsetTop = $("#company-profile").offset().top;
            }else{
                offsetTop = $("#small-company-profile").offset().top;
            }
        }else if($(this)[0].innerText=="公司服务"){
            if($(window).width()>768&&$(window).width()<1200){
                offsetTop = $("#company-service").offset().top + 80;
            }else{
                offsetTop = $("#company-service").offset().top;
            }
        }else if($(this)[0].innerText=="产品案例"){
            if($(window).width()>1200){
                offsetTop = $("#product-case").offset().top;
            }else if($(window).width()<=768){
                offsetTop = $("#small-product-case").offset().top;
            }else{
                offsetTop = $("#product-case").offset().top + 65;
            }
            
        }else if($(this)[0].innerText=="公司动态"){
            if($(window).width()>768&&$(window).width()<1200){
                offsetTop = $("#company-news").offset().top + 80;
            }else{
                offsetTop = $("#company-news").offset().top;
            }
            
        }else if($(this)[0].innerText=="加入我们"){
            if($(window).width()>1200){
                offsetTop = $("#join-us").offset().top;
            }else if($(window).width()<=768){
                offsetTop = $("#small-join-us").offset().top;
            }else{
                offsetTop = $("#join-us").offset().top + 80;
            }
        }else if($(this)[0].innerText=="联系我们"){

            if($(window).width()>1200){
                offsetTop = $("#contact-us").offset().top;
            }else if($(window).width()<=768){
                offsetTop = $("#small-contact-us").offset().top;
            }else{
                offsetTop = $("#contact-us").offset().top + 70;
            }
        }
        if($(window).width()>768){
            offsetTop -= 95;
        }else{
            offsetTop -= 45;
        }
        $('html,body').animate({scrollTop: offsetTop},500);
    }

    function logoClick(){
        window.scrollTo(0,0);
        setTimeout(function(){
            window.location.reload();
        },16);
    }

    function nextClick(){
        if($("#company-profile").offset().top){
            $('html,body').animate({scrollTop: $("#company-profile").offset().top - 95},500);
        }else{
            $('html,body').animate({scrollTop: $("#small-company-profile").offset().top - 45},500);
        }
    }

    function topClick(){
        $('html,body').animate({scrollTop: 0},500);
    }

    function menuClick(){
        if($("#small-menu").height()==0){

            $(".top-nav").css("background-color","rgba(0, 0, 0, 0.8)");

            $("#small-menu").css("height","255px");
            $("#small-menu").css("padding","8px 0 16px 0");
            if($("#small-nav-img").attr("src")=="https://image1.dayishu.top/gw/images/menu01.png"){
                $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/close01.png");
            }else{
                $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/close02.png");
            }
        }else{
            $(".top-nav").css("background-color","rgba(0, 0, 0, 0)");

            $("#small-menu").css("height","0");
            $("#small-menu").css("padding","0");
            if($("#small-nav-img").attr("src")=="https://image1.dayishu.top/gw/images/close01.png"){
                $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu01.png");
            }else{
                $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu02.png");
            }
        }
    }

    function maskClick(){
        $("#mask").css("opacity","0");
        $("#mask").css("z-index","-5");
        $('html,body').removeClass('ovfHiden');
    }

    $(".nav-li").on("click",liClick);
    $("#logo").on("click",logoClick);
    $("#index-next").on("click",nextClick);
    $("#small-nav-img").on("click",menuClick);
    $(".go-top").on("click",topClick);

    $("#mask").on("click",maskClick);


    $(window).scroll(function(){
        $("#small-menu").css("height","0");
        $("#small-menu").css("padding","0");
        var scrollTops = $(window).scrollTop();
        var bgH = $("#bg").height() - 96;
        if (scrollTops > bgH) {
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu02.png");
        } else {
            $("#small-nav-img").attr("src","https://image1.dayishu.top/gw/images/menu01.png");
        }
    })
}());