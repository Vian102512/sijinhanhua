<?php
require_once("init.php");
$output = [];
$sql = "SELECT href,pid,details,pic FROM product_carrousel";
$result = mysqli_query($conn, $sql);
$output['pro_Items'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);