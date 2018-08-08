<?php 
header("Content-type: text/html; charset=utf-8");
    $phonenumb=$_GET["phoneId"];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		die('Could not connect:'.mysql_error());
	}else{
		mysql_select_db("kaola",$con);
        $sqlstr="select *from reg where phonenum='".$phonenumb."'";
		$result=mysql_query($sqlstr,$con);
		$rowCount=mysql_num_rows($result);
		mysql_close($con);
		if($rowCount>=1){
			echo"1";
		}else{
			echo"0";
		}
	}

 ?>