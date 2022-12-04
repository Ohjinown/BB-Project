/* chat2.js */

$(document).ready(function() {
//버튼 선택하기
    $('.btn_select1').click(function(){
        $(this).addClass("on");
        $(".btn_select2").removeClass("on");
    });
    
    $('.btn_select2').click(function(){
        $(this).addClass("on");
        $(".btn_select1").removeClass("on");
    });

    $('.btn_select3').click(function(){
        $(this).addClass("on");
        $(".btn_select4").removeClass("on");
    });
    
    $('.btn_select4').click(function(){
        $(this).addClass("on");
        $(".btn_select3").removeClass("on");
    });

    $('.btn_select5').click(function(){
        $(this).addClass("on");
        $(".btn_select6").removeClass("on");
        $(location).attr('href','fin.html');
    });
    
    $('.btn_select6').click(function(){
        $(this).addClass("on");
        $(".btn_select5").removeClass("on");
        $(location).attr('href','fin.html');
    });
});
