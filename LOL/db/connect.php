<?php
    //这个接口所做的事情就是将连接数据库的代码封装起来 以后只要是要连接数据库调用这个接口就可以了 要注意更改 数据库的名字
    $_servername = 'localhost';
    $_username = 'root';
    $_password = '';
    $_dbname = 'LOL';

    // 链接mysql
    $conn = new mysqli($_servername, $_username, $_password, $_dbname);

    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
?>