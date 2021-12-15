$(document).ready(function () {
  // img event
  
  // $(".playerBox .img_box").mouseover(function () { 
  //   console.log("진행중");
  //   $(".playerBox .img_boxEvent").removeClass("hide");
  // });

  // $(".playerBox .img_box").mouseout(function () { 
  //   console.log("진행중");
  //   $(".playerBox .img_boxEvent").addClass("hide");
  // });
  
  // heart event
  $(".tit_box .love").click(function (e) {
    e.preventDefault();
    var curClass = $(this).attr("class");
    var idx = curClass.indexOf("on");
    console.log(curClass);
    console.log(idx);

    if (idx != -1) {
      $(".tit_box .love.off").show();
      $(".tit_box .love.on").hide();
    } else {
      // $(this).addClass("on");
      $(".tit_box .love.on").show();
      $(".tit_box .love.off").hide();
    }
  });
  // heart event

  // seekBar
  var seekbar = new Seekbar.Seekbar({
    renderTo: ".seekBar",
    negativeColor: "#736EFE",
    positiveColor :'#ccc',
    thumbColor :'#736EFE',
    barSize: 5,
    needleSize: 0.3,
    thumbSize : 0,
    value: 5
  });
  // seekBar

});