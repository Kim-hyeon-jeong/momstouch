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
    $(window).resize(function () {

        if (window.innerWidth > 767) {  // 다바이스 크기가 480이상일때 

            //#nav>li 에 마우스가 올라가면
            //.subBg slideDown .sub slideDown
            $("#nav>li").mouseover(function () {
                $(".subBg, .sub").stop().slideDown(300);
            })
            //#nav>li에 마우스 아웃되면 slideUp
            $("#nav>li").mouseout(function () {
                $(".subBg, .sub").stop().slideUp(300);
            })
        } else {
            $(".hamBtn").click(function () {
                $(nav).css("display", "block");
                $(".sub").css("display", "none");
            })
            $("#nav>li>a").click(function () {
                $(this).next().stop().slideToggle(300)
                    .parent()
                    .siblings()
                    .children(".sub").slideUp(300);
                $(this).css("color", "red")
                    .parent()
                    .siblings()
                    .children(".menu").css("color", "black");
            })
            $(".closeBtn").click(function () {
                $(nav).css("display", "none");
            })
            $(".sub>li>a").click(function () {
                $(this).css("color", "#888")
                    .parent()
                    .siblings()
                    .children().css("color", "black");
            })
        }
    }).resize();

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