<?php

    // 链接数据库
    // include '../db/connect.php';
    require('../db/connect.php');

    // 接收前端传来的数据
    $username = $_POST['username'];
    $password = $_POST['password'];
    $age = $_POST['age'];
    $Gender = $_POST['Gender'];
    // $password = $_POST['password'];

    // 编写sql语句
    $sql = "insert into biaodan(name,password,Gender,age) values('$username','$password','$Gender', $age)";
    // echo $sql; 
    $result = $conn->query($sql);

    if($result){
        echo 'success';
    }else{
        echo 'fail';
    }

    //释放查询结果集，避免资源浪费
    // $result->close();
    // 关闭数据链接，避免资源占用
    $conn->close();

?>