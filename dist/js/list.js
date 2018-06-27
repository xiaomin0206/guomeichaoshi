"use strict";

$(function () {
	var classid = location.search.split("=")[1];
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url, { classID: classid }, function (data) {
		var str = "";
		for (var i = 0; i < data.length; i++) {
			str += "<li class=\"product-1\" data-id=\"" + data[i].goodsID + "\">\n\t\t\t\t\t\t\t\t\t<a href=\"xiangqing.html?id=" + data[i].goodsID + "\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"" + data[i].goodsListImg + "\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t    \uFFE5<em>" + data[i].price + "</em>\n\t\t\t\t\t\t\t\t</span>\t\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<a href=\"xiangqing.html?id=" + data[i].goodsID + "\">" + data[i].goodsName + "</a>\n\t\t\t\t\t\t\t\t</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</li>";
		}
		$(".product ul").append(str);
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
	});
});