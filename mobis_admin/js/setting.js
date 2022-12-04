/* setting.js */

$(function(){
    $(".new_manager").click(function(){
        $(this).toggleClass("on"); //버튼 컬러 바꾸기
        $(".m_register").toggleClass("on"); //영상 등록 팝업
    });
});

//수정 폼 복제
var f_clone = '';

f_clone += '<div class="edit_wrap">';
f_clone += '<form class="box_edit">';
f_clone += '    <fieldset>';
f_clone += '        <ul class="edit_list">';
f_clone += '            <li>';
f_clone += '                <label for="e_classify">분류</label>';
f_clone += '                <div class="classi_wrap">';
f_clone += '                    <select name="분류선택" id="e_classify">';
f_clone += '                        <option value="none">기타</option>';
f_clone += '                        <option value="mobis">현대모비스</option>';
f_clone += '                        <option value="kpr">KPR</option>';
f_clone += '                    </select>';
f_clone += '                </div>';
f_clone += '            </li>';
f_clone += '            <li class="right">';
f_clone += '                <label for="e_name">이름</label>';
f_clone += '                <input type="text" id="e_name" />';
f_clone += '            </li>';
f_clone += '            <li class="bottom">';
f_clone += '                <label for="e_id">ID</label>';
f_clone += '                <input type="text" id="e_id" />';
f_clone += '            </li>';
f_clone += '            <li class="right bottom">';
f_clone += '                <label for="e_pw">PW</label>';
f_clone += '                <input type="text" id="e_pw" />';
f_clone += '            </li>';
f_clone += '            <li class="complete_wrap">';
f_clone += '                <button class="complete" type="button" name="완료버튼" value="완료" onclick="">완료</button>';
f_clone += '            </li>';
f_clone += '        </ul>';
f_clone += '    </fieldset>';
f_clone += '</form>';
f_clone += '</div>';

function btn_form(e){
    var t_body = $(e).parents("ul.t_body");

    if($(t_body).hasClass("on")){
        $(t_body).removeClass("on");
        $(t_body).next(".edit_wrap").remove();
    }else{
        $(t_body).addClass("on").after(f_clone);
    }
}
