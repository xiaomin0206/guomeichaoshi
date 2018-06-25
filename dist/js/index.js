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
	var i = 0;
	var timer = null;
	//鼠标划过btn显示隐藏
	//				$("#box").hover(function(){$(".btn").show();},function(){$(".btn").hide();})
	//默认显示第一张
	$(".list").eq(0).show().siblings().hide();
	show();
	//划过数字
	$(".num").hover(function () {
		clearInterval(timer);
		i = $(this).index();
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
	$(".btn_right").click(function () {
		clearInterval(timer);

		if (i == 6) {
			i = -1;
		}
		i++;
		console.log(i);
		move();
	});

	$(".btn_left").click(function () {
		clearInterval(timer);
		if (i == 0) {
			i = 7;
		}
		i--;
		move();
	});
	function move() {
		$(".list").eq(i).fadeIn(300).siblings(300).fadeOut();
		$(".num").eq(i).addClass("bg").siblings().removeClass("bg");
	}
	function show() {
		timer = setInterval(function () {
			i++;
			if (i == 7) {
				i = 0;
			}
			move();
		}, 2000);
	}
	$(".pinpai-right-ul li:nth-child(1)").hover(function () {
		$(".pinpai-right-11").css("display", "block");
		$(this).siblings().css("background", "#f5f5f5");
		$(this).css({ "background": "#ffffff", "border": "1px solid #cecece", "border-bottom": "none" });
	}, function () {
		if ($(this).css("background", "#ffffff")) {
			$(".pinpai-right-11").css("display", "block");
		} else {
			$(".pinpai-right-11").css("display", "none");
			$(this).css({ "background": "#f5f5f5", "border": "none" });
		}
	});
	$(".pinpai-right-ul li:nth-child(2)").hover(function () {
		$(".pinpai-right-22").css("display", "block");
		$(this).siblings().css("background", "#f5f5f5");
		$(this).css({ "background": "#ffffff", "border": "1px solid #cecece", "border-bottom": "none" });
	}, function () {
		if ($(this).css("background", "#ffffff")) {
			$(".pinpai-right-22").css("display", "block");
		} else {
			$(".pinpai-right-22").css("display", "none");
			$(this).css({ "background": "#f5f5f5", "border": "none" });
		}
	});
	$(".pinpai-right-ul li:nth-child(3)").hover(function () {
		$(".pinpai-right-33").css("display", "block");
		$(this).siblings().css("background", "#f5f5f5");
		$(this).css({ "background": "#ffffff", "border": "1px solid #cecece", "border-bottom": "none" });
	}, function () {
		if ($(this).css("background", "#ffffff")) {
			$(".pinpai-right-33").css("display", "block");
		} else {
			$(".pinpai-right-33").css("display", "none");
			$(this).css({ "background": "#f5f5f5", "border": "none" });
		}
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
	$(".floor1-bottom-middle").find("li").each(function () {
		$(this).hover(function () {
			$(".yincang").css("display", "block");
		}, function () {
			$(".yincang").css("display", "none");
		});
	});
	$(window).scroll(function () {
		var scrollTop = $(this).scrollTop();
		var scrollTop1 = $("#like").offset().top;
		if (scrollTop >= scrollTop1) {
			$("#wrap-3").css({ "position": "fixed", "top": 0 });
		} else {
			$("#wrap-3").css({ "position": "relative" });
		}
	});

	//				var $floor-top = $(".floor-top").find("a");
	//				var $floor1 = $("#floor1");
	//				var flag=true;
	//				$(window).scroll(function(){
	//					var scrollTop = $(this).scrollTop();
	//					var scrollTop1 = $("#like").offset().top;
	//					if(scrollTop>=scrollTop1){
	//						$("#wrap-3").css({"position":"fixed","top":0})
	//					}else{
	//						$("#wrap-3").css({"position":"relative"})
	//					}
	//					if(flag){
	//						$floor1.each(function(){
	//							if(scrollTop > $(this).offset().top - $(this).outerHeight()/2){
	////								console.log($(this))
	//								var index = $(this).index();
	//								$floor-top.eq(index).addClass("hover").siblings().removeClass("hover");
	//							}
	//						})
	//					}
	//					
	//				})
	//				$floor-top.click(function(){
	//					flag = false;
	//					var index = $(this).index();
	//					$(this).addClass("hover").siblings().removeClass("hover");
	//					$("body,html").stop().animate({"scrollTop":$floor1.eq(index).offset().top},500,function(){
	//						flag = true;
	//					});
	//
	//})
});