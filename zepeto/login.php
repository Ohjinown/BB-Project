<?php
include_once $_SERVER['DOCUMENT_ROOT']."/zepeto/db/db.php";
	$id = mysqli_real_escape_string($conn,$_POST['id']);
	$pw = mysqli_real_escape_string($conn,$_POST['pw']);
	
	if($_POST['id'] == "" || $_POST['pw'] == "") {
	echo"<script>alert('아이디 또는 패스워드 입력해주세요.'); history.back();</script>";
	} else {
		$date = date("Y-m-d H:i:s");
		$sql = "SELECT * FROM ad_login WHERE ad_id = '{$id}' AND ad_pw = '{$pw}'";
		$result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
		$sql1 = "UPDATE  ad_login SET login_time = '{$date}' WHERE ad_id = '{$id}'";
		$result1 = mysqli_query($conn, $sql1) or die(mysqli_error($conn));
		$row = mysqli_fetch_array($result);

		if ($id == 'master' && $pw == 'admin') {
			session_start();
			$_SESSION['id'] = $id;
			$_SESSION['pw'] = $pw;

			$_SESSION['company'] = $row['company'];
			echo "<script>location.href='adSet.php';</script>";
		} else if($id == isset($row['ad_id']) && $pw == isset($row['ad_pw'])) {
			session_start();
			$_SESSION['ad_id'] = $row['ad_id'];
			$_SESSION['ad_pw'] = $row['ad_pw'];
			$_SESSION['company'] = $row['company'];
			echo "<script>location.href='main.php';</script>";
		} else {
			echo "<script>alert('아이디 또는 패스워드가 틀렸습니다.'); history.back();</script>";
		}
	}
?>