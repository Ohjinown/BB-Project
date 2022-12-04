$(document).ready(function() {
	$('.popup_button').on('click', function() {
		$('.popup_open').toggleClass('open');
		// $('.popup').css('display','block');
		return false;
	});
	$('.store_title_botton').on('click', function(){
		$('.popup_open').toggleClass('open');
		return false;
	})
	$('.store_insert_button').on('click', function() {
		$('.popup_open1').toggleClass('open1');
		return false;
	})
	$('.view_detail').on('click', function() {
		$('.popup_open2').toggleClass('open2');
		// $('input').prop('readonly', true);
		// $('option').attr('disabled', true);
		// $('textarea').prop('readonly', true);
		return false;
	})
	$('.store_popup_but').on('click', function() {
		$('.popup_open3').toggleClass('open3');
		$('.popup_open2').toggleClass('open2');
		return false;
	})

	//콘텐츠 리스트 팝업창
	$('.content_button1').on('click', function() {
		console.log("ASd")
		$('.content_popup').toggleClass('content_open');
		return false;
	})

	$('.see').on('click', function () {
		console.log("ASssd")
		$('.content_popup1').toggleClass('content_open');
	})


	//장비 리스트 등록
	$('.button_insert').on('click', function() {
		$('.equipment_popup').toggleClass('equipment_open');
		return false;
	})
	$('.see').on('click', function() {
		$('.equipment_popup1').toggleClass('equipment_open');
		return false;
	})
	//접근 그룹설정
	$('.group_insert').on('click', function() {
		$('.group_popup').toggleClass('group_popup_open');
		return false;
	})
	$('.text').on('click', function() {
		$('.group_popup1').toggleClass('group_popup_open');
		return false;
	})

	//sidebar
	// $('.system ').on('click', function() {
	// 	console.log("ASssd")
	// 	$('.system ').addClass('hide');
	// 	return false;
	// })


	$('.cancel').on('click', function() {
	let val1 = $('select[name=area1] option:selected').text();
	let val2 = $('select[name=area2] option:selected').text();
	let val3 = $('select[name=area3] option:selected').text();
	console.log(val1, val2, val3);
		if (val1 != '전체' || val2 != '전국' || val3 != '전체') {
			$('.store_area_select1').val('전체');
			$('.store_area_select2').val('');
			$('.store_select_box').val('전체');
		}
		$('.del').val('');
		$('.popup_open').toggleClass('open');
		return false;
	})
	$('.cancel1').on('click', function() {
		var install_val = $('select[name=ver] option:selected').text();
			if (install_val != '선택') {
				$('.ver_select').val('선택');
			}
			$('.del').val('');
			$('.popup_open1').toggleClass('open1');
			return false;
	})
	$('.cancel2').on('click', function() {
		$('.popup_open2').toggleClass('open2');
			return false;
	})

	$('.cancel3').on('click', function() {
		$('.cancel').val('');
		$('.popup_open3').toggleClass('open3');
			return false;
	})

	$('.cancel4').on('click', function() {
		$('.imgage1').val('');
			return false;
	})
	$('.cancel5').on('click', function() {
		$('.imgage2').val('');
			return false;
	})

	//콘텐츠 팝업창 취소 이미지
	var con = $('select[name=kind] option:selected').text();
	$('.store_cancel').on('click', function() {
		// console.log(con)
		// if (con != '기본혜택') {
		// 	$('.con_del').val('기본혜택');
		// }
		$('.content_popup').toggleClass('content_open');
			return false;
	})

	$('.store_cancel1').on('click', function() {
		console.log("asd")
		$('.content_popup1').toggleClass('content_open');
			return false;
	})

	// 장비 리스트 취소 이미지
	$('.equipment_cancel').on('click', function() {
		$('.equipment_popup').toggleClass('equipment_open');
			return false;
	})
	$('.equipment_cancel1').on('click', function() {
		$('.equipment_popup1').toggleClass('equipment_open');
			return false;
	})
	$('.equipment_cancel2').on('click', function() {
		$('.equipment_popup2').toggleClass('equipment_open');
			return false;
	})

	//접근 그룹 설정 취소
	$('.group_cancel').on('click', function() {
		$('.group_popup').toggleClass('group_popup_open');
			return false;
	})
	$('.group_cancel1').on('click', function() {
		$('.group_popup1').toggleClass('group_popup_open');
			return false;
	})
  });
  



	$(document).ready(function() {
		$("#file1").on('change',function(){
			console.log("asdas");
			var fileName = $("#file1").val();
			$(".imgage1").val(fileName);
		});
		$("#file2").on('change',function(){
			var fileName = $("#file2").val();
			$(".imgage2").val(fileName);
		});
		$("#file3").on('change',function(){
			var fileName = $("#file3").val();
			$(".imgage3").val(fileName);
		});
})