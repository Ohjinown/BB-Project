/* video01.js */


/* 
//이사님
$(document).on('click','.btn_edit',function(e){
    console.log($(this).parent().closest('.t_list_item').children('.func_test'));

    $(this).parent().closest('.t_list_item').children('.func_test').css({"height":'250px'});
    $(this).parent().closest('.t_list_item').children('.func_test').children('.box_edit').css({'display':'block'});

});

*/
$(function(){
    $(".new_video").click(function(){
        $(this).toggleClass("on"); //버튼 컬러 바꾸기
        $(".box_register").toggleClass("on"); //영상 등록 팝업
    });
});

//수정 폼 복제
var f_clone = '';


f_clone += ' <div class="edit_wrap">';
f_clone += '     <form class="box_edit">';
f_clone += '         <fieldset>';
f_clone += '             <ul class="edit_list">';
f_clone += '                 <li class="s_area">';
f_clone += '                     <label for="areaChoice">지역</label>';
f_clone += '                     <select name="지역선택" id="areaChoice">';
f_clone += '                         <option value="none">지역 선택</option>';
f_clone += '                         <option value="farm">농촌</option>';
f_clone += '                         <option value="factory">공장가</option>';
f_clone += '                         <option value="new_city">신도심</option>';
f_clone += '                         <option value="old_city">구도심</option>';
f_clone += '                     </select>';
f_clone += '                 </li>';
f_clone += '                 <li class="s_name">';
f_clone += '                     <label for="schoolEnter">학교</label>';
f_clone += '                     <input type="text" id="schoolEnter" />';
f_clone += '                     <span>초등학교</span>';
f_clone += '                 </li>';
f_clone += '                 <li class="s_contents">';
f_clone += '                     <label for="contents">등교 콘텐츠</label>';
f_clone += '                     <input type="text" id="contents" />';
f_clone += '                     <label class="btn_choice" for="fileChoice">파일 선택</label>';
f_clone += '                     <input class="input_choice" type="file" id="fileChoice" />';
f_clone += '                 </li>';
f_clone += '                 <li class="complete_wrap">';
f_clone += '                     <button class="complete" type="button" name="완료버튼" value="완료" onclick="">완료</button>';
f_clone += '                 </li>';
f_clone += '             </ul>';
f_clone += '         </fieldset>';
f_clone += '     </form>';
f_clone += ' </div>';

function btn_form(e){
    var t_body = $(e).parents("ul.t_body");

    if($(t_body).hasClass("on")){
        $(t_body).removeClass("on");
        $(t_body).next(".edit_wrap").remove();
    }else{
        $(t_body).addClass("on").after(f_clone);
    }


}


