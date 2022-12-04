<?php
include_once $_SERVER['DOCUMENT_ROOT']."/zepeto/db/db.php";
session_start();
if (isset($_SESSION['ad_id']) && isset($_SESSION['ad_pw'])) {
	echo "<script>location.href = './main.php';</script>";
	exit;
} else if (isset($_SESSION['id']) && isset($_SESSION['pw'])) {
    echo "<script>location.href = './adSet.php';</script>";
}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/index.css">
    <script src="./js/script.js"></script>
    <title>로그인</title>
</head>
<body>
    <?php

    ?>
    <div class="login_box">
        <div class="container">
            <div class="title_box">
                <div class="box1">
                    <span class="title_text">K-VIBE FESTA in ZEPETO</span>
                </div>
                <div class="box2">
                    <span class="event_title">[EVENT] ADMIN</s>
                </div>
            </div>
            <form method="POST" name="loginForm" action="login.php">
                <div class="iogin_title">
                    <div class="id">
                        <span class="id_text">ID</span>
                        <input class="id_input" type="text" name="id"/>
                    </div>
                    <div class="pw">
                        <span class="pw_text">PW</span>
                        <input class="pw_input" type="password" name="pw" autocomplete='off'/>
                    </div>
                    <div class="btn_box">
                        <button class="login_btn" onclick="login();"><span class="login_text">LOGIN</span></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
</html>