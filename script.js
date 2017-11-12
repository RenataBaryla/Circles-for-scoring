$(function(){
  console.log('Script loaded');
  $(".rating-circle").on("mouseover",function(){
    $(this).prevAll(".rating-circle").each(function(){
      $(this).addClass("bg" + $(this).attr('id'));
    });
    $(this).addClass("bg" + $(this).attr('id'));
  });
  $(".rating-circle").on("mouseleave",function(){
    $(this).prevAll(".rating-circle").each(function () {
      $(this).removeClass("bg" + $(this).attr('id'));
    });
    $(this).removeClass("bg" + $(this).attr('id'));
  });
  $(".rating-circle").on("click",function(){
    var score = $(this).index();
    $(this).siblings(".rating-circle").each(function(){
      $(this).removeClass("clickbg" + $(this).attr('id'));
    });
    $(this).prevAll(".rating-circle").each(function(){
      $(this).addClass("clickbg" + $(this).attr('id'));
    });
    $(this).addClass("clickbg" + $(this).attr('id'));
    $("#score").removeAttr("hidden");
    $("#score").html("Your score is " + score + "/5");
  });
});
