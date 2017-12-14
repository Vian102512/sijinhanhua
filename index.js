
/**************
 **	轮播部分 **
 **************/
$(function(){
	var num=0;
	var timer=null;
	var span = $("#box .odiv_nav span");
	var list = $(".ul_list");
	var left_click = $(".left_click");
	var btn_left = $(".btn_left");
	var right_click = $(".right_click");
	var btn_right = $(".btn_right");
	go();
	$("#box").mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		go();
	});
	span.eq(0).css("backgroundColor","rgba(255,255,255,0.9)");
	function go(){
	  timer=setInterval(function(){
	num++;
	if(num>4){
		num=1;
		list.css("margin-left","0px");
	}
	if(num==4){
		span.css("backgroundColor","transparent");
		span.eq(0).css("backgroundColor","rgba(255,255,255,0.9)");
	}
	else{
		span.css("backgroundColor","transparent");
		span.eq(num).css("backgroundColor","rgba(255,255,255,0.9)");
	}
	list.animate({"marginLeft":-1250*num+"px"},580);
	},2000);
}
	span.each(function (index) {
		$(this).click(function () {
			num=index;
			span.css("backgroundColor","transparent");
			span.eq(num).css("backgroundColor","white");
			list.stop().animate({"marginLeft":-1250*num+"px"},580);
		})
	});

	right_click.click(function(){
		if(num<=4){num++;}
		if(num>4){
			num=1;
			list.css("margin-left","0px");
		}
		if(num==4){
			span.css("backgroundColor","transparent");
			span.eq(0).css("backgroundColor","white");
		}
		else{
			span.css("backgroundColor","transparent");
			span.eq(num).css("backgroundColor","white");
		}
		list.stop().animate({"marginLeft":-1250*num+"px"},580);
	});
	left_click.click(function(){
		if(num>=0){num--;}
		if(num<0){
			num=3;
			span.css("backgroundColor","transparent");
			span.eq(3).css("backgroundColor","white");
		}
		else{
			span.css("backgroundColor","transparent");
			span.eq(num).css("backgroundColor","white");
		}
		list.stop().animate({"marginLeft":-1250*num+"px"},580);
	});
	left_click.hover(function(){
		btn_left.css("opacity","1");
	},function(){
		btn_left.css("opacity","0.5");
	});

	right_click.hover(function(){
		btn_right.css("opacity","1");
	},function(){
		btn_right.css("opacity","0.5");
	});
});

/**************
 **	悬停遮罩 **
 **************/
 $(".floor ul li").hover(function () {
	$(this).find(".txt").stop(true).animate({ height: "398px" }, 200);
	$(this).find(".span").hide();
}, function () {
	$(this).find(".span").show();
	$(this).find(".txt").stop(true).animate({ height: "45px" }, 200);
});





/**************
 **	标题字体 **
 **************/
 function changeColor(){
	var color="purple|#FF60AF";
	color=color.split("|");
	;
	document.getElementById("title").style.color=color[parseInt(Math.random() * color.length)];
	// document.getElementById("title2").style.color=color[parseInt(Math.random() * color.length)];
	// document.getElementById("title3").style.color=color[parseInt(Math.random() * color.length)];
	// document.getElementById("title4").style.color=color[parseInt(Math.random() * color.length)];
	}
setInterval("changeColor()",200);
/**************
 **	小的轮播  1**
 **************/
$(function(){
	var num=0;
	var timer=null;
	var span = $(".small_span_list");
	var list = $(".small_ul_list");
	go();
	$("#box_small").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		clearInterval(timer);//移动进去时清除定时器
	}).mouseleave(function(){
		go();//移出后执行go函数
	});
	span.eq(0).css("backgroundColor","rgba(221,221,221,0.6)");//页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
	function go(){
	  timer=setInterval(function(){//设置定时器
	num++;//用一个全局变量来控制图的运动次数
	if(num>3){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
		num=1;
		list.css("margin-left","0px");
	}
	if(num==3){//由于圆点只有四个，而图片有五张，当移动到第五张图片时，给第一个圆点“选中色”。
		span.css("backgroundColor","transparent");
		span.eq(0).css("backgroundColor","rgba(221,221,221,0.6)");
	}
	else{//图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
		span.css("backgroundColor","transparent");
		span.eq(num).css("backgroundColor","rgba(221,221,221,0.6)");
	}
	list.animate({"marginLeft":-470*num+"px"},580);//使用animate实行运动功能
	},2000);
}
	span.each(function (index) {//遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
		$(this).click(function () {
			num=index;
			span.css("backgroundColor","transparent");
			span.eq(num).css("backgroundColor","rgba(221,221,221,0.6)");
			list.stop().animate({"marginLeft":-470*num+"px"},580);
		})
	});

});

/**************
 **	小的轮播  2**
 **************/
