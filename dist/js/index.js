"use strict";

$(function () {
	$(".select1").hover(function () {
		$(".toplist-1-1").css("display", "block");
		$(this).css({ "background": "white", "height": 31, "border": "1px solid #cecece", "border-bottom": "none" });
	}, function () {
		$(".toplist-1-1").css("display", "none");
		$(this).css({ "background": "#f8f8f8", "border": "none", "height": 30 });
	});
	$(".select2").hover(function () {
		$(".toplist-2-1").css("display", "block");
		$(this).css({ "background": "white", "border": "1px solid #cecece", "border-bottom": "none" });
	}, function () {
		$(".toplist-2-1").css("display", "none");
		$(this).css({ "background": "#f8f8f8", "border": "none" });
	});
	$(".select3").hover(function () {
		$(".toplist-3").css("display", "block");
		$(this).css({ "background": "white", "border": "1px solid #cecece", "border-bottom": "none" });
	}, function () {
		$(".toplist-3").css("display", "none");
		$(this).css({ "background": "#f8f8f8", "border": "none" });
	});
	$(".select4").hover(function () {
		$(".toplist-4").css("display", "block");
		$(this).css({ "background": "white", "border": "1px solid #cecece", "border-bottom": "none" });
	}, function () {
		$(".toplist-4").css("display", "none");
		$(this).css({ "background": "#f8f8f8", "border": "none" });
	});
	$(".select6").hover(function () {
		$(".toplist-6").css("display", "block");
		$(this).css({ "background": "white", "border": "1px solid #cecece", "border-bottom": "none" });
	}, function () {
		$(".toplist-6").css("display", "none");
		$(this).css({ "background": "#f8f8f8", "border": "none" });
	});
	$(".search-middle-top1").hover(function () {
		$(".search-middle-select").css("display", "block");
	}, function () {
		$(".search-middle-select").css("display", "none");
	});
	$(".footer-right-1").hover(function () {
		$(".footer-top-1").css("display", "block");
	}, function () {
		$(".footer-top-1").css("display", "none");
	});
	$(".side").hover(function () {
		$(".side-1").css("display", "block");
		$(this).css({ "background": "white" }).find("a").css("color", "#333");
	}, function () {
		$(".side-1").css("display", "none");
		$(this).css({ "background": "#d917a2" }).find("a").css("color", "white");
	});
	var d = 0;
	var timer = null;
	//默认显示第一张
	$(".list").eq(0).show().siblings().hide();
	show();
	//划过数字
	$(".num").hover(function () {
		clearInterval(timer);
		d = $(this).index();
		move();
	});
	//鼠标划过
	$("#box").mouseover(function () {
		clearInterval(timer);
	});
	//鼠标离开	
	$("#box").mouseout(function () {
		show();
	});
	//点击换图	
	$(".btn_right1").click(function () {
		clearInterval(timer);

		if (d == 6) {
			d = -1;
		}
		d++;
		console.log(d);
		move();
	});

	$(".btn_left1").click(function () {
		clearInterval(timer);
		if (d == 0) {
			d = 7;
		}
		d--;
		move();
	});
	function move() {
		$(".list").eq(d).fadeIn(300).siblings(300).fadeOut();
		$(".num").eq(d).addClass("bg").siblings().removeClass("bg");
	}
	function show() {
		timer = setInterval(function () {
			d++;
			if (d == 7) {
				d = 0;
			}
			move();
		}, 2000);
	}
	//$(".pinpai-right-ul").find("li").hover(function(){
	//	var _index=$(this).index();
	//	$(this).css({"background":"#ffffff","border":"1px solid #cecece","border-bottom":"none"})
	//	
	//	$(".pinpai-right-ul1").eq(_index).css("display","block").siblings().css("display","none")
	//},function(){
	//	$(this).css({"background":"#f5f5f5","border":"none"})
	//})
	$(".pinpai-right-ul").find("li").hover(function () {
		var _index = $(this).index();
		$(this).addClass("huaguo").siblings().removeClass("huaguo");
		$(".pinpai-right-ul1").eq(_index).css("display", "block").siblings().css("display", "none");
	});
	var j = 0;
	$(".list-1").eq(0).show().siblings().hide();
	$(".btn_right1").click(function () {
		if (j == 3) {
			j = -1;
		}
		j++;
		//					console.log(j)
		move1();
	});

	$(".btn_left1").click(function () {
		if (j == 0) {
			j = 4;
		}
		j--;
		move1();
	});
	function move1() {
		$(".list-1").eq(j).fadeIn(300).siblings(300).fadeOut();
	}

	var q = 0;
	$(".num2").hover(function () {
		q = $(this).index();
		move();
	});
	function move() {
		$(".list2").eq(q).fadeIn(300).siblings(300).fadeOut();
		$(".num2").eq(q).addClass("bg").siblings().removeClass("bg");
	}

	$(".floor1-bottom-middle").find("li").mouseover(function () {
		var index = $(this).index();
		$(".yincang").eq(index).css("display", "block");
	});
	$(".floor1-bottom-middle").find("li").mouseout(function () {
		var index = $(this).index();
		$(".yincang").eq(index).css("display", "none");
	});
	//$(window).scroll(function(){
	//					var scrollTop = $(this).scrollTop();
	//					var scrollTop1 = $("#like").offset().top;
	//					if(scrollTop>=scrollTop1){
	//						$("#wrap-3").css({"position":"fixed","top":0})
	//					}else{
	//						$("#wrap-3").css({"position":"relative"})
	//					}
	//					})

	var $floor1 = $(".floor1");
	var flag = true;
	$(window).scroll(function () {

		var scrollTop = $(this).scrollTop();
		var scrollTop1 = $("#like").offset().top;
		if (scrollTop >= scrollTop1) {
			$("#wrap-3").css({ "position": "fixed", "top": 0 });
		} else {
			$("#wrap-3").css({ "position": "relative" });
		}

		/*	if(flag){$floor1.each(function(){
  		var index = $(this).index();
  		console.log(index);
  		if(scrollTop > $(this).offset().top - $(this).outerHeight()/2){
  			$(".floor-top li").eq(index).addClass("hover").siblings().removeClass("hover");
  		}
  	})
  }*/
	});
	$(".floor-top").find("li").click(function () {
		flag = false;
		var index = $(this).index();
		console.log(11111);
		$(this).addClass("hover").siblings().removeClass("hover");
		$("body,html").stop().animate({ "scrollTop": $floor1.eq(index).offset().top }, 500, function () {
			flag = true;
		});
	});
});