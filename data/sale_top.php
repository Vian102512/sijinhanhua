<?php
require_once("./init.php");
$output = [];
$sql = "SELECT pid,title,details,price,img,href,buy FROM sale_top";
$result = mysqli_query($conn, $sql);
$output['saleItems'] = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($output);