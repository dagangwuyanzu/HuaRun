<?php
    //这个接口做的事情是当我们浏览页面时  点击了某一个商品的时候 前端就会传那个商品的id值到这个接口  然后这个接口就连接数据库 找到与那个id相同的商品 并且返回给前端让其渲染到页面上
 
    require "../db/connect.php";
    require "../utils/tools.php";

    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if($id){
        $sql = "select * from test where id=$id";
    
        $result = $conn->query($sql);

        if($result->num_rows>0){
            $row = $result->fetch_assoc();
            
            echo formatData(200,$row);
        }else{
            echo formatData(400);
        }
    }else{
        echo formatData(400);
    }

?>