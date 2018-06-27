"use strict";

var obj = JSON.parse(getCookie("cart"));
//	console.log(obj);
$(function () {
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url, function (data) {
		console.log(data);
		var str = "";
		var str1 = "";
		for (var i = 0; i < data.length; i++) {
			if (data[i].goodsID == obj) {
				console.log(data[i]);
				str = "<div id=\"zoomBox\">\n\t\t\t\t\t\t<div id=\"midArea\">\n\t\t\t\t\t\t\t<img src=\"" + data[i].goodsListImg + "\"/>\n\t\t\t\t\t\t\t<div id=\"zoom\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"bigArea\">\n\t\t\t\t\t\t\t<img class=\"bigtu\" src=\"" + data[i].goodsListImg + "\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>";
				//					

				str1 = "<p>" + data[i].goodsName + "</p>\n\t\t\t\t\t<span>\u56FD\u7F8E\u4EF7\uFF1A\uFFE5<em>" + data[i].price + "</em></span>\n\t\t\t\t\t<div class=\"shuliang\">\n\t\t\t\t\t\t<input type=\"\" name=\"\" id=\"\" value=\"\" />\n\t\t\t\t\t\t<a href=\"\">+</a>\n\t\t\t\t\t\t<a href=\"\">-</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"button\" name=\"\" id=\"\" value=\"\u52A0\u5165\u8D2D\u7269\u8F66\" />";
			}
		}
		$(".fangdajing-left").append(str);
		$(".fangdajing-right").append(str1);
	});
});
var oZoomBox = document.getElementById("zoomBox"),
    oMidArea = document.getElementById("midArea"),
    oZoom = document.getElementById("zoom"),
    oMidImg = oMidArea.children[0],
    oBigArea = document.getElementById("bigArea"),
    oBigImg = oBigArea.children[0];
var oList = document.getElementById("list");
var Img = oList.children;
oMidArea.onmouseover = function () {
	oBigArea.style.display = "block";
	oZoom.style.display = "block";
};
oMidArea.onmouseout = function () {
	oBigArea.style.display = "none";
	oZoom.style.display = "none";
};

oMidArea.onmousemove = function (e) {
	var evt = e || event;
	var x = evt.clientX - oZoomBox.offsetLeft;
	var y = evt.clientY - oZoomBox.offsetTop;

	var _left = x - oZoom.offsetWidth / 2;
	var _top = y - oZoom.offsetHeight / 2;

	if (_left <= 0) {
		_left = 0;
	}
	if (_left >= oMidArea.offsetWidth - oZoom.offsetWidth) {
		_left = oMidArea.offsetWidth - oZoom.offsetWidth;
	}

	if (_top <= 0) {
		_top = 0;
	}

	if (_top >= oMidArea.offsetHeight - oZoom.offsetHeight) {
		_top = oMidArea.offsetHeight - oZoom.offsetHeight;
	}

	oZoom.style.left = _left + "px";
	oZoom.style.top = _top + "px";

	oBigImg.style.left = -oZoom.offsetLeft / oMidArea.offsetWidth * oBigImg.offsetWidth + "px";
	oBigImg.style.top = -oZoom.offsetTop / oMidArea.offsetHeight * oBigImg.offsetHeight + "px";
};
//			for(var j=0;j<Img.length;j++){
//				(function(j){
//					Img[j].onmouseover=function(){
//						oMidImg.src="img/0"+(j+2)+".png";
//						oBigImg.src="img/0"+(j+2)+".png";
//				}
//				})(j);
//			}