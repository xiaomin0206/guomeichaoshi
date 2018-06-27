$(function(){
	var classid = location.search.split("=")[1];
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url,{classID:classid},function(data){
		var str=""
		for(var i=0;i<data.length;i++){
			str+=`<li class="product-1" data-id="${data[i].goodsID}">
									<a href="xiangqing.html?id=${data[i].goodsID}">
										<img src="${data[i].goodsListImg}" />
									</a>
								<span>
								    ￥<em>${data[i].price}</em>
								</span>	
								<p>
									<a href="xiangqing.html?id=${data[i].goodsID}">${data[i].goodsName}</a>
								</p>														
								</li>`
		}
		$(".product ul").append(str)
//		var xinxi=$(".product-1");
//		for(var j=0;j<xinxi.length;j++){
//			xinxi[j].index=j;
//			xinxi[j].onclick=function(){
////				console.log(this.index);
////				console.log($(this).attr("data-id"))
////				var obj=$(this).attr("data-id");
////				console.log(obj);
//				setCookie("cart",$(this).attr("data-id"),7)
//				
//			}
//	}
	})
})
