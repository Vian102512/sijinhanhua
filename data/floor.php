<?php
require_once("init.php");
$output = [];
$sql = "SELECT pid,details,pic,price,href FROM product_floor";
$result = mysqli_query($conn, $sql);
$output['floorItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);