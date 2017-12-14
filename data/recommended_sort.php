<?php
require_once("init.php");
$output = [];
$sql = "SELECT href,pid,details,pic,price FROM recommended_sort";
$result = mysqli_query($conn, $sql);
$output['recommendedItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);