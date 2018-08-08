<?php
header("Content-type","text/html;charset=utf-8");
    //1、获取数据
   $username = $_POST['username'];
   $userpass = $_POST['userpass'];
   //处理（连接数据库进行查询）
   //连接数据库
   $conn=mysql_connect("localhost","root","root");
   //选择数据库
   mysql_select_db("kaola",$conn);
   //执行SQL语句
   $sqlstr="select *from reglog where userphone='".$username."' and userpass='".$userpass."'";
   
   $result=mysql_query($sqlstr,$conn);
   if(mysql_num_rows($result)>0){
   	$rows=1;
   }else{
   	$rows=0;
   }
   //关闭数据库
   mysql_close($conn);
   //响应
   echo $rows;

?>