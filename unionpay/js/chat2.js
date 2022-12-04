/* chat2.js */
$(document).ready(function() {
    json = JSON.stringify(chat1);
    let obj = JSON.parse(json);

    for (let i = 0; i < obj['key'].length; i++) {
        setTimeout(function(){
            if (i <= '1') {
                $("<p class='pro_title profile1'><span class='profile_img'></span>"+obj['name']['0']+"</p><div class='talk'><span><strong>"+obj['key'][i]+"</strong></span></div>").appendTo(".chat_area");
            } else if (i == '4') {
                $("<div class='talk talk_bl'><span>"+obj['key']['4']+"</span></div><br /><br /><br />").appendTo(".chat_area");
            } else if (i <= '13'){
                $("<p class='pro_title profile2'><span class='profile_img'></span>"+obj['name']['1']+"</p><div class='talk'><span>"+obj['key'][i]+"</span></div>").appendTo(".chat_area");
            } else {
                $(".select").css("display","block");
                $("<div><span><button class='btn_select1' type='button'>"+obj['key'][i]+"</div></span></button>").appendTo(".select");
            //  $(".talk"+i).append("<span><strong>"+obj['key'][i]+"</strong></span>");
            }
        }, 500*i);
    }


      
//버튼 선택하기
    $(document).on('click', '.btn_select1', function () {
        $(this).addClass("on");
        $(".btn_select2").removeClass("on");
        json = JSON.stringify(chat_A);
        let obj = JSON.parse(json);
    });
    $(document).on('click', '.btn_select2', function () {
        $(this).addClass("on");
        $(".btn_select1").removeClass("on");
    });
    $(document).on('click', '.btn_select3', function () {
        $(this).addClass("on");
        $(".btn_select4").removeClass("on");
    });
    $(document).on('click', '.btn_select4', function () {
        $(this).addClass("on");
        $(".btn_select3").removeClass("on");
    });
    $(document).on('click', '.btn_select5', function () {
        $(this).addClass("on");
        $(".btn_select6").removeClass("on");
        $(location).attr('href','fin.html');
    });
    $(document).on('click', '.btn_select6', function () {
        $(this).addClass("on");
        $(".btn_select5").removeClass("on");
        $(location).attr('href','fin.html');
    });
    // $('.btn_select1').click(function(){
    //     $(this).addClass("on");
    //     $(".btn_select2").removeClass("on");
    // });
    // $('.btn_select2').click(function(){
    //     $(this).addClass("on");
    //     $(".btn_select1").removeClass("on");
    // });
    // $('.btn_select3').click(function(){
    //     $(this).addClass("on");
    //     $(".btn_select4").removeClass("on");
    // });
    
    // $('.btn_select4').click(function(){
    //     $(this).addClass("on");
    //     $(".btn_select3").removeClass("on");
    // });

    // $('.btn_select5').click(function(){
    //     $(this).addClass("on");
    //     $(".btn_select6").removeClass("on");
    //     $(location).attr('href','fin.html');
    // });
    
    // $('.btn_select6').click(function(){
    //     $(this).addClass("on");
    //     $(".btn_select5").removeClass("on");
    //     $(location).attr('href','fin.html');
    // });
});
