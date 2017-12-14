<?php
require_once("./init.php");
$output = [];
$sql = "SELECT cid,img,href FROM carousel";
$result = mysqli_query($conn, $sql);
$output['carouselItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);