"use strict";

var obj = JSON.parse(getCookie("cart"));
//	console.log(obj);
$(function () {

	var goodsid = location.search.split("=")[1];
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url, { goodsID: goodsid }, function (data) {
		//		data = JSON.parse(data);

		var xiaotu = JSON.parse(data[0].imgsUrl);
		var str = "";
		var str1 = "";
		var str2 = "";
		str = "<div id=\"zoomBox\">\n\t\t\t\t\t\t<div id=\"midArea\">\n\t\t\t\t\t\t\t<img src=\"" + data[0].goodsListImg + "\"/>\n\t\t\t\t\t\t\t<div id=\"zoom\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"bigArea\">\n\t\t\t\t\t\t\t<img class=\"bigtu\" src=\"" + data[0].goodsListImg + "\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>";
		$(".fangdajing-left").append(str);
		$.each(xiaotu, function (index, item) {
			str2 += "<img src=\"" + item + "\">";
		});
		$("#list").append(str2);

		str1 = "<p>" + data[0].goodsName + "</p>\n\t\t\t\t\t<span>\u56FD\u7F8E\u4EF7\uFF1A\uFFE5<em>" + data[0].price + "</em></span>\n\t\t\t\t\t<div class=\"shuliang\">\n\t\t\t\t\t\t<input type=\"\" name=\"\" id=\"shuliang1\" value=\"1\" />\n\t\t\t\t\t\t<a href=\"###\" class=\"jia\">+</a>\n\t\t\t\t\t\t<a href=\"###\" class=\"jian\">-</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"button\" name=\"\" id=\"car\" value=\"\u52A0\u5165\u8D2D\u7269\u8F66\" />";

		$(".fangdajing-right").append(str1);
		$("#car").click(function () {
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php", { userID: $.cookie("username"), goodsID: data[0].goodsID, number: $("#shuliang1").val() }, function (data) {
				console.log(data);
				if (data == 0) {
					alert("添加失败");
				}
				if (data == 1) {
					location.assign("shopping.html");
				}
			});
		});
		$("#list img").on("mouseover", function () {
			var src1 = $(this)[0].src;
			$("#midArea img")[0].src = src1;
			$("#bigArea img")[0].src = src1;
		});
		//	$("#car").click(function(){
		//	var value12=$("#shuliang1").val()
		//	console.log(value12)
		////	$(".cart11").val(value12)
		//})
	});
});
window.onload = function () {
	var oZoomBox = document.getElementById("zoomBox");
	var oMidArea = document.getElementById("midArea");
	var oZoom = document.getElementById("zoom");
	var oMidImg = oMidArea.children[0];
	var oBigArea = document.getElementById("bigArea");
	var oBigImg = oBigArea.children[0];
	//				var oList=document.getElementById("list");
	//				var Img=oList.children;
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
		var x = evt.pageX - oZoomBox.offsetLeft;
		var y = evt.pageY - oZoomBox.offsetTop;

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
	var int = $("#shuliang1");
	var num = 1;
	$(".jia").click(function () {
		num++;
		int.val(num);
	});
	$(".jian").click(function () {
		num--;
		if (num <= 1) {
			num = 1;
		}
		int.val(num);
	});
	//			for(var j=0;j<Img.length;j++){
	//				(function(j){
	//					Img[j].onmouseover=function(){
	//						oMidImg.src="img/m0"+(j+2)+".jpg";
	//						oBigImg.src="img/m0"+(j+2)+".jpg";
	//				}
	//				})(j);
	//			}
};