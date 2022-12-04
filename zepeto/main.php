<?php
include_once $_SERVER['DOCUMENT_ROOT']."/zepeto/db/db.php";
session_start();
// session_regenerate_id();
if (isset($_SESSION['company'])) {
	$company = $_SESSION['company'];
};
if (!isset($_SESSION['company'])) {
	echo "<script>alert('잘못된 접근 입니다.');  location.href = './index.php';</script>";
	exit;
}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./css/reset.css">
	<link rel="stylesheet" href="./css/main.css">
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="./js/script.js"></script>
	<title>기업페이지</title>
</head>
<body>
	<div class="main">
		<div class="main_box">
			<div class="title_box">
				<div class="box1">
					<span class="title_text">K-VIBE FESTA in ZEPETO</span>
				</div>
				<div class="box2">
					<span class="event_title">[EVENT] ADMIN</span>
				</div>
			</div>
			<?php
				if (isset($_GET['code']) && !isset($_GET['use_coupon'])) {
					$code = $_GET['code'];
					$where = " unique_number LIKE '%{$code}%' ORDER BY no DESC";
				} /*else if (isset($_GET['use_coupon']) && !isset($_GET['code'])) {
					$select = $_GET['use_coupon'];
					$where = " WHERE company= '{$company}' AND uses_record = '{$select}' ORDER BY no DESC";
				}*/ else if (isset($_GET['code']) && isset($_GET['use_coupon'])) {
					$code = $_GET['code'];
					$select = $_GET['use_coupon'];
					if ($select === 'all') {
						$where = " company= '{$company}' AND unique_number LIKE '%{$code}%' AND uses_record IN('Y','N') ORDER BY no DESC";
					} else {
						$where = " company= '{$company}' AND unique_number LIKE '%{$code}%' AND uses_record = '{$select}' ORDER BY no DESC";
					}
				} else { 
					$where = " company = '{$company}' AND uses_record in('Y','N') ORDER BY no DESC";
				}
				$sql = "SELECT * FROM coupons WHERE".$where;
				$result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
			?>
			<div class="introduce_box">
				<div class="hello_box">
					<span class="hello">안녕하세요,</span>
				</div>
				<div class="introduce_box1">
					<?php
						if (isset($company)) {
							if ($company === 'a001') {
								$name = '황남제빵소';
							} else if ($company === 'a002') {
								$name = '양지다방';
							} else if ($company === 'a003') {
								$name = '시나셀프사진관';
							}
					?>
					<span class="introduce_text"><?=$name?></span>
					<?php
						}
					?>
					<span class="introduce_text1">님,</span>
				</div>
			</div>
			<form method="GET">
				<div class="coupon_box">
					<span class="logout" onclick="location.href='./adOut.php'">로그아웃</span>
					<?php
						$sql_a00 = "SELECT COUNT(CASE WHEN uses_record = 'Y' THEN uses_record END) AS uses_record, COUNT(no) AS no, company FROM coupons WHERE company = '{$company}'";
						$use_coupons = mysqli_query($conn, $sql_a00) or die(mysqli_error($conn));
						$ar_total = mysqli_fetch_array($use_coupons);
					?>
					<div class="total_box">
						<span class="total_text">총 발급량</span>
						<span class="text"><?=number_format($ar_total['no'])?></span>
					</div>

					<div class="total_box">
						<span class="total_text">총 사용 쿠폰</span>
						<span class="text"><?=number_format($ar_total['uses_record'])?></span>
					</div>
					<div class="total_box">
						<span class="total_text">코드조회</span>
						<?php
							if($_SESSION['company'] === 'a001') {
						?>
						<div class="code_dox">
							<span class="code_text">KVIBE-HN-</span>
							<input class="code_input" type="text" name="code" autocomplete='off' value=<?php if (isset($_GET['code'])) {echo $_GET['code'];};?>>
						</div>
						<?php
							} else if($_SESSION['company'] === 'a002') {
						?>
						<div class="code_dox">
						<span class="code_text">KVIBE-YJ-</span>
							<input class="code_input" type="text" name="code" autocomplete='off' value=<?php if (isset($_GET['code'])) {echo $_GET['code'];};?>>
						</div>
						<?php
							} else if($_SESSION['company'] === 'a003') {
						?>
						<div class="code_dox">
						<span class="code_text">KVIBE-SN-'</span>
							<input class="code_input" type="text" name="code" autocomplete='off' value=<?php if (isset($_GET['code'])) {echo $_GET['code'];};?>>
						</div>
						<?php
							}
						?>
						<button class="total_but"><span>조회</span></button>
					</div>
				</div>
				<div class="coupon_select">
					<?php
						if (!isset($select)) {
					?>
					<select id="select" class="use_coupon" name="use_coupon">
						<option value="all">전체</option>
						<option value="Y">사용 쿠폰만 보기</option>
						<option value="N">미사용 쿠폰만 보기</option>
					</select>
					<?php
						} else {
					?>
					<select id="select" class="use_coupon" name="use_coupon">
						<option value="all">전체</option>
						<option value="Y"<?php if ($select == 'Y') {echo "selected='selected'";};?>>사용 쿠폰만 보기</option>
						<option value="N"<?php if ($select == 'N') {echo "selected='selected'";};?>>미사용 쿠폰만 보기</option>
					</select>
					<?php
						}
					?>
				</div>
			</form>
			<div class="table_box">
				<div class="num_box">
					<span class="num_text">NO</span>
				</div>
				<div class="only_num_box">
					<span class="only_num">고유번호</span>
				</div>
				<div class="published_date_box">
					<span class="published_date">발급날짜</span>
				</div>
				<div class="record_box">
					<span class="record">사용기록</span>
				</div>
				<div class="enrollment_box">
					<span class="enrollment">사용등록</span>
				</div>
				<?php
					if (isset($_GET['page'])) {
						$page = $_GET['page'];
					} else {
						$page = 1;
					}
					$total_record = mysqli_num_rows($result);
					$scale = 15;// 페이지에 보여질 수
					$block_ct = 10; //블럭에 보여질 페이지수

					$block_num = ceil($page/$block_ct);
					$block_start = (($block_num -1) * $block_ct) + 1;
					$block_end = $block_start + $block_ct - 1;

					$total_page = ceil($total_record / $scale);
					if ($block_end > $total_page) 
						$block_end = $total_page;
						$total_block = ceil($total_page / $block_ct);
						$start_num = ($page -1) * $scale;
					$sql1 = "SELECT * FROM coupons WHERE".$where." LIMIT {$start_num}, {$scale}";
					$result1 = mysqli_query($conn, $sql1) or die(mysqli_error($conn));
					$i = $total_record;
					while ($board = $result1->fetch_array()) {
						$sql2 = "SELECT * FROM coupons WHERE no = '{$board['no']}'";
						$result2 = mysqli_query($conn, $sql2) or die(mysqli_error($conn));
						$row = mysqli_fetch_array($result2);
						$i--;
						$addCount = 15*($page-1);
				?>
				<div class="user_coupon" name="category">
					<div class="user_no"><span class="user_noText"><?=($i-$addCount)+1?></span></div>
					<div class="user_code all"><span class="user_codeText"><?=$row['unique_number']?></span></div>
					<div class="user_date"><span class="user_dateText"><?=$row['issue_date']?></span></div>
					<div class="user_use"><span class="user_useText"><?=$row['uses_record']?></span></div>
					<?php
						if($row['uses_record'] == "Y") {
					?>
					<div class="user_button"><span class="user_buttonText"></span></div>
					<?php
						} else {
					?>
					<div class="user_button"><button class="user_buttonBox" type="submit"><span class="user_buttonText">등록</span></button></div>
					<?php
						}
					?>
				</div>

				<div class="main_popup">
					<div class="insert_popup">
						<form action="./couponUpdate.php" method="POST">
							<input style="visibility: hidden; width: 0px;height: 0px;" type="text" name="page" value="<?=$page?>"/>
							<input style="visibility: hidden; width: 0px;height: 0px;" type="text" name="codes" value="<?=$code?>"/>
							<input style="visibility: hidden; width: 0px;height: 0px;" type="text" name="select" value="<?=$select?>"/>
							<div class="insert_box">
								<span class="insert_text">쿠폰 사용이 등록되었습니다.</span>
							</div>
							<div class="unique_number">
								<input class="unique_number_text" name ="code" type="text" value="<?=$row['unique_number']?>" readonly/>
							</div>
							<div class="btn_box">
								<button class="cancel_btn" type="button"><span>취소</span></button>
								<button class="ok_btn"><span>확인</span></button>
							</div>
						</form>
					</div>
				</div>
	
				<?php
				}
				mysqli_close($conn);
				?>
			</div>
			<div class="page_box">
				<?php
					if ($page <= 1) {
						echo "<span>&nbsp;</span>";
					}else if ($page <= 1 && isset($_GET['code']) || isset($_GET['use_coupon'])){
						echo "<span class='next'><a href='main.php?page=1&code=$code&use_coupon=$select'> << </a></span>";
					} else {
						echo "<span class='back'><a href='main.php?page=1'> << </a></span>";
					}
					if ($page <= 1) {

					} else if ($page <= 1 && isset($_GET['code']) || isset($_GET['use_coupon'])){
						$back = $page - 1;
						echo "<span class='next'><a href='main.php?page=$back&code=$code&use_coupon=$select'> < </a></span>";
					} else {
						$back = $page - 1;
						echo "<span class='back'><a href='main.php?page=$back'> < </a></span>";
					}
					for ($i = $block_start; $i <= $block_end; $i++) {
						if ($page == $i) {
							echo "<span class='i'>$i</span>";
						} else if (isset($_GET['code']) && isset($_GET['use_coupon'])) {
							echo "<span class='i'><a href='main.php?page=$i&code=$code&use_coupon=$select'>$i</a></span>";
						} else {
							echo "<span class='i'><a href='main.php?page=$i'>$i</a></span>";
						}
					}
					if ($page >= $total_page) {

					} else if ($page > $total_page && isset($_GET['code']) || isset($_GET['use_coupon'])){
						$next = $page + 1;
						echo "<span class='next'><a href='main.php?page=$next&code=$code&use_coupon=$select'> > </a></span>";
					} else {
						$next = $page + 1;
						echo "<span class='next'><a href='main.php?page=$next'> > </a></span>";
					}

					if ($page >= $total_page) {
						echo "<span>&nbsp</span>";
					} else if ($page > $total_page && isset($_GET['code']) || isset($_GET['use_coupon'])){
						echo "<span class='next'><a href='main.php?page=$total_page&code=$code&use_coupon=$select'> >> </a></span>"; 
					} else {
						echo "<span class='next'><a href='main.php?page=$total_page'> >> </a></span>";
					}
				?>
			</div>
		</div>
	</div>
</body>
</html>