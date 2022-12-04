// 퀴즈 경품 alert

$(document).on("click", ".area_2_button", function() {
    var value1 = $("#value1").val();
    var value2 = $("#value2").val();
    var value3 = $("#value3").val();
    var value4 = $("#value4").val();
    if (value1 == "" || value2 == ""  || value3 == ""  || value4 == "" ) {
        alert("한국어로 빈칸 없이 정답을 입력해주세요.");
    } else if (value1 == "플" && value2 == "래"  && value3 == "너"  && value4 == "츠"){
        $(".hide_yes").removeClass("hide_yes");
    } else if (value1 != "플" || value2 != "래"  || value3 != "너"  || value4 != "츠") {
        $(".hide_no").removeClass("hide_no");
    }
});

//popup
$(document).on("click", ".close_no", function () {
    // var a = $(".close").parents("className", "no");
    // if($(a).hasClass("no")) {
    //     console.log(a);
    // } else {
    //     console.log(a);
    // }
        $(".popup_no").addClass("hide_no");
        console.log("no")
});
$(document).on("click", ".close_yes", function () {
        $(".popup_yes").addClass("hide_yes");
        console.log("yes")
});
//pc, 모바일 확인
//슬라이드

$(document).ready(function () {
//	$(".area_2_box").keyup(function() {
//		if($(this).val().length > $(this).attr("maxlength")) {
//			$(this).val($(this).val().substr(0, $(this).attr('maxlength')));		
//		}
//	});
	$(".area_2_box").bind("propertychange change keyup paste input", function() {
		if($(this).val().length > $(this).attr("maxlength")) {
			$(this).val($(this).val().substr(0, $(this).attr('maxlength')));
			console.log($(this).val());
			alert("asd");
		}
//		if (this.value.length == this.attr("maxlength")) {
//			$("#value2").focus();
//			$("#value3").focus();
//			console.log($(this).attr("maxlength"));
//		}
	});

    var pc_device = "win16|win32|win64|mac|macintel";
    var mo_device = navigator.platform;
    var test_array = [];
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
		if ( varUA.indexOf('android') > -1 ||  varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1) {
			//모바일

            $(document).on("click", ".yes_box", function() {
                $(".slide").css("transform", "translateX(-92vw)")
                $(".top_bar2").css("background-color", "#24af4e");
                $(".top_bar2").css("opacity", "1");
                test_array.push($(".yes_box").attr("data-yes"));
                console.log(test_array);
            });
            $(document).on("click", ".yes_box2", function() {
                $(".slide").css("transform", "translateX(-184vw)")
                $(".top_bar3").css("background-color", "#24af4e");
                $(".top_bar3").css("opacity", "1");
                var yes2 = $(this).data("yes");
                test_array.push($(".yes_box2").attr("data-yes"));
                console.log(test_array);
            });
            $(document).on("click", ".yes_box3", function() {
                $(".slide").css("transform", "translateX(-276vw)")
                $(".top_bar4").css("background-color", "#24af4e");
                $(".top_bar4").css("opacity", "1");
                test_array.push($(".yes_box3").attr("data-yes"));
                var yes3 = $(this).data("yes");
                console.log(test_array);
            });
            $(document).on("click", ".yes_box4", function() {
                $(".slide").css("transform", "translateX(-368vw)")
                $(".top_bar5").css("background-color", "#24af4e");
                $(".top_bar5").css("opacity", "1");
                test_array.push($(".yes_box4").attr("data-yes"));
                var yes4 = $(this).data("yes");
                console.log(test_array);
            });

            $(document).on("click", ".no_box", function() {
                var no = $(this).data("no");
                console.log(no);
                $(".slide").css("transform", "translateX(-92vw)")
                $(".top_bar2").css("background-color", "#24af4e");
                $(".top_bar2").css("opacity", "1");
                test_array.push($(".no_box").attr("data-no"));
                console.log(test_array);
            });
            $(document).on("click", ".no_box2", function() {
                $(".slide").css("transform", "translateX(-184vw)")
                $(".top_bar3").css("background-color", "#24af4e");
                $(".top_bar3").css("opacity", "1");
                test_array.push($(".no_box2").attr("data-no"));
                console.log(test_array);
            });
            $(document).on("click", ".no_box3", function() {
                $(".slide").css("transform", "translateX(-276vw)")
                $(".top_bar4").css("background-color", "#24af4e");
                $(".top_bar4").css("opacity", "1");
                test_array.push($(".no_box3").attr("data-no"));
                console.log(test_array);
            });
            $(document).on("click", ".no_box4", function() {
                $(".slide").css("transform", "translateX(-368vw)")
                $(".top_bar5").css("background-color", "#24af4e");
                $(".top_bar5").css("opacity", "1");
                test_array.push($(".no_box4").attr("data-no"));
                console.log(test_array);
            });
            $(document).on("click", ".result", function() {
                $(".slide").css("transform", "translateX(-460vw)")
                $(".top_bar6").css("background-color", "#24af4e");
                $(".top_bar6").css("opacity", "1");
                var anwser0 = test_array[0];
                var anwser1 = test_array[1];
                var anwser2 = test_array[2];
                var anwser3 = test_array[3];
                console.log(anwser0, anwser1, anwser2, anwser3);

                if (anwser0==0 && anwser1==0 && anwser2==0 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo.png")
                }
                if (anwser0==0 && anwser1==1 && anwser2==0 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo.png")
                }
                if (anwser0==1 && anwser1==0 && anwser2==0 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo.png")
                }
                if (anwser0==1 && anwser1==1 && anwser2==0 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4_mo.png")
                }
                //완두콩 오리지널
                if (anwser0==0 && anwser1==0 && anwser2==0 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo.png")
                }
                if (anwser0==0 && anwser1==1 && anwser2==0 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo.png")
                }
                if (anwser0==1 && anwser1==0 && anwser2==0 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo.png")
                }
                if (anwser0==1 && anwser1==1 && anwser2==0 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3_mo.png")
                }
                //7넛츠 오리지널
                if (anwser0==0 && anwser1==0 && anwser2==1 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo.png")
                }
                if (anwser0==0 && anwser1==1 && anwser2==1 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo.png")
                }
                if (anwser0==1 && anwser1==0 && anwser2==1 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo.png")
                }
                if (anwser0==1 && anwser1==1 && anwser2==1 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1_mo.png")
                }
                //7넛츠 언스위트
                if (anwser0==0 && anwser1==0 && anwser2==1 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo.png")
                }
                if (anwser0==0 && anwser1==1 && anwser2==1 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo.png")
                }
                if (anwser0==1 && anwser1==0 && anwser2==1 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo.png")
                }
                if (anwser0==1 && anwser1==1 && anwser2==1 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2_mo.png")
                }

            });

            //이전 버튼
            $(".slide_prev2 > img").click(function() {
                $(".slide").css("transform", "translateX(0px)")
                $(".top_bar2").css("background-color", "#231916");
                $(".top_bar2").css("opacity", "0.1");
            });
            $(".slide_prev3 > img").click(function() {
                $(".slide").css("transform", "translateX(-92vw)")
                $(".top_bar3").css("background-color", "#231916");
                $(".top_bar3").css("opacity", "0.1");
            });
            $(".slide_prev4 > img").click(function() {
                $(".slide").css("transform", "translateX(-184vw)")
                $(".top_bar4").css("background-color", "#231916");
                $(".top_bar4").css("opacity", "0.1");
            });
            $(".slide_prev5 > img").click(function() {
                $(".slide").css("transform", "translateX(-276vw)")
                $(".top_bar5").css("background-color", "#231916");
                $(".top_bar5").css("opacity", "0.1");
            });
            $(".slide_prev6 > img").click(function() {
                $(".slide").css("transform", "translateX(0vw)")
                $(".top_bar6, .top_bar5, .top_bar4, .top_bar3, .top_bar2").css("background-color", "#231916");
                $(".top_bar6, .top_bar5, .top_bar4, .top_bar3, .top_bar2").css("opacity", "0.1");
                test_array.splice(0, test_array.length);
            });
		} else if ( varUA.indexOf("macintosh") > -1||varUA.indexOf("windows") > -1) {
			
            console.log("pc");
			$(document).on("click", ".yes_box", function() {
                $(".slide").css("transform", "translateX(-1000px)")
                $(".top_bar2").css("background-color", "#24af4e");
                $(".top_bar2").css("opacity", "1");
                test_array.push($(".yes_box").attr("data-yes"));
            });
            $(document).on("click", ".yes_box2", function() {
                $(".slide").css("transform", "translateX(-2000px)")
                $(".top_bar3").css("background-color", "#24af4e");
                $(".top_bar3").css("opacity", "1");
                test_array.push($(".yes_box2").attr("data-yes"));
            });
            $(document).on("click", ".yes_box3", function() {
                $(".slide").css("transform", "translateX(-3000px)")
                $(".top_bar4").css("background-color", "#24af4e");
                $(".top_bar4").css("opacity", "1");
                test_array.push($(".yes_box3").attr("data-yes"));
            });
            $(document).on("click", ".yes_box4", function() {
                $(".slide").css("transform", "translateX(-4000px)")
                $(".top_bar5").css("background-color", "#24af4e");
                $(".top_bar5").css("opacity", "1");
                test_array.push($(".yes_box4").attr("data-yes"));
            });
            $(document).on("click", ".no_box", function() {
                $(".slide").css("transform", "translateX(-1000px)")
                $(".top_bar2").css("background-color", "#24af4e");
                $(".top_bar2").css("opacity", "1");
                test_array.push($(".no_box").attr("data-no"));
            });
            $(document).on("click", ".no_box2", function() {
                $(".slide").css("transform", "translateX(-2000px)")
                $(".top_bar3").css("background-color", "#24af4e");
                $(".top_bar3").css("opacity", "1");
                test_array.push($(".no_box2").attr("data-no"));
            });
            $(document).on("click", ".no_box3", function() {
                $(".slide").css("transform", "translateX(-3000px)")
                $(".top_bar4").css("background-color", "#24af4e");
                $(".top_bar4").css("opacity", "1");
                test_array.push($(".no_box3").attr("data-no"));
            });
            $(document).on("click", ".no_box4", function() {
                $(".slide").css("transform", "translateX(-4000px)")
                $(".top_bar5").css("background-color", "#24af4e");
                $(".top_bar5").css("opacity", "1");
                test_array.push($(".no_box4").attr("data-no"));
            });
            $(document).on("click", ".result", function() {
                $(".slide").css("transform", "translateX(-5000px)")
                $(".top_bar6").css("background-color", "#24af4e");
                $(".top_bar6").css("opacity", "1");
                 var anwser0 = test_array[0];
                var anwser1 = test_array[1];
                var anwser2 = test_array[2];
                var anwser3 = test_array[3];
                console.log("Asd");
                console.log(anwser0, anwser1, anwser2, anwser3);
                if (anwser0==0 && anwser1==0 && anwser2==0 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
                }
                if (anwser0==0 && anwser1==1 && anwser2==0 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
                }
                if (anwser0==1 && anwser1==0 && anwser2==0 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
                }
                if (anwser0==1 && anwser1==1 && anwser2==0 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_4.png")
                }
                //완두콩 오리지널
                if (anwser0==0 && anwser1==0 && anwser2==0 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
                }
                if (anwser0==0 && anwser1==1 && anwser2==0 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
                }
                if (anwser0==1 && anwser1==0 && anwser2==0 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
                }
                if (anwser0==1 && anwser1==1 && anwser2==0 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_3.png")
                }
                //7넛츠 오리지널
                if (anwser0==0 && anwser1==0 && anwser2==1 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
                }
                if (anwser0==0 && anwser1==1 && anwser2==1 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
                }
                if (anwser0==1 && anwser1==0 && anwser2==1 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
                }
                if (anwser0==1 && anwser1==1 && anwser2==1 && anwser3==0) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_1.png")
                }
                //7넛츠 언스위트
                if (anwser0==0 && anwser1==0 && anwser2==1 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
                }
                if (anwser0==0 && anwser1==1 && anwser2==1 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
                }
                if (anwser0==1 && anwser1==0 && anwser2==1 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
                }
                if (anwser0==1 && anwser1==1 && anwser2==1 && anwser3==1) {
                    $(".area_6_png").attr("src", "http://zhi.bbcreative.co.kr/ojo/yonseidairy/img/img_test_fin_2.png")
                }
            });
    
            //이전 버튼
            $(".slide_prev2 > img").click(function() {
                $(".slide").css("transform", "translateX(0px)")
                $(".top_bar2").css("background-color", "#231916");
                $(".top_bar2").css("opacity", "0.1");
            });
            $(".slide_prev3 > img").click(function() {
                $(".slide").css("transform", "translateX(-1000px)")
                $(".top_bar3").css("background-color", "#231916");
                $(".top_bar3").css("opacity", "0.1");
            });
            $(".slide_prev4 > img").click(function() {
                $(".slide").css("transform", "translateX(-2000px)")
                $(".top_bar4").css("background-color", "#231916");
                $(".top_bar4").css("opacity", "0.1");
            });
            $(".slide_prev5 > img").click(function() {
                $(".slide").css("transform", "translateX(-3000px)")
                $(".top_bar5").css("background-color", "#231916");
                $(".top_bar5").css("opacity", "0.1");
            });
            $(".slide_prev6 > img").click(function() {
                $(".slide").css("transform", "translateX(0)")
                $(".top_bar6, .top_bar5, .top_bar4, .top_bar3, .top_bar2").css("background-color", "#231916");
                $(".top_bar6, .top_bar5, .top_bar4, .top_bar3, .top_bar2").css("opacity", "0.1");
            });
		}

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