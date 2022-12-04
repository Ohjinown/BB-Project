/* result.js */

$(document).ready(function() {
//버튼 선택하기
    $('.card_name').click(function(){
    var select = $(this).parents("li");
    console.log(select);
    if($(select).hasClass("on")){
        $(select).removeClass("on");
    }else{
    $(select).addClass("on");
    }
    });

//U reward 카드 클릭했을 때 QR 코드 
    $(".reward").click(function(e){
        var innerW = $(window).innerWidth();
        console.log(innerW);
        if(innerW > 740 ){
            e.preventDefault();
            $(".pc_qr").toggleClass("on");
        }
    });
});
