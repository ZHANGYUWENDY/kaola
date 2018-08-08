//添加cookie
//参数：
// 键，值，保质期（单位：天）
//返回值：无

function saveCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	//var str = key+"="+value+";expires="+d.toGMTString();;
	//alert(str);
	//document.cookie = str //没有处理中文乱码
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();//用escape进行中文编码
	
}


//获取cookie
//参数：键
//返回值：值；

function getCookie(key){
	
	//var str = document.cookie;//没有中文的解码
	var str = unescape(document.cookie);//进行中文的解码
	
	//1、把字符串用“; ”分割成数组；
	var arr = str.split("; ");
	
	var value="";
	//2、循环数组，在数组元素中看看哪个元素是以字符串 key+"="开始;
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			value = arr[i].substring((key+"=").length);
			break;
		}
	}
	return value;	
}

//删除cookie：要删除哪个cookie，就把哪个cookie的失效日期改成过去的时间

//参数：键
//返回值：无

function removeCookie(key){
	//1、获取昨天的时间点
	var d = new Date();
	d.setDate(d.getDate()-1);
	
	//2、添加cookie，键就是要删除的键，值无所谓（因为我们要删除它），失效日期是昨天。
	document.cookie = key+"=a;expires="+d.toGMTString();
}
/*
username=hetuantuan    2018-5-17
username=a             2018-5-9
*/

/*
function removeCookie(key){
	saveCookie(key,"a",-1);
}
*/