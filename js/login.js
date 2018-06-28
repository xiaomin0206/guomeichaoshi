$(function(){
	$(".denglu1").find("li").click(function(){
		var _index=$(this).index();
//		console.log(_index);
		$(".content12").eq(_index).css("display","block").siblings().css("display","none")
	})

	
	$(".login").click(function(){
		var userName = $("#user").val();
 		var passWord = $("#psd").val();
 		$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					async:true,
					data:{"status":"login","userID":userName,"password":passWord},
					success:function(data){
						data=JSON.parse(data);
						console.log(data);
						if(data==0){
							alert("用户名不存在")
						}else if(data==2){
							alert("用户名密码不符")
						}else{
							$.cookie("username",data.userID,{expires:7,path:"/"});
							location.assign("index.html");
						}
						
					}
				})
 	})
})
