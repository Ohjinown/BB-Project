<?php
	include_once($_SERVER['DOCUMENT_ROOT'].'/lib/common.php');
	$id = '123';
	$pw = '123';
	if($_POST['userId'] == $id && $_POST['userPw'] == $pw) {
		echo "<script>location.href='dashboard.php';</script>";
		exit;
	} else {
		echo "<script>alert('아이디 또는 패스워드가 틀렸습니다.'); history.back();</script>";
		exit;
	}
?>
