<?php
// require "../db/connect.php";
// require "../utils/tools.php";
// $sql = "select * from test";
// $result = $conn->query($sql);
// $rows = $result->fetch_all(MYSQLI_ASSOC);
// echo json_encode($rows, JSON_UNESCAPED_UNICODE);





require "../db/connect.php";
require "../utils/tools.php";
$page = isset($_GET['page']) ? $_GET['page']:1;
$size = isset($_GET['size']) ? $_GET['size']:12;
$index = ($page-1)*$size;
$sql = "select * from test limit $index,$size";
$result = $conn->query($sql);
if($result->num_rows>0){
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    echo formatData(200,$rows);
}else{
    echo formatData(400);
}
?>