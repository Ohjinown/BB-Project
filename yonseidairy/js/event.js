//popup
$(document).on("click", ".close_no", function () {
	$(".popup_no").addClass("hide_no");
});
$(document).on("click", ".close_yes", function () {
	$(".popup_yes").addClass("hide_yes");
});
//pc, 모바일 확인
//슬라이드
$(document).ready(function () {
// text 자르기
    $('#value1').unbind('keyup change input paste').bind('keyup change input paste',function(e){
        var $this = $(this);
        var val = $this.val();//input value
        var valLength = val.length;//4
        var maxCount = $this.attr('maxlength');//html maxlength
        if(valLength>maxCount){
            console.log(val);
            $this.val($this.val().substring(0,maxCount));
        }
    }); 

    var test_array = [0,0,0,0];
	var qSection = 0;
    var barSection = 0.1666;

    $(document).on("click", ".yes_box", function() {
        var array_num = $(".yes_box").data("yes");
        test_array[qSection] = array_num;
        var slider = $(".slide").width();
        qSection = qSection+1;
        barSection = barSection+0.1666;
        $(".slide").css("transform", "translateX("+(-slider * qSection) +"px)");
        $(".top_bar").css("transform", "scaleX("+ barSection +")");
        $(".top_bar").css("transition", "1s");

        $(window).resize(function () {
            var resize_width = $(".slide").width();
            $(".slide").css("transform", "translateX("+(-resize_width * qSection) +"px)");
        });
    });

    $(document).on("click", ".no_box", function() {
        var array_num = $(".no_box").data("no");
        test_array[qSection] = array_num;
        var slider = $(".slide").width();
        qSection = qSection+1;
        barSection = barSection+0.1666;
        $(".slide").css("transform", "translateX("+(-slider * qSection) +"px)");
        $(".top_bar").css("transform", "scaleX("+ barSection +")");
        $(".top_bar").css("transition", "1s");

        $(window).resize(function () {
            var resize_width = $(".slide").width();
            $(".slide").css("transform", "translateX("+(-resize_width * qSection) +"px)");
        });
    });

    $(".slide_prev > img").click(function() {
        var slider = $(".slide").width();
        qSection = qSection-1;
        barSection = barSection-0.1666;
        $(".slide").css("transform", "translateX("+(-slider * qSection)+"px)");
        $(".top_bar").css("transform", "scaleX("+ barSection +")");
        $(".top_bar").css("transition", "1s");

        $(window).resize(function () {
            var resize_width = $(".slide").width();
            $(".slide").css("transform", "translateX("+(-resize_width * qSection) +"px)");
        });
    });

    $(document).on("click", ".result", function() {
        // test_array[qSection] = array_num;
        var slider = $(".slide").width();
        qSection = qSection+1;
        barSection = barSection+0.1666;
        $(".slide").css("transform", "translateX("+(-slider * qSection) +"px)");
        $(".top_bar").css("transform", "scaleX("+ barSection +")");
        $(".top_bar").css("transition", "1s");

        $(window).resize(function () {
            var resize_width = $(".slide").width();
            $(".slide").css("transform", "translateX("+(-resize_width * qSection) +"px)");
            if (anwser0==0 && anwser1==0 && anwser2==0 && anwser3==0) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
                }
            };
            if (anwser0==0 && anwser1==1 && anwser2==0 && anwser3==0) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
                };
            };
            if (anwser0==1 && anwser1==0 && anwser2==0 && anwser3==0) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
                };
            };
            if (anwser0==1 && anwser1==1 && anwser2==0 && anwser3==0) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
                };
            };
            //완두콩 오리지널
            if (anwser0==0 && anwser1==0 && anwser2==0 && anwser3==1) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
                };
            };
            if (anwser0==0 && anwser1==1 && anwser2==0 && anwser3==1) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
                };
            };
            if (anwser0==1 && anwser1==0 && anwser2==0 && anwser3==1) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
                };
            };
            if (anwser0==1 && anwser1==1 && anwser2==0 && anwser3==1) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
                };
            };
            //7넛츠 오리지널
            if (anwser0==0 && anwser1==0 && anwser2==1 && anwser3==0) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
                };
            };
            if (anwser0==0 && anwser1==1 && anwser2==1 && anwser3==0) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
                };
            };
            if (anwser0==1 && anwser1==0 && anwser2==1 && anwser3==0) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
                };
            };
            if (anwser0==1 && anwser1==1 && anwser2==1 && anwser3==0) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
                };
            };
            //7넛츠 언스위트
            if (anwser0==0 && anwser1==0 && anwser2==1 && anwser3==1) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
                };
            };
            if (anwser0==0 && anwser1==1 && anwser2==1 && anwser3==1) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
                };
            };
            if (anwser0==1 && anwser1==0 && anwser2==1 && anwser3==1) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
                };
            };
            if (anwser0==1 && anwser1==1 && anwser2==1 && anwser3==1) {
                if (resize_width<1000) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo@3x.png")
                } else {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
                };
            };
        });

        console.log(test_array);
        var anwser0 = test_array[0];
        var anwser1 = test_array[1];
        var anwser2 = test_array[2];
        var anwser3 = test_array[3];

        if (anwser0==0 && anwser1==0 && anwser2==0 && anwser3==0) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
            }
        };
        if (anwser0==0 && anwser1==1 && anwser2==0 && anwser3==0) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
            };
        };
        if (anwser0==1 && anwser1==0 && anwser2==0 && anwser3==0) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
            };
        };
        if (anwser0==1 && anwser1==1 && anwser2==0 && anwser3==0) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
            };
        };
        //완두콩 오리지널
        if (anwser0==0 && anwser1==0 && anwser2==0 && anwser3==1) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
            };
        };
        if (anwser0==0 && anwser1==1 && anwser2==0 && anwser3==1) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
            };
        };
        if (anwser0==1 && anwser1==0 && anwser2==0 && anwser3==1) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
            };
        };
        if (anwser0==1 && anwser1==1 && anwser2==0 && anwser3==1) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
            };
        };
        //7넛츠 오리지널
        if (anwser0==0 && anwser1==0 && anwser2==1 && anwser3==0) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
            };
        };
        if (anwser0==0 && anwser1==1 && anwser2==1 && anwser3==0) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
            };
        };
        if (anwser0==1 && anwser1==0 && anwser2==1 && anwser3==0) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
            };
        };
        if (anwser0==1 && anwser1==1 && anwser2==1 && anwser3==0) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
            };
        };
        //7넛츠 언스위트
        if (anwser0==0 && anwser1==0 && anwser2==1 && anwser3==1) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
            };
        };
        if (anwser0==0 && anwser1==1 && anwser2==1 && anwser3==1) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
            };
        };
        if (anwser0==1 && anwser1==0 && anwser2==1 && anwser3==1) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
            };
        };
        if (anwser0==1 && anwser1==1 && anwser2==1 && anwser3==1) {
            if (slider<1000) {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo@3x.png")
            } else {
                $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
            };
        };
    });

    $(".reset_btn > img").click(function() {
        var slider = $(".slide").width();
        qSection = qSection-qSection;
        // allBar_Section = barSection
        barSection = barSection-0.833;
        console.log(barSection);
        $(".slide").css("transform", "translateX("+(-slider * qSection)+"px)");
        $(".top_bar").css("transform", "scaleX("+ barSection +")");
        $(".top_bar").css("transition", "1s");

        $(window).resize(function () {
            var resize_width = $(".slide").width();
            $(".slide").css("transform", "translateX("+(-resize_width * qSection) +"px)");
        });
        console.log(qSection);
        test_array.splice(0, test_array.length);
    });
});

