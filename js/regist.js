$(function(){
//	var flag = false;
	
	$("#username").blur(function(){
		var val=$("#username").val();
		var reg=/\w{4,20}/g;
		if(reg.test(val)==false){
			$("#tishi").css("display","block")
		}else{
			$("#tishi").css("display","none")
		}
	})
	
	$("#mima").blur(function(){
		var val1=$("#mima").val();
		var reg1=/^[\x21-\x7E]{6,20}$/g;
		if(reg1.test(val1)==false){
			$("#tishi1").css("display","block")
		}else{
			$("#tishi1").css("display","none")
		}
	})
	$("#mima1").blur(function(){
		if($("#mima1").val()!=$("#mima").val()){
			$("#tishi2").css("display","block")
		}else{
			$("#tishi2").css("display","none")
		}
		
	})
	$("#phone").blur(function(){
		var val1=$("#phone").val();
		var reg2=/^[1][3,5,8][0-9]{9}$/g;
		if(reg2.test(val1)==false){
			$("#tishi3").css("display","block")
		}else{
			$("#tishi3").css("display","none")
		}
		
	})
	
 	$("#zhuce").click(function(){
 		var userName = $("#username").val();
 		var passWord = $("#mima").val();
 		
 		$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					async:true,
					data:{"status":"register","userID":userName,"password":passWord},
					success:function(data){
						console.log(data);
						if(data==0){
							alert("该用户名已被注册")
						}else if(data==2){
							alert("数据库报错")
						}else if(data==1){
							alert("注册成功")
							location.assign("login.html");
						}
						
					}
				})
 	})
	
})
