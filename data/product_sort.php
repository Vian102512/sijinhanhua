<?php
require_once("init.php");
$output = [];
$sql = "SELECT href,pid,details,pic,price FROM product_sort";
$result = mysqli_query($conn, $sql);
$output['sortItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);