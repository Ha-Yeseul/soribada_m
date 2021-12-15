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

  // 헤더 스와이퍼
  var offset = $(".ArtList").offset();
  var top = offset.top;
  var left = offset.left;

  $(window).scroll(function () {
    var win = $(window).scrollTop();
    if (win > top) {
      $(".artistHd").addClass("bgBlack");
    } else {
      $(".artistHd").removeClass("bgBlack");
    }
  });

  //하트 이벤트

  $(".artistWrap .txt_box p").click(function (e) {
    e.preventDefault();
    var curClass = $(this).children("i").attr("class");
    var idx = curClass.indexOf("select");

    if (idx != -1) {
      $(this).children("i").removeClass("select");
    } 
    else {
      $(this).children("i").addClass("select");
    }
  });


});