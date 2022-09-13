//36번 제이쿼리 예제 참고 - submenu 슬라이드업 다운 에니메이션
$(function () {
var index=0;
    $(".tab>li").click(function(){
        index=$(this).index();
        console.log(index)
       
        $(".contents>div").eq(index).css({
            "opacity":1,
            "z-index":10
        }).siblings().css({
            "opacity":0,
            "z-index":1
        })
    })
    //--------------------nav----------------------
    let wWidth = $(window).outerWidth();
    
    $(window).on("resize", function(){
        wWidth = $(window).outerWidth();
        console.log(wWidth);
        if(wWidth > 767){
            $(".sub").css("display","none");
            $(".navWrap").css("display", "block");
            $(".navWrap").removeClass("active");
            $("#nav>li>a").removeClass("active");
            $(".sub>li>a").removeClass("active");
        }
    })
    

    //#nav>li 에 마우스가 올라가면
    //.subBg slideDown .sub slideDown
    $("#nav>li").mouseover(function () {
        if(wWidth > 767){
            $(".subBg, .sub").css("display","block");
            
        }
        
    })
    //#nav>li에 마우스 아웃되면 slideUp
    $("#nav>li").mouseout(function () {
        if(wWidth > 767){
            $(".subBg, .sub").css("display","none");
        }
        
    })
    
    $(".hamBtn").click(function () {
        if(wWidth <= 767){
            $(".navWrap").addClass("active")
            $(".sub").css("display", "none");
        }
    })
    $("#nav>li").click(function () {
        if(wWidth <= 767){
            $(this).children(".sub").stop().slideToggle(400);
            $(this).siblings().children(".sub").slideUp(400);
            // $(this).next().stop().slideToggle(300)
            // .parent()
            // .siblings()
            // .children(".sub").slideUp(300);
            $(this).children(".menu").addClass("active")
            .parent()
            .siblings()
            .children(".menu").removeClass("active");
        }

    })
    $(".closeBtn").click(function () {
        $(".navWrap").removeClass("active")
    })
    $(".sub>li>a").click(function () {
        if(wWidth <= 767){
            $(this).addClass("active")
            .parent()
            .siblings()
            .children().removeClass("active");
        }

    })

    // ----------------contentBox--------------------

    $(".slider").bxSlider({
        "mode": "fade",
        auto: true,
        pager: true
    })
    $(".list1").bxSlider({
        maxSlides: 4,
        minSlides: 2,
        slideWidth: 295,
        slideMargin: 10,
        moveSlides: 1,
        pager:false
    });
    $(".list2").bxSlider({
        maxSlides: 4,
        minSlides: 2,
        slideWidth: 295,
        slideMargin: 10,
        moveSlides: 1,
        pager:false
    });
    $(".list3").bxSlider({
        maxSlides: 4,
        minSlides: 2,
        slideWidth: 295,
        slideMargin: 10,
        moveSlides: 1,
        pager:false
    });

})

//47,48번 제이쿼리 예제 참고 - 메인배너 슬라이드롤링 및 자동페이지넘김