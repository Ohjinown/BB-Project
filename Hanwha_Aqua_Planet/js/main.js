/* main.js */
$(document).ready(function() {
    $(".textChange").click(function(){
		console.log("asd");
        if (($(".btn_more").hasClass("btn_more"))){
            var position = $(".preview_inner").offset();
			$("body").stop().animate({scrollTop:position.top},8000);
			$(".btn_more").addClass("show");
			$(".show").removeClass("btn_more");
            $(".show > span").text("상세접기");
            $(".img_wrap").css("display", "none");
            $(".preview_inner").css("display", "block");
            document.querySelector('.preview_inner').scrollIntoView(true);
        } else if (($(".show").hasClass("show"))){
			$(".show").addClass("btn_more");
			$(".show").removeClass("show");
			$(".btn_more > span").text("상세 더보기");
            $(".preview_inner").css("display", "none");
            $(".img_wrap").css("display", "block");
			document.querySelector('.preview_wrap').scrollIntoView(true);
        }

    });

    $(".btn_cover2").click(function() {
        var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
		if ( varUA.indexOf('android') > -1) {
			//안드로이드
			window.location.href="https://aftermuseum.com/qpicker_app.php?os=aos";
			return "android";
		} else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
			//IOS
			window.location.href="https://aftermuseum.com/qpicker_app.php?os=ios";
			return "ios";
		}
    });
});