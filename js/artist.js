$(document).ready(function () {
  // 앨범목록 스와이퍼
  var swiper07 = new Swiper(".album .inner", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loopAdditionalSlides: 1
  });

  //video 스와이퍼
  var swiper08 = new Swiper(".video .inner", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loopAdditionalSlides: 1
  });

  var offset = $(".ArtList").offset();
  var top = offset.top;
  var left = offset.left;

  $(window).scroll(function () { 
    var win = $(window).scrollTop();
    if(win > top){
      $(".artistHd").addClass("bgBlack");
    }
    else{
      $(".artistHd").removeClass("bgBlack");
    }
  });
  
});