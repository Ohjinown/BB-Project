/* schoolList01 */

$(function() {
    $('.btn_use').click( function() {
      if( $(this).html() == '사용중' ) {
        $(this).html('중지').addClass("on");
      }
      else {
        $(this).html('사용중').removeClass("on");
      }
    });

  });


//수정 폼 복제
var f_clone = '';

f_clone += '<div class="edit_wrap">';
f_clone += '<form class="box_edit">';
f_clone += '    <fieldset>';
f_clone += '        <ul class="edit_list">';
f_clone += '            <li>';
f_clone += '                <label for="e_code">학교 코드</label>';
f_clone += '                <input type="text" id="e_code" />';
f_clone += '            </li>';
f_clone += '            <li class="e_name">';
f_clone += '                <label for="e_name">학교 이름</label>';
f_clone += '                <input type="text" id="e_name" />';
f_clone += '                <span>초등학교</span>';
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
