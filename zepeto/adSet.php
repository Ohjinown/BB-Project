<?php
include_once $_SERVER['DOCUMENT_ROOT']."/zepeto/db/db.php";
session_start();
session_regenerate_id();
if (!isset($_SESSION['company'])) {
	echo "<script>alert('잘못된 접근 입니다.'); location.href = './index.php';</script>";
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
	<link rel="stylesheet" href="./css/admin.css?aa">
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="./js/script.js?a"></script>
	<title>마스터페이지</title>
</head>
<script type="text/javascript">

</script>
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
				if (isset($_GET['code']) && isset($_GET['bis']) && isset($_GET['use_coupon'])) {
					$code = $_GET['code'];
					$bis =  $_GET['bis'];
					$select = $_GET['use_coupon'];
					if ($select == 'all' && $bis == 'all') {
						$where = " unique_number LIKE '%{$code}%' AND company IN ('a001', 'a002', 'a003') AND uses_record IN('Y', 'N') ORDER BY no DESC";
					} else if ($bis != 'all' && $select == 'all') {
						$where = " unique_number LIKE '%{$code}%' AND company = '{$bis}' AND uses_record IN('Y', 'N') ORDER BY no DESC";
					} else if ($bis == 'all' && $select != 'all') {
						$where = " unique_number LIKE '%{$code}%' AND company IN ('a001', 'a002', 'a003') AND uses_record = '{$select}' ORDER BY no DESC";
					} else {
						$where = " unique_number LIKE '%{$code}%' AND company = '{$bis}' AND uses_record = '{$select}' ORDER BY no DESC";
					} 
				} else {
					$where = " company in('a001', 'a002', 'a003') ORDER BY no DESC";
				}

				$sql = "SELECT * FROM coupons WHERE".$where;
				$result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
				$row = mysqli_fetch_array($result);
			?>
			<div class="introduce_box">
				<div class="hello_box">
					<span class="hello">안녕하세요,</span>
				</div>
				<div class="introduce_box1">
					<span class="introduce_text">한국관광공사</span>
					<span class="introduce_text1">님,</span>
				</div>
			</div>
			<?php
				$sql_add = "SELECT COUNT(CASE WHEN uses_record = 'Y' THEN 1 END) as Y ,COUNT(uses_record) uses_record FROM coupons WHERE company in('a001', 'a002', 'a003')";
				$result_add = mysqli_query($conn, $sql_add) or die(mysqli_error($conn));
				$row_add = mysqli_fetch_array($result_add);
			?>
			<form class="form" action="" method="GET">
				<div class="coupon_box">
				<span class="logout" onclick="location.href='./adOut.php'">로그아웃</span>
					<div class="total_box">
						<span class="total_text">총 발급량</span>
						<span class="text"><?=number_format($row_add['uses_record'])?></span>
					</div>
					<div class="total_box">
						<span class="total_text">총 사용 쿠폰</span>
						<span class="text"><?=number_format($row_add['Y'])?></span>
					</div>
					<div class="coupon_table_box">
						<div class="coupon_table1"><span></span></div>
						<div class="coupon_table1"><span class="coupon1">쿠폰발급량</span></div>
						<div class="coupon_table1"><span class="coupon1">쿠폰사용량</span></div>
						<?php
						$sql_company = "SELECT DISTINCT (company) AS company,  COUNT(uses_record) AS uses_record, COUNT(CASE WHEN uses_record = 'Y' THEN 1 END) as Y FROM coupons GROUP BY company";
						$db_result = mysqli_query($conn, $sql_company) or die(mysqli_error($conn));
							foreach ($db_result as $key => $companys) {
								if ($companys['company'] == 'a001') {
									$companys['company']= '황남제빵소';
								} else if ($companys['company'] == 'a002') {
									$companys['company']= '양지다방';
								} else if ($companys['company'] == 'a003') {
									$companys['company']= '시나셀프사진관';
								}
						?>
						<div class="coupon_table2"><span class="coupon1"><?=$companys['company']?></span></div>
						<div class="coupon_table2"><span class="coupon1"><?=number_format($companys['uses_record'])?></span></div>
						<div class="coupon_table2"><span class="coupon1"><?=number_format($companys['Y'])?></span></div>
						<?php
							}
						?>
					</div>
					<div class="total_box">
						<span class="total_text">코드조회</span>
						<div class="code_dox">
							<span class="code_text">KVIBE-</span>
							<input class="code_input" type="text" name="code" autocomplete='off' value=<?php if (isset($_GET['code'])) {echo $_GET['code'];};?>>
						</div>
						<button class="total_but"><span>조회</span></button>
					</div>
				</div>
				<div class="conpon_select">
					<?php
						if (!isset($_GET['bis']) && !isset($_GET['use_coupon'])) {
					?>
					<select class="use_coupons" name="bis">
						<option value="all">전체</option>
						<option value="a001">황남제빵소</option>
						<option value="a002">양지다방</option>
						<option value="a003">시나셀프사진관</option>
					</select>
					<select class="use_coupons1" name="use_coupon" id="">
						<option value="all">전체</option>
						<option value="Y">사용 쿠폰만 보기</option>
						<option value="N">미사용 쿠폰만 보기</option>
					</select>
					<?php
						} else {
					?>
					<select class="use_coupons" name="bis">
						<option value="all" <?php if ($bis == 'all') {echo "selected='selected'";};?>>전체</option>
						<option value="a001" <?php if ($bis == 'a001') {echo "selected='selected'";};?>>황남제빵소</option>
						<option value="a002" <?php if ($bis == 'a002') {echo "selected='selected'";};?>>양지다방</option>
						<option value="a003" <?php if ($bis == 'a003') {echo "selected='selected'";};?>>시나셀프사진관</option>
					</select>
					<select class="use_coupons1" name="use_coupon" id="">
						<option value="all">전체</option>
						<option value="Y" <?php if ($select == 'Y') {echo "selected='selected'";};?>>사용 쿠폰만 보기</option>
						<option value="N" <?php if ($select == 'N') {echo "selected='selected'";};?>>미사용 쿠폰만 보기</option>
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
					<span class="only_num">업체</span>
				</div>
				<div class="published_date_box">
					<span class="published_date">고유번호</span>
				</div>
				<div class="record_box">
					<span class="record">발급날짜</span>
				</div>
				<div class="enrollment_box">
					<span class="enrollment">사용기록</span>
				</div>
				<?php
					if (isset($_GET['page'])) {
						$page = $_GET['page'];
					} else {
						$page = 1;
					}
					$total_record = mysqli_num_rows($result);

					$scale = 8;
					$block_ct = 10; //블럭에 보여질 페이지수

					$block_num = ceil($page/$block_ct);
					$block_start = (($block_num -1) * $block_ct) + 1;
					$block_end = $block_start + $block_ct - 1;

					$total_page = ceil($total_record / $scale);
					if ($block_end > $total_page) {
						$block_end = $total_page;
					}
					$total_block = ceil($total_page / $block_ct);
					$start_num = ($page -1) * $scale;
					
					$sql1 = "SELECT * FROM coupons WHERE".$where." LIMIT {$start_num}, {$scale}";
					$result1 = mysqli_query($conn, $sql1) or die(mysqli_error($conn));
					$i = $total_record;
					while ($board = $result1->fetch_array()) {
						$sql2 = "SELECT * FROM coupons WHERE no = '{$board['no']}'";
						$result2 = mysqli_query($conn, $sql2) or die(mysqli_error($conn));
						$row = mysqli_fetch_array($result2);
							if ($row['company'] === 'a001') {
								$row['company'] = '황남대빵소';
							} else if ($row['company'] === 'a002') {
								$row['company'] = '양지다방';
							} else if ($row['company'] === 'a003') {
								$row['company'] = '시나셀프사진관';
							}
						$i--;
						$addCount = 8*($page-1);
				?>
				<div class="user_coupon">
					<div class="user_no"><span class="user_noText"><?=($i-$addCount)+1?></span></div>
					<div class="user_code"><span class="user_codeText"><?=$row['company']?></span></div>
					<div class="user_date"><span class="user_dateText"><?=$row['unique_number']?></span></div>
					<div class="user_use"><span class="user_useText"><?=$row['issue_date']?></span></div>
					<div class="user_history"><span class="user_historyText"><?=$row['uses_record']?></span></div>
				</div>
				<?php
					}
					mysqli_close($conn);
				?>
			</div>

			<div class="page_box" id="paging">
				<?php
					if ($page <= 1) {
						echo "<span>&nbsp;</span>";
					}else if ($page <= 1 && isset($_GET['code']) || isset($_GET['use_coupon']) || isset($_GET['bis'])){
						echo "<span class='next'><a href='adSet.php?page=1&code=$code&bis=$bis&use_coupon=$select'> << </a></span>";
					} else {
						echo "<span class='back'><a href='adSet.php?page=1'> << </a></span>";
					}
					if ($page <= 1) {

					} else if ($page <= 1 && isset($_GET['code']) || isset($_GET['use_coupon']) || isset($_GET['bis'])){
						$back = $page - 1;
						echo "<span class='next'><a href='adSet.php?page=$back&code=$code&bis=$bis&use_coupon=$select'> < </a></span>";
					} else {
						$back = $page - 1;
						echo "<span class='back'><a href='adSet.php?page=$back'> < </a></span>";
					}
					for ($i = $block_start; $i <= $block_end; $i++) {
						if ($page == $i) {
							echo "<span class='i'>$i</span>";
						} else if (isset($_GET['code']) && isset($_GET['use_coupon']) || isset($_GET['bis'])) {
							echo "<span class='i'><a href='adSet.php?page=$i&code=$code&bis=$bis&use_coupon=$select'>$i</a></span>";
						} else {
							echo "<span class='i'><a href='adSet.php?page=$i'>$i</a></span>";
						}
					}
					if ($page >= $total_page) {

					} else if ($page > $total_page && isset($_GET['code']) || isset($_GET['use_coupon']) || isset($_GET['bis'])){
						$next = $page + 1;
						echo "<span class='next'><a href='adSet.php?page=$next&code=$code&bis=$bis&use_coupon=$select'> > </a></span>";
					} else {
						$next = $page + 1;
						echo "<span class='next'><a href='adSet.php?page=$next'> > </a></span>";
					}

					if ($page >= $total_page) {
						echo "<span>&nbsp</span>";
					} else if ($page > $total_page && isset($_GET['code']) || isset($_GET['use_coupon']) || isset($_GET['bis'])){
						echo "<span class='next'><a href='adSet.php?page=$total_page&code=$code&bis=$bis&use_coupon=$select'> >> </a></span>"; 
					} else {
						echo "<span class='next'><a href='adSet.php?page=$total_page'> >> </a></span>";
					}
				?>
			</div>
		</div>
	</div>
</body>
</html>