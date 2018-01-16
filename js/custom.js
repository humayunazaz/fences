$(document).ready(function(){
    let width = $(window).innerWidth();
    console.log(width);
    if(width < 567){
        responsiveUpdate();
    } else{
        desktopUpdate();
    }
});

function responsiveUpdate(){
    $('.heroMain img').attr("src", "img/hero-mobile.png");
    $('.heroMain img').attr("srcset", "");
    $(".fenceService .mainImg img").attr("src", "img/img-mobile.png");
    $(".fenceService .mainImg img").attr("srcset", "");
    $(".reviewImg img").attr("src", "img/bg2-mobile.png");
    $(".reviewImg img").attr("srcset", "");
    $(".pro-hero-img img").attr("src", "img/hero-2-mobile.png");
    $(".pro-hero-img img").attr("srcset", "");
    $(".askImg").css("display", "none");
}

function desktopUpdate(){
    $('.heroMain img').attr("src", "img/hero.png");
    $(".fenceService .mainImg img").attr("src", "img/img.png");
    $(".reviewImg img").attr("src", "img/bg2.png");
    $(".pro-hero-img img").attr("src", "img/hero2.png");
    $(".askImg").css("display", "block");
}