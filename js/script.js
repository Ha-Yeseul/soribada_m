$(document).ready(function () {
  var swiper = new Swiper(".visualWrap", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });

  var swiper = new Swiper(".list", {});

  // headr btn 이벤트
  $("header .tag_button li").click(function (e) { 
    e.preventDefault();
    var curClass = $(this).attr("class");
    console.log(curClass);

    if (curClass == "hash on") {
      $(this).removeClass("on");
    }
    else{
      $(this).addClass("on");
    }    
  });
  // headr btn 이벤트

 $(".con05 li").click(function (e) { 
   e.preventDefault();
   var curClass = $(this).attr("class");
   console.log("con05"+curClass);
   
   if (curClass == "on") {
     $(this).removeClass("on");
   }
   else{
     $(this).addClass("on");
   }    
 });

//  layer_popup
$(".layer_pop .resize").click(function (e) { 
  e.preventDefault();
  var open = window.open("index.html","_blank","width=375, height=677");
  $(".layer_bg").hide();  
});

$(".layer_pop .close" ).click(function (e) { 
  e.preventDefault();
  $(".layer_bg").hide();  
});

});