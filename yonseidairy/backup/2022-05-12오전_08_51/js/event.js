// 퀴즈 경품 alert
// $(".product").click(function(event) {
//     var i = $(this).index();
//     console.log(i);
// })
// $(document).on("click", ".area_5_click", function() {
//     var key = $(this).data("value");
//     var child = $(key).children();
//     console.log(key);
//     console.log(child);
//     if (key==1) {
//         $(".color").css("background-color", "#24af4e");
//     } else if (key==2) {
//         $(".color").css("background-color", "#00aca5");
//     }
// });
$(document).on("click", ".yes_box, .no_box", function() {
    $(".slide").css("transform", "translateX(-1000px)")
    $(".top_bar2").css("background-color", "#24af4e");
    $(".top_bar2").css("opacity", "1");
});
$(document).on("click", ".yes_box2, .no_box2", function() {
    $(".slide").css("transform", "translateX(-2000px)")
    $(".top_bar3").css("background-color", "#24af4e");
    $(".top_bar3").css("opacity", "1");
});
$(document).on("click", ".yes_box3, .no_box3", function() {
    $(".slide").css("transform", "translateX(-3000px)")
    $(".top_bar4").css("background-color", "#24af4e");
    $(".top_bar4").css("opacity", "1");
});
$(document).on("click", ".yes_box4, .no_box4", function() {
    $(".slide").css("transform", "translateX(-4000px)")
    $(".top_bar5").css("background-color", "#24af4e");
    $(".top_bar5").css("opacity", "1");
});
$(document).on("click", ".result, .no_box5", function() {
    $(".slide").css("transform", "translateX(-5000px)")
    $(".top_bar6").css("background-color", "#24af4e");
    $(".top_bar6").css("opacity", "1");
});
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