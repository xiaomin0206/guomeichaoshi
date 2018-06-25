"use strict";

$(function () {
	$("#username").blur(function () {
		var reg = /\w{4,20}/g;
		if (reg.test($(this).val()) == false) {
			alert("用户名只能由汉字、字母、数字及“-”、“_”组成");
		}
	});
	$("#username").change(function () {
		alert("用户名只能由汉字、字母、数字及“-”、“_”组成");
	});
	$("#mima").blur(function () {
		var reg = /^[\x21-\x7E]{6,20}$/g;
		if (reg.test($(this).val()) == false) {
			alert("6-20个字符，字母，数字与符号两种以上组成");
		}
	});
});

//	$.get(" http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"register","userID":"用户名",""}function(data){
//					console.log(data);
//				})