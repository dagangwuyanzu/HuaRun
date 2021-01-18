<?php
      require('../db/connect.php');

      $username = $_GET['username'];
      $password = $_GET['password'];
      $sql = "select name from biaodan where name='$username'";

      $_yz = "select password from biaodan where name='$username'";
      $result = $conn->query($sql);
      
      if($result->num_rows >0){
          $_result = $conn->query($_yz);
          $row = $_result->fetch_all(MYSQLI_ASSOC);
          $row = json_encode($row,false);
          echo $row;
      }else{
          echo json_encode('wu',false);;
      }
      //释放查询结果集，避免资源浪费
      $result->close();
      // 关闭数据链接，避免资源占用
      $conn->close();
?>