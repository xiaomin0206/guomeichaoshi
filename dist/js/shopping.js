"use strict";

$(function () {
	$(".container11").click(function () {
		$(".container22").prop("checked", $(this).prop("checked"));
	});
	$(".container2 input").click(function () {
		if ($(".container2 input:checked").length == $(".container1").length) {
			$(".container11").prop("checked", true);
		} else {
			$(".container11").prop("checked", false);
		}
	});

	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?", { userID: $.cookie("username") }, function (data) {
		console.log(data);
		var str = "";

		$.each(data, function (index, item) {
			var totalPrice = item.price * item.number;
			console.log(totalPrice);
			str += "<div class=\"container1\"><div><input class=\"container22\" type=\"checkbox\" /></div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href=\"xiangqing.html\"><img src=\"" + item.goodsListImg + "\" alt=\"\" /></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div><a href=\"\">" + item.goodsName + "</a></div>\n\t\t\t\t\t\t\t<div></div>\n\t\t\t\t\t\t\t<div>\uFFE5<span class=\"price\">" + item.price + "</span></div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href=\"###\" class=\"jian1\">-</a>\n\t\t\t\t\t\t\t\t<input type=\"\" name=\"\" class=\"shuliang2\" value=\"" + item.number + "\" />\n\t\t\t\t\t\t\t\t<a href=\"###\" class=\"jia1\">+</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\uFFE5<span class=\"total\">" + totalPrice + "</span></div>\n\t\t\t\t\t\t\t<div id=\"\">\n\t\t\t\t\t\t\t\t<a href=\"###\" class=\"delete\" data-id=\"" + item.goodsID + "\">\u5220\u9664</a>\n\t\t\t\t\t\t\t\t<a href=\"\">\u52A0\u5165\u6536\u85CF\u5939</a>\n\t\t\t\t\t\t\t</div></div>";
		});
		$(".container2").append(str);

		$(".delete").click(function () {
			var id = $(this).attr("data-id");
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php", { userID: $.cookie("username"), goodsID: id, number: 0 }, function (data) {
				location.assign("shopping.html");
			});
		});
	});
});
window.onload = function () {
	var int = $(".shuliang2");
	$(".jia1").on("click", function () {
		var index = $(this).index(".jia1");
		var danjia = $(".price").eq(index).text();
		var num = int.eq(index).val();
		num++;
		var jiage = danjia * num;
		$(".total").eq(index).text(jiage);
		int.eq(index).val(num);
	});
	$(".jian1").on("click", function () {
		console.log("ssss");
		var index = $(this).index(".jian1");
		var danjia = $(".price").eq(index).text();
		var num = int.eq(index).val();
		num--;
		if (num <= 1) {
			num = 1;
		}
		var jiage = danjia * num;
		$(".total").eq(index).text(jiage);
		int.eq(index).val(num);
	});
};