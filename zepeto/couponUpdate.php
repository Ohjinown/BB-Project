<?php
include_once $_SERVER['DOCUMENT_ROOT']."/zepeto/db/db.php";
	$sql = "UPDATE coupons SET uses_record ='Y' WHERE unique_number = '{$_POST['code']}'";
	$row = mysqli_query($conn, $sql) or die(mysqli_error($conn));

	$page = $_POST['page'];
	$select = $_POST['select'];
	$codes = $_POST['codes'];
	$code = substr($_POST['code'],9);
	
	if ($codes != $_POST['code']) {
		if ($codes == substr($_POST['code'],9)){
			echo "<script>location.href='main.php?page=$page&code=$codes&use_coupon=$select';</script>";
		}
		echo "<script>location.href='main.php?page=$page&code=&use_coupon=$select';</script>";
	}
?>