// page loader hear
$(document).ready(function(){
    $(".dot-pulse").fadeOut(500,()=>{
        $(".loader").fadeOut(800)
        $("body").css("overflow","scroll")
    })
})

// navbar scroll hear
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".header-nav").style.backgroundColor = "white";
    document.querySelector(".header-nav").style.padding = "0.2rem 0rem";
  }else {
    document.querySelector(".header-nav").style.backgroundColor = "transparent";
    document.querySelector(".header-nav").style.padding = "0.8rem 0rem";
  }
}

// navbar active hear
$(".navbar .nav-hov").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
});

