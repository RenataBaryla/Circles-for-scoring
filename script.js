$(function(){
  console.log('Script loaded');
  $(".rating-circle").on("mouseover",function(){
    $(this).prevAll(".rating-circle").addClass("movedOn");
    $(this).addClass("movedOn");
  });
  $(".rating-circle").on("mouseleave",function(){
    $(this).prevAll(".rating-circle").removeClass("movedOn");
    $(this).removeClass("movedOn");
  });
  $(".rating-circle").on("click",function(){
    var score = $(this).index();
    $(this).prevAll(".rating-circle").addClass("scored");
    $(this).addClass("scored");
    $("#score").removeAttr("hidden");
    $("#score").html("Your score is " + score + "/5");
  });
});