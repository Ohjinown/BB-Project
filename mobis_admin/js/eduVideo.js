/* edu_video */

//교육 영상 드록
$(function(){
    $(".new_video").click(function(){
        $(this).toggleClass("on"); //버튼 컬러 바꾸기
        $(".e_register").toggleClass("on"); //영상 등록 팝업
    });
});


//수정 폼 복제
var f_clone = '';

f_clone += '<div class="edit_wrap">';
f_clone += '    <form class="box_edit">';
f_clone += '        <fieldset>';
f_clone += '            <ul class="edit_list">';
f_clone += '                <li>';
f_clone += '                    <label for="edit_category">카테고리</label>';
f_clone += '                    <div class="category_wrap">';
f_clone += '                        <select name="카테고리선택" id="edit_category">';
f_clone += '                            <option value="none">전체</option>';
f_clone += '                            <option value="around">주변 환경 요소</option>';
f_clone += '                            <option value="walker">보행자 교통안전</option>';
f_clone += '                            <option value="crosswalk">횡단보도</option>';
f_clone += '                            <option value="b_spot">사각지대</option>';
f_clone += '                            <option value="a_character">지역 특징 반영</option>';
f_clone += '                        </select>';
f_clone += '                    </div>';
f_clone += '                </li>';
f_clone += '                <li class="edu_contents">';
f_clone += '                    <label for="c_contents">교육 영상</label>';
f_clone += '                    <input class="c_contents" type="text" id="c_contents" />';
f_clone += '                    <label class="btn_choice" for="fileChoice">파일 선택</label>';
f_clone += '                    <input class="input_choice" type="file" id="fileChoice" />';
f_clone += '                </li>';
f_clone += '                <li class="complete_wrap">';
f_clone += '                    <button class="complete" type="button" name="완료버튼" value="완료" onclick="">완료</button>';
f_clone += '                </li>';
f_clone += '            </ul>';
f_clone += '        </fieldset>';
f_clone += '    </form>';
f_clone += '</div>';

function btn_form(e){
    var t_body = $(e).parents("ul.t_body");
    console.log(t_body);
    if($(t_body).hasClass("on")){
        $(t_body).removeClass("on");
        $(t_body).next(".edit_wrap").remove();
    }else{
        $(t_body).addClass("on").after(f_clone);
    }
}