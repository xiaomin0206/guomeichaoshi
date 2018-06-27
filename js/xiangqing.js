	var obj=JSON.parse(getCookie("cart"));
//	console.log(obj);
$(function(){
	 			
	var goodsid = location.search.split("=")[1];
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?"
	$.getJSON(url,{goodsID:goodsid},function(data){
//		data = JSON.parse(data);
		var xiaotu=JSON.parse(data[0].imgsUrl)
//		console.log(xiaotu)
//		console.log(JSON.parse(data[0].imgsUrl))
		var str=""
		var str1=""
		str=`<div id="zoomBox">
						<div id="midArea">
							<img src="${data[0].goodsListImg}"/>
							<div id="zoom"></div>
						</div>
						<div id="bigArea">
							<img class="bigtu" src="${data[0].goodsListImg}"/>
						</div>
					</div>
					<div id="list">
						<img src="${xiaotu[0]}">
						<img src="${xiaotu[1]}">
						<img src="${xiaotu[2]}">
					</div>`

		str1=`<p>${data[0].goodsName}</p>
					<span>国美价：￥<em>${data[0].price}</em></span>
					<div class="shuliang">
						<input type="" name="" id="shuliang1" value="1" />
						<a href="###" class="jia">+</a>
						<a href="###" class="jian">-</a>
					</div>
					<input type="button" name="" id="car" value="加入购物车" />`

					$(".fangdajing-left").append(str)
					$(".fangdajing-right").append(str1)
					$("#car").click(function(){
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
								console.log(data)
								if(data==0){
									alert("添加失败")
								}
								if(data == 1){
									alert("添加成功")
								}
							})
						})
})
	$("#list").find("img").on("click",function(){
		console.log($(this))
		var index=$(this).index()
		console.log(index)
		$("#midArea").src=$(this).src
	})
 	
		
})	
window.onload=function(){
				var oZoomBox = document.getElementById("zoomBox");
				var oMidArea = document.getElementById("midArea");
				var oZoom = document.getElementById("zoom");
				var oMidImg = oMidArea.children[0];
				var oBigArea = document.getElementById("bigArea");
				var oBigImg = oBigArea.children[0];
//				var oList=document.getElementById("list");
//				var Img=oList.children;
			oMidArea.onmouseover = function(){
				oBigArea.style.display = "block";
				oZoom.style.display = "block";
			}
			oMidArea.onmouseout = function(){
				oBigArea.style.display = "none";
				oZoom.style.display = "none";
			}
			
			oMidArea.onmousemove = function(e){
				var evt = e || event;
				var x = evt.pageX - oZoomBox.offsetLeft;
				var y = evt.pageY - oZoomBox.offsetTop;
				
				
				var _left = x - oZoom.offsetWidth/2;
				var _top = y - oZoom.offsetHeight/2;
				
				
				if(_left <= 0){
					_left = 0;
				}
				if(_left >= oMidArea.offsetWidth - oZoom.offsetWidth){
					_left = oMidArea.offsetWidth - oZoom.offsetWidth;
				}
				
				if(_top<=0){
					_top = 0;
				}
				
				if(_top >= oMidArea.offsetHeight - oZoom.offsetHeight){
					_top = oMidArea.offsetHeight - oZoom.offsetHeight;
				}
				
				
				oZoom.style.left = _left + "px";
				oZoom.style.top = _top + "px";

				oBigImg.style.left = -oZoom.offsetLeft/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
				oBigImg.style.top = -oZoom.offsetTop/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
				
				
			}
			var int=$("#shuliang1");
		 	var num=1;
		 	$(".jia").click(function(){
		 		num++;
		 		int.val(num);
		 		
		 	})
		 	$(".jian").click(function(){
		 		num--;
		 		if(num<=1){
		 			num=1;
		 		}
		 		int.val(num);
		 		
		 	})
//			for(var j=0;j<Img.length;j++){
//				(function(j){
//					Img[j].onmouseover=function(){
//						oMidImg.src="img/m0"+(j+2)+".jpg";
//						oBigImg.src="img/m0"+(j+2)+".jpg";
//				}
//				})(j);
//			}
}
