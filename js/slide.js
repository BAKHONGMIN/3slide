// /////////////////////////////////위사이드
$(document).ready(function(){
    var objTop = $("#topBanner ul");

    setInterval(function(){
        objTop.animate({
            "marginTop":"-="+ 350},400,function(){
                objTop.find('li').eq(0).appendTo(objTop);
                objTop.css({"marginTop":0});
            });
    },3000);
});
// //////////////////////////////////////////사이드

$(document).ready(function(){
    var objleft = $("#slideBanner ul");

    setInterval(function(){
        objleft.animate({
            "marginLeft":"-="+ 1200},400,function(){
                objleft.find('li').eq(0).appendTo(objleft);
                objleft.css({"marginLeft":0});
            });
    },3000);
});
///////////////////////페이드
$(document).ready(function(){
    var objfade = $("#fadeBanner ul");
    var count = 0;

    setInterval(function(){
        count++;
        count = count % 3;
        objfade.find('li').eq(count).addClass('on').siblings().removeClass('on');
    },3000);
});