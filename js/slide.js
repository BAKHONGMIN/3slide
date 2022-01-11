$(document).ready(function(){

    setInterval(function(){
        $("#mainBanner ul").animate({
        "marginTop" : "-="+350},400,
        function(){
            $("#mainBanner li").eq(0).appendTo($("#mainBanner ul"));
            $("#mainBanner ul").css({"marginTop" : 0});
        });
    },3000);
    });











// {"marginLeft" : -1200},
//     400,
//     function(){
//             // 애니메이션 끝나고 처리될 액션

//     }