$(document).on("click", ".step_2_copy", function() {
    var hastagtext = ("#가볍지만맛있는 #힙한식물성음료 #데일리아이템 #플래너츠는못참지 #플래너츠 #식물성음료");
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = hastagtext;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("해시태그가 복사되었습니다");
});


//텍스트 변경
$(document).on("click", ".area_5_img1", function() {
    $(".color1").css("background-color", "#24af4e");
    $(".color2, .color3, .color4").css("background-color", "#fff");
    $(".area_img").attr("src", "img/btn_product_1_select.png");
    $(".li_text_box > span").text("75kcal");
    $(".li_text_box > span").css("color", "#24af4e");
    $(".background").css("background-color", "rgba(36, 175, 78, 0.1)");
    $(".li_text_box > .sub").css("display", "none");
    $(".title_text1 > p").text("7가지 견과의 영양을 한번에");
    $(".sub1").text("아몬드, 땅콩, 호두, 마카다미아, 잣, 캐슈넛, 피스타치오");
});
$(document).on("click", ".area_5_img2", function() {
    $(".color2").css("background-color", "#00aca5");
    $(".color1, .color3, .color4").css("background-color", "#fff");
    $(".area_img").attr("src", "img/btn_product_2_select.png");
    $(".li_text_box > .title").text("가벼운 칼로리의 맛있는 음료");
    $(".li_text_box > span").text("54kcal");
    $(".li_text_box > span").css("color", "#00aca5");
    $(".background").css("background-color", "rgba(0, 172, 165, 0.1)");
    $(".li_text_box > .sub").css("display", "none");
    $(".title_text1 > p").text("7가지 견과의 영양을 한번에");
    $(".sub1").text("아몬드, 땅콩, 호두, 마카다미아, 잣, 캐슈넛, 피스타치오");
});
$(document).on("click", ".area_5_img3", function() {
    $(".color3").css("background-color", "#84b626");
    $(".color1, .color2, .color4").css("background-color", "#fff");
    $(".area_img").attr("src", "img/btn_product_3_select.png");
    $(".li_text_box > .title").text("칼슘");
    $(".li_text_box > span").text("200mg");
    $(".li_text_box > span").css("color", "#84b626");
    $(".background").css("background-color", "rgba(132, 182, 38, 0.1)");
    $(".li_text_box > .sub").css("display", "block");
    $(".title_text1 > p").text("식물성 완두단백질 8g");
    $(".sub1").text("완두콩 단백질 함유");
});
$(document).on("click", ".area_5_img4", function() {
    $(".color4").css("background-color", "#703f00");
    $(".color1, .color2, .color3").css("background-color", "#fff");
    $(".area_img").attr("src", "img/btn_product_4_select.png");
    $(".li_text_box > .title").text("칼슘");
    $(".li_text_box > span").text("200mg");
    $(".li_text_box > span").css("color", "#703f00");
    $(".background").css("background-color", "rgba(112, 63, 0, 0.1)");
    $(".li_text_box > .sub").css("display", "block");
    $(".title_text1 > p").text("식물성 완두단백질 8g");
    $(".sub1").text("완두콩 단백질 함유");
});