$(function(){
	var num2=0;
	var timer2=null;
	var span2 = $(".small2_span_list");
	var list2 = $(".small2_ul_list");
	go2();
	$("#box_small2").mouseenter(function(){//实现当鼠标移动到box上时，不执行自动轮播功能
		clearInterval(timer2);//移动进去时清除定时器
	}).mouseleave(function(){
		go2();//移出后执行go函数
	});
	span2.eq(0).css("backgroundColor","rgba(221,221,221,0.6)");//页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
	function go2(){
	  timer2=setInterval(function(){//设置定时器
	num2++;//用一个全局变量来控制图的运动次数
	if(num2>3){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
		num2=1;
		list2.css("margin-left","0px");
	}
	if(num2==3){//由于圆点只有四个，而图片有五张，当移动到第五张图片时，给第一个圆点“选中色”。
		span2.css("backgroundColor","transparent");
		span2.eq(0).css("backgroundColor","rgba(221,221,221,0.6)");
	}
	else{//图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
		span2.css("backgroundColor","transparent");
		span2.eq(num2).css("backgroundColor","rgba(221,221,221,0.6)");
	}
	list2.animate({"marginLeft":-470*num2+"px"},580);//使用animate实行运动功能
	},2000);
}
	span2.each(function (index) {//遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
		$(this).click(function () {
			num2=index;
			span2.css("backgroundColor","transparent");
			span2.eq(num2).css("backgroundColor","rgba(221,221,221,0.6)");
			list2.stop().animate({"marginLeft":-470*num2+"px"},580);
		})
	});

});
// 轮播下第一层左侧图片切换
var li1 = $(".first_box_left_div .li_1");
var li2 = $(".first_box_left_div .li_2");
var li3 = $(".first_box_left_div .li_3");
var li4 = $(".first_box_left_div .li_4");
var li5 = $(".first_box_left_div .li_5");
var li6 = $(".first_box_left_div .li_6");
var img = $(".img_a img ");
var h1 = $(".first_box_left h1");
var p = $(".img_p1");

li1.mouseover(function(e){
	e.preventDefault();
	img.attr("src","img/flowers/2.jpg"); 
	h1.html("你好");
	p.css("background","#FFE6EC");
}).mouseout(function(){
	img.attr("src","img/flowers/1.jpg");
	h1.html("一米阳光");
	p.css("background","#F2F2F2");
});

li2.mouseover(function(e){ 
	e.preventDefault();
	img.attr("src","img/flowers/3.jpg");
	h1.html("你好");
	p.css("background","#D9F3FF");
}).mouseout(function(){
	img.attr("src","img/flowers/1.jpg");
	h1.html("一米阳光");
	p.css("background","#F2F2F2");
});

li3.hover(function(e){
	e.preventDefault();
	img.attr("src","img/flowers/7.jpg");
	h1.html("demo08");
	p.css("background","#FBEDD9");
},function(){
	img.attr("src","img/flowers/1.jpg");
	h1.html("一米阳光");
	p.css("background","#F2F2F2");
});

li4.hover(function(e){
	e.preventDefault();
	img.attr("src","img/flowers/5.jpg");
	h1.html("list");
	p.css("background","#DCFBAB");
},function(){
	img.attr("src","img/flowers/1.jpg");
	h1.html("一米阳光");
	p.css("background","#F2F2F2");
});

li5.hover(function(e){
	e.preventDefault();
	img.attr("src","img/flowers/6.jpg");
	h1.html("Page");
	p.css("background","#F7CBFA");
},function(){
	img.attr("src","img/flowers/1.jpg");
	h1.html("一米阳光");
	p.css("background","#F2F2F2");
});

li6.hover(function(e){
	e.preventDefault();
	img.attr("src","img/flowers/9.jpg");
	h1.html("Hello");
	p.css("background","#F5B4AD");
},function(){
	img.attr("src","img/flowers/1.jpg");
	h1.html("一米阳光");
	p.css("background","#F2F2F2");
});

// 楼层标题下边框切换
var hover_a = $("[data-toggle=tab]");
hover_a.hover(e=>{
  var $li=$(e.target).parent();
  if(!$li.hasClass("active"))
    $li.addClass("active").siblings(".active").removeClass("active");
});

var a1 = $(".title_a1");
var a2 = $(".title_a2");
var a3 = $(".title_a3");
var f1 = $("#f1");
var f2 = $("#f2");
var f3 = $("#f3");

$(".new_products a")

a1.hover(function(){
	f1.css("display","block");
	f2.css("display","none");
	f3.css("display","none");
});

a2.hover(function(){
	f2.css("display","block");
	f1.css("display","none");
	f3.css("display","none");
});

a3.hover(function(){
	f3.css("display","block");
	f1.css("display","none");
	f2.css("display","none");
});

var a4 = $(".title_a4");
var a5 = $(".title_a5");
var a6 = $(".title_a6");
var f4 = $("#f4");
var f5 = $("#f5");
var f6 = $("#f6");


a4.hover(function(){
	f4.css("display","block");
	f5.css("display","none");
	f6.css("display","none");
});

a5.hover(function(){
	f5.css("display","block");
	f4.css("display","none");
	f6.css("display","none");
});

a6.hover(function(){
	f6.css("display","block");
	f4.css("display","none");
	f5.css("display","none");
});
// 销量排行
 $(function () {
	$('#sale_top ul span').click(function () {
		if ($(this).siblings('li').hasClass('on')) {
			$(this).siblings('li').slideUp(300).removeClass('on');
		} else {
			$(this).siblings('li').slideDown(200).addClass('on');
		}
	});
});

// f4
$(".tabs_a2").hover(function(){
	$()
});