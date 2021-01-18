<?php
require "connect.php";
require "tools.php";

$sql = "select * from house";
$result = $conn->query($sql);
if($result->num_rows>0){
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    echo formatData(200,$rows);
}else{
    echo formatData(400);
}
?>