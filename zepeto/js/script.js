$(function () {
$('#select').on('change', function () {
	$('select[name=use_coupon]').val();
	$(this).closest('form').submit();
});
$('.use_coupons').on('change', function () {
	$('select[name=bis]').val();
	$(this).closest('form').submit();
});
$('.use_coupons1').on('change', function () {
	$('select[name=use_coupon]').val();
	$(this).closest('form').submit();
});
})

$(function () {
	$('.use_coupon').on('change', function () {
		$('select[name=bis]').val();
		$(this).closest('form').submit();
	});
	$('.use_coupon1').on('change', function () {
		$('select[name=use_coupon]').val();
		$(this).closest('form').submit();
	});
})
$(document).on('click', '.user_buttonBox', function () {
	let parent = $(this).parent().parent().next();
	console.log(parent);
	if(!$(parent).hasClass('on')){
		$(parent).addClass("on")
	}
});
// $(document).on('click', '.user_buttonBox', function () {
// 	$('.main').css('visibility', 'hidden');
// 	$('.main_popup').toggleClass('on');
// 	return false;
// })
$(document).on('click', '.cancel_btn', function () {
	let parent = $(".cancel_btn").closest(".main_popup");
	if ($(parent).hasClass('on')){
		$(parent).removeClass('on');
	}
})
// $(document).on('click', '.cancel_btn', function () {
// 	$('.main_popup').toggleClass('on');
// 	$('.main').css('visibility', '');
// 	return false;
// })
// $('.cancel_btn').on('click', function() {
// 	console.log("asd");
// 	var parent = $(this).parent().parent().parent().next();
// 	$(parent).removeClass('on');
// })
// $(document).on('click', '.cancel_btn', function () {
// 	var parent = $(this).next();
// 	if(!$(parent).hasClass('on')){
// 		$(parent).addClass("on")
// 	} else {
// 		$(parent).removeClass("on");
// 	}
// })
