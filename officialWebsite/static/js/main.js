// JavaScript Document
$(window).resize(function () {
	var $window = $(window);
	var ww = $window.width();			//浏览器显示区域宽
	var wh = $window.height();
	
	if(ww > 700){
		$('.nav-top-l').show();
	}
	else{
		$('.nav-top-l').hide();
		}
	
	if( $(".flexslider.flexslider-grid").length > 0 && typeof delayResize === "undefined" ){
      delayResize = setTimeout(function(){
        var gridSize = getGridSize();
        $(".flexslider.flexslider-grid").each(function () {
          var flexslider = $(this).data("flexslider");
          flexslider.vars.minItems = gridSize;
          flexslider.vars.maxItems = gridSize;
        });
        // console.log("gridSize:"+gridSize,"这里flexslider是否需要内部刷新？");
        $(window).trigger('resize');
        // console.log('clearTimeout');
        delayResize = undefined;
      },500);
    }
}).trigger('resize');

	
var f = false;
  $('.nav-bar').click(function(){
	  if (f = !f) {
		  $('.nav-top-l').slideDown();
	  }
	  else {
		  $('.nav-top-l').slideUp();
	  }
})

$(function () {
/*
	* flexslider组件
	* 所有可以左右切换的幻灯片、首页的左右滚动新闻等都有用到
   */
  $(".flexslider").each(function (index, element) {
    var _container = $(this);
    var _namespace = $(this).data("namespace");
    var _animation = $(this).data("animation") == "slide" ? "slide" : "fade";
    var _speed = $(this).data("speed") || 3000;
    var _duration = $(this).data("duration") || 1000;
    var _controlsContainer;
    var _controlNav = $(this).data("control-nav");
    var _directionNav = $(this).data("direction-nav") == true ? true : false;
    var _autoPlay = ($(this).data("autoplay") == true) ? true : false;
    var _loop = ($(this).data("loop") == true) ? true : false;
    var _hoverPause = ($(this).data("hover-pause") == true) ? true : false;
    var _width = $(this).innerWidth();

    if (_controlNav || _directionNav) {
      _controlsContainer = $(this).data("controls-container");
    }
    //console.log(_autoPlay,_controlNav, _directionNav, _controlsContainer);
    var options = {
      namespace: _namespace,
      animation: _animation,
      slideshow: _autoPlay,
      slideshowSpeed: _speed,
      animationSpeed: _duration,
      easing: "easeInOutExpo",
      pauseOnHover: _hoverPause,
      controlsContainer: _controlsContainer,
      controlNav: _controlNav,
      directionNav: _directionNav,
      prevText: _directionNav ? "<i class='icon-chevron-left'></i>" : '',
      nextText: _directionNav ? "<i class='icon-chevron-right'></i>" : '',
      animationLoop: _loop,
      useCSS: false,
      init: function () {
        _container.addClass("complete");
      }
    };
    //异步加载图片slider，在滚动到目标时加载图片
    if ($(this).find('.slides [data-src]').size() > 0) {
      options.after = renderPreview;
      options.start = renderPreview;
    }
    //首页横向滚动slider选项
    if ($(this).hasClass("flexslider-grid")) {
      options.animationLoop = false;
      options.itemWidth = 210;
      options.itemMargin = 0;
      options.minItems = getGridSize(); // use function to pull in initial value
      options.maxItems = getGridSize(); // use function to pull in initial value
    }
    //创建flexslider
    $(this).flexslider(options);
  });
 })
 
 function tab_about(){//页签切换
	$('.tab-about li').click(function(){
		var liindex = $(this).index();
		//alert(liindex);
		$(this).addClass('sel-a').siblings().removeClass('sel-a');
		$(this).parent().parent().siblings().find(".about-wrap-1").eq(liindex).fadeIn(150).siblings('.about-wrap-1').hide();
		var clienW =($(window).width()); //浏览器时下窗口可视区域宽度 
		if (clienW > 767) {
			var liWidth = $('.tab-about li').width()+30;
			$(this).siblings("p").stop(false,true).animate({'left' : liindex * liWidth + 50 + 'px'},300);
		}else{
			var liWidth = $('.tab-about li').width();
			$(this).siblings("p").stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);		
			}
	});	
}