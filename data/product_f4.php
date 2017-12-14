<?php
require_once("./init.php");
$output = [];
$sql = "SELECT href,pid,details,pic,price FROM product_f4";
$result = mysqli_query($conn, $sql);
$output['f4Items'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);