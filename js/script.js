$(document).ready(function () {
  var swiper01 = new Swiper(".visualWrap", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });

  var swiper02 = new Swiper(".list", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 30,
  });

  // tag_button
  var swiper03 = new Swiper(".tag_button", {
    slidesPerView: "auto"
  });

  // con01
  var swiper04 = new Swiper(".con01", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loopAdditionalSlides: 1
  });

  // con02
  var swiper04 = new Swiper(".con02", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loopAdditionalSlides: 1
  });

  // list_wrap
  var swiper05 = new Swiper(".list_wrap", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loopAdditionalSlides: 1
  });

  // head btn 이벤트
  $("header .tag_button li").click(function (e) {
    e.preventDefault();
    var curClass = $(this).attr("class");
    var idx = curClass.indexOf("on");
    console.log(curClass);
    console.log(idx);

    if (idx != -1) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });
  // headr btn 이벤트

  $(".con05 li").click(function (e) {
    e.preventDefault();
    var curClass = $(this).attr("class");
    var idx = curClass.indexOf("on");
    console.log("con05" + curClass);

    if (idx != -1) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });

  //  layer_popup
  $(".layer_pop .resize").click(function (e) {
    e.preventDefault();
    var open = window.open("index.html", "_blank", "width=375, height=677");
    $(".layer_bg").hide();
  });

  $(".layer_pop .close").click(function (e) {
    e.preventDefault();
    $(".layer_bg").hide();
  });

  $(".search").click(function (e) {
    e.preventDefault();
    $(".search_box").toggle();
  });
});