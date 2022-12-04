<?php
include_once $_SERVER['DOCUMENT_ROOT']."/zepeto/db/db.php";
session_start();
session_destroy();
echo "<script>location.href='index.php';</script>";
?>