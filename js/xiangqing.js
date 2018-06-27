	var obj=JSON.parse(getCookie("cart"));
//	console.log(obj);
$(function(){
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?"
	$.getJSON(url,function(data){
		console.log(data)
		var str=""
		var str1=""
		for(var i=0;i<data.length;i++){
			if(data[i].goodsID==obj){
				console.log(data[i])
				str=`<div id="zoomBox">
						<div id="midArea">
							<img src="${data[i].goodsListImg}"/>
							<div id="zoom"></div>
						</div>
						<div id="bigArea">
							<img class="bigtu" src="${data[i].goodsListImg}"/>
						</div>
					</div>`
//					
				
					str1=`<p>${data[i].goodsName}</p>
					<span>国美价：￥<em>${data[i].price}</em></span>
					<div class="shuliang">
						<input type="" name="" id="" value="" />
						<a href="">+</a>
						<a href="">-</a>
					</div>
					<input type="button" name="" id="" value="加入购物车" />`
				
			}
		}
		$(".fangdajing-left").append(str)
		$(".fangdajing-right").append(str1)
})
})	
			var oZoomBox = document.getElementById("zoomBox"),
				oMidArea = document.getElementById("midArea"),
				oZoom = document.getElementById("zoom"),
				oMidImg = oMidArea.children[0],
				oBigArea = document.getElementById("bigArea"),
				
				oBigImg = oBigArea.children[0];
				var oList=document.getElementById("list");
				var Img=oList.children;
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
				var x = evt.clientX - oZoomBox.offsetLeft;
				var y = evt.clientY - oZoomBox.offsetTop;
				
				
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
//			for(var j=0;j<Img.length;j++){
//				(function(j){
//					Img[j].onmouseover=function(){
//						oMidImg.src="img/0"+(j+2)+".png";
//						oBigImg.src="img/0"+(j+2)+".png";
//				}
//				})(j);
//			}

