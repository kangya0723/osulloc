$(document).ready(function(){

  $(".gotop").hide();
  // 스크롤을 100px이상 되었을 때 gotop버튼 fadeIn
  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $(".gotop").stop().fadeIn()
    }
    
    else{
      $(".gotop").stop().fadeOut()
    }
  });

$(".gotop").click(function(){
  $("html").animate({
    scrollTop:0
  },1000);
});

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1900 && $(this).scrollTop() < 3000){
      $("body").addClass("on")
    }
    else {
      $("body").removeClass("on")
    }
  });

    var mb = new Swiper(".mb", {
        centeredSlides: true,
        loop: true, 
        speed: 2000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var news = new Swiper(".news", {
        centeredSlides: true,
        loop: true, 
        speed: 1000,
        direction:"vertical",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
    });
    var prd_list = new Swiper(".prd_list", {
        slidesPerView: 5,
        spaceBetween: 40,
        speed: 2000, 
        breakpoint: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        scrollbar: {
            el: ".swiper-scrollbar",
          },
      });

      $(".play").hide();
      $(".pause").click(function(){
        mb.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
      });
        $(".play").click(function(){
            mb.autoplay.start();
            $(".play").hide();
            $(".pause").show();
        

      });

      $(".prd_list li a img:nth-child(2)").hide();
      $(".prd_list li").hover(function(){
        $(this).find("img:nth-child(2)").stop().fadeToggle()
      });

      $(".tab_img li:not(:first-child").hide();
      $(".tab_btn li:nth-child(1)").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li:nth-child(1)").stop().fadeIn().siblings().fadeOut();
      });
      $(".tab_btn li:nth-child(2)").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li:nth-child(2)").stop().fadeIn().siblings().fadeOut();
      });
      $(".tab_btn li:nth-child(3)").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li:nth-child(3)").stop().fadeIn().siblings().fadeOut();
      });
      $(".tab_btn li:nth-child(4)").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li:nth-child(4)").stop().fadeIn().siblings().fadeOut();
      });
});