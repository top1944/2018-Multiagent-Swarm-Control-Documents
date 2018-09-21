var _channelName = "";
var arrChannel = [{sKey:"test",sValue:"测试",sUrl:"http://www.news.cn/politics/index.htm"},
{sKey:"politics",sValue:"时政",sUrl:"http://www.news.cn/politics/index.htm"},
{sKey:"comments",sValue:"网评",sUrl:"http://www.news.cn/comments/index.htm"},
{sKey:"newscenter",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/newscenter/index.htm"},
{sKey:"renshi",sValue:"人事",sUrl:"http://www.news.cn/renshi/index.htm"},
{sKey:"hr",sValue:"人才",sUrl:"http://www.news.cn/hr/index.htm"},
{sKey:"ziliao",sValue:"资料",sUrl:"http://www.news.cn/ziliao/index.htm"},
{sKey:"legal",sValue:"法治",sUrl:"http://www.news.cn/legal/index.htm"},
{sKey:"local",sValue:"地方",sUrl:"http://www.news.cn/local/index.htm"},
{sKey:"book",sValue:"悦读",sUrl:"http://www.news.cn/book/index.htm"},
{sKey:"lianzheng",sValue:"廉政",sUrl:"http://www.news.cn/lianzheng/index.htm"},
{sKey:"world",sValue:"国际",sUrl:"http://www.news.cn/world/"},
{sKey:"overseas",sValue:"海外华人",sUrl:"http://www.news.cn/overseas/"},
{sKey:"gangao",sValue:"港澳",sUrl:"http://www.news.cn/gangao/index.htm"},
{sKey:"tw",sValue:"台湾",sUrl:"http://www.news.cn/tw/index.htm"},
{sKey:"mil",sValue:"军事",sUrl:"http://www.xinhuanet.com/mil/index.htm"},
{sKey:"culture",sValue:"文化",sUrl:"http://www.news.cn/culture/"},
{sKey:"fortune",sValue:"财经",sUrl:"http://www.news.cn/fortune/index.htm"},
{sKey:"money",sValue:"金融",sUrl:"http://www.news.cn/money"},
{sKey:"caipiao",sValue:"彩票",sUrl:"http://www.xinhuanet.com/caipiao/index.htm"},
{sKey:"jiaju",sValue:"家居",sUrl:"http://www.news.cn/jiaju/index.htm"},
{sKey:"gongyi",sValue:"公益",sUrl:"http://www.news.cn/gongyi/index.htm"},
{sKey:"futures",sValue:"期货",sUrl:"http://www.news.cn/futures/index.htm"},
{sKey:"finance",sValue:"证券",sUrl:"http://www.news.cn/finance/index.htm"},
{sKey:"auto",sValue:"汽车",sUrl:"http://www.news.cn/auto/index.htm"},
{sKey:"edu",sValue:"教育",sUrl:"http://education.news.cn/"},
{sKey:"abroad",sValue:"出国",sUrl:"http://www.news.cn/abroad/index.htm"},
{sKey:"food",sValue:"食品",sUrl:"http://www.news.cn/food/index.htm"},
{sKey:"tea",sValue:"茶叶",sUrl:"http://www.news.cn/tea/index.htm"},
{sKey:"air",sValue:"民航",sUrl:"http://www.news.cn/air/index.htm"},
{sKey:"tech",sValue:"科技",sUrl:"http://www.news.cn/tech/index.htm"},
{sKey:"jiadian",sValue:"家电",sUrl:"http://www.news.cn/jiadian/index.htm"},
{sKey:"health",sValue:"健康",sUrl:"http://www.news.cn/health/index.htm"},
{sKey:"environment",sValue:"环保",sUrl:"http://www.news.cn/environment/index.htm"},
{sKey:"coal",sValue:"煤炭",sUrl:"http://www.news.cn/coal/index.htm"},
{sKey:"power",sValue:"电力",sUrl:"http://www.news.cn/power/"},
{sKey:"energy",sValue:"能源",sUrl:"http://www.news.cn/energy/index.htm"},
{sKey:"shuhua",sValue:"书画",sUrl:"http://www.news.cn/shuhua/index.htm"},
{sKey:"collection",sValue:"收藏",sUrl:"http://www.news.cn/collection/index.htm"},
{sKey:"travel",sValue:"旅游",sUrl:"http://travel.news.cn/"},
{sKey:"fashion",sValue:"时尚",sUrl:"http://www.news.cn/fashion/index.htm"},
{sKey:"city",sValue:"城市",sUrl:"http://www.news.cn/city/index.htm"},
{sKey:"sports",sValue:"体育",sUrl:"http://sports.news.cn/"},
{sKey:"insurance",sValue:"保险",sUrl:"http://www.xinhuanet.com/insurance/"},
{sKey:"expo",sValue:"会展",sUrl:"http://www.xinhuanet.com/expo/"},
{sKey:"xiangtu",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/xiangtu/"},
{sKey:"info",sValue:"信息化",sUrl:"http://www.xinhuanet.com/info/index.htm"},
{sKey:"zhcs",sValue:"智慧城市",sUrl:"http://www.xinhuanet.com/zhcs/index.htm"},
{sKey:"ent",sValue:"娱乐",sUrl:"http://ent.news.cn/"},
{sKey:"yuqing",sValue:"舆情",sUrl:"http://www.news.cn/yuqing/index.htm"},
{sKey:"newmedia",sValue:"传媒",sUrl:"http://www.xinhuanet.com/newmedia/index.htm"},
{sKey:"video",sValue:"视频",sUrl:"http://www.news.cn/video/index.htm"},
{sKey:"foto",sValue:"摄影",sUrl:"http://www.xinhuanet.com/foto/index.htm"},
{sKey:"house",sValue:"房产",sUrl:"http://www.xinhuanet.com/house/"},
{sKey:"forum",sValue:"论坛",sUrl:"http://forum.home.news.cn/list/50-0-0-1.html"},
{sKey:"yzyd/politics",sValue:"时政",sUrl:"http://www.news.cn/politics/index.htm"},
{sKey:"yzyd/comments",sValue:"网评",sUrl:"http://www.news.cn/comments/index.htm"},
{sKey:"yzyd/newscenter",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/newscenter/index.htm"},
{sKey:"yzyd/legal",sValue:"法治",sUrl:"http://www.news.cn/legal/index.htm"},
{sKey:"yzyd/local",sValue:"地方",sUrl:"http://www.news.cn/local/index.htm"},
{sKey:"yzyd/book",sValue:"悦读",sUrl:"http://www.news.cn/book/index.htm"},
{sKey:"yzyd/world",sValue:"国际",sUrl:"http://www.news.cn/world/"},
{sKey:"yzyd/overseas",sValue:"海外华人",sUrl:"http://www.news.cn/overseas/"},
{sKey:"yzyd/gangao",sValue:"港澳",sUrl:"http://www.news.cn/gangao/index.htm"},
{sKey:"yzyd/tw",sValue:"台湾",sUrl:"http://www.news.cn/tw/index.htm"},
{sKey:"yzyd/mil",sValue:"军事",sUrl:"http://www.xinhuanet.com/mil/index.htm"},
{sKey:"yzyd/fortune",sValue:"财经",sUrl:"http://www.news.cn/fortune/index.htm"},
{sKey:"yzyd/jiaju",sValue:"家居",sUrl:"http://www.news.cn/jiaju/index.htm"},
{sKey:"yzyd/finance",sValue:"金融",sUrl:"http://www.news.cn/finance/index.htm"},
{sKey:"yzyd/auto",sValue:"汽车",sUrl:"http://www.news.cn/auto/index.htm"},
{sKey:"yzyd/edu",sValue:"教育",sUrl:"http://education.news.cn"},
{sKey:"yzyd/food",sValue:"食品",sUrl:"http://www.news.cn/food/index.htm"},
{sKey:"yzyd/tech",sValue:"科技",sUrl:"http://www.news.cn/tech/index.htm"},
{sKey:"yzyd/jiadian",sValue:"家电",sUrl:"http://www.news.cn/jiadian/index.htm"},
{sKey:"yzyd/health",sValue:"健康",sUrl:"http://www.news.cn/health/index.htm"},
{sKey:"yzyd/energy",sValue:"能源",sUrl:"http://www.news.cn/energy/index.htm"},
{sKey:"yzyd/travel",sValue:"旅游",sUrl:"http://travel.news.cn"},
{sKey:"yzyd/fashion",sValue:"时尚",sUrl:"http://www.news.cn/fashion/index.htm"},
{sKey:"yzyd/ent",sValue:"娱乐",sUrl:"http://ent.news.cn/"},
{sKey:"yzyd/foto",sValue:"摄影",sUrl:"http://www.xinhuanet.com/foto/index.htm"},
{sKey:"yzyd/house",sValue:"房产",sUrl:"http://www.xinhuanet.com/house/"},
{sKey:"japan",sValue:"日本频道",sUrl:"http://japan.xinhuanet.com/"},
{sKey:"koreas",sValue:"韩国频道",sUrl:"http://korea.news.cn/"},
{sKey:"drone",sValue:"无人机",sUrl:"http://www.news.cn/drone/"},
{sKey:"vr",sValue:"VR/AR",sUrl:"http://www.news.cn/vr/"},
{sKey:"zgly",sValue:"中国旅游新闻",sUrl:"http://zgly.xinhuanet.com/"},
{sKey:"cx",sValue:"创客",sUrl:"http://cx.news.cn/"}
];

$(function(){
	loadInit.init();
	newXL.imgEwm();
	commentEV.init();
    windowScroll.init();
	mobileHeader.init();
    returnTop.init();
	setChannel.init();//设置频道数据
	setChannel.pushData();//设置频道数据
	pageEvent.init();
	twocode.init();
	winResize.init();
	//isTouchDevice.init();
	newXL.init();
	var isTouchDevice = 'ontouchstart' in window;
	if(!isTouchDevice){
		moveVideo.init();		
		//增加时政广告位
		addAd.init();
	}
	
	//纠错
	(function() {
		var _hexCHS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		var _hexTBL = {'0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9,'A':10, 'B':11, 'C':12, 'D':13, 'E':14, 'F':15, 'G':16, 'H':17, 'I':18, 'J':19,'K':20, 'L':21, 'M':22, 'N':23, 'O':24, 'P':25, 'Q':26, 'R':27, 'S':28, 'T':29,'U':30, 'V':31, 'W':32, 'X':33, 'Y':34, 'Z':35, 'a':36, 'b':37, 'c':38, 'd':39,'e':40, 'f':41, 'g':42, 'h':43, 'i':44, 'j':45, 'k':46, 'l':47, 'm':48, 'n':49,'o':50, 'p':51, 'q':52, 'r':53, 's':54, 't':55, 'u':56, 'v':57, 'w':58, 'x':59,'y':60, 'z':61};
		var key = [61,37,44,31,34,7,24,6,43,12,27,3,25,29,60,33,35,41,58,2,51,49,9,5,59,11,42,32,22,40,4,57,50,38,8,56,21,19,52,53,16,28,1,26,47,17,54,46,10,23,55,13,14,20,15,36,18];
		Hr = function(){if (key.length < 57){throw new Error('the key is too short.');}
			this._sz = _hexCHS.charCodeAt(key[15]) % (key.length-20) + 10;this._ks = key.slice(-this._sz);
			for (var _i=0; _i<this._sz; ++_i) {this._ks[_i] = _hexCHS.charCodeAt(this._ks[_i]%62);}
			this._k16 = [], this._k41 = [];this._t16 = {}, this._t41 = {};
			for (var _i=0; _i<16; ++_i) {this._k16[_i] = _hexCHS.charAt(key[_i]);this._t16[this._k16[_i]] = _i;}
			for (var _i=0; _i<41; ++_i) {this._k41[_i] = _hexCHS.charAt(key[_i+16]);this._t41[this._k41[_i]] = _i;}};  
		Hr.prototype.ca = function( s ){var _k16 = this._k16,_k41 = this._k41,_ks  = this._ks,_sz  = this._sz,_cnt = 0;return  s.replace(/[^\s\n\r]/g, function( ch ) {var _n = ch.charCodeAt(0);return  (_n <= 0xff)? _k16[parseInt(_n/16)] + _k16[_n%16]: _k41[parseInt(_n/1681)] + _k41[parseInt(_n%1681/41)] + _k41[_n%41]}).replace(/[0-9A-Za-z]/g, function( ch ) {return  _hexCHS.charAt((_hexTBL[ch] + _ks[_cnt++%_sz]) % 62);});};})(); 
	//
	$(".tiyi1").toggle(function(){$('#jc_link1').attr("src",jc_link);$("#advisebox01").show();
	//$.get("http://203.192.10.248/together/vote_dc_sy_tjy.jsp?id=12113&v12113=0");
	},function(){$("#advisebox01").hide();});	
	
	$(".advise2").toggle(function(){$('.jc_link23').attr("src",jc_link);$("#advisebox02").show();},function(){$("#advisebox02").hide();});	
	$("#jc_close1").click(function(){$("#advisebox01").hide();});
	$("#jc_close2").click(function(){$("#advisebox02").hide();});
	//获取责编id，稿件url，稿件id，稿件标题  
	var ele_pageid = $("meta[name=pageid]").attr("content");
	var ele_ids=ele_pageid.split(".");
	var bId = ele_ids[ele_ids.length-2];
	var _code = new Hr();//code
	var cId = _code.ca(ele_ids[ele_ids.length-1]);
	var cTitle = $("title").html().split("_")[0];
    if(cTitle !=""){ cTitle = encodeURI(encodeURI(cTitle));}
	var cUrl = window.location.href;
	var jc_link='http://ck.wa.news.cn/XHWCIFB/Confirm.do?bId='+bId+"&cUrl="+cUrl+"&cId="+cId+"&cTitle="+cTitle;
	/****** end *******/
})
// 初始化加载内容 
var loadInit = {
    init:function(){
    	loadInit.baseSet();
        $("#asideRight:visible").each(function(){ //pc端的
			var asideIframe  ="http://www.xinhuanet.com/xilanRight2.htm?channel="+setChannel.init();
	        $("#asideRight").attr("src",asideIframe).addClass(setChannel.init());
			$("#articleTit").prepend('<iframe style="width:100%;height:90px; margin:0 auto" border="0" name="" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" noResize scrolling="no" vspale="0" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_banner&db=xinhuanet&border=0&local=yes"></iframe>');
			
			creatAd();
        });
        $("iframe.domPC:visible").each(function(){
        	var $_this = $(this);
			$_this.attr("src",$_this.attr("data-original"));
        });
        $("img.domPC").each(function(){
        	var $_this = $(this);
			$_this.attr("src",$_this.attr("data-original"));
        }); 
    },
    baseSet:function(){
		WinH = $(window).height();
		winW = $(window).width();
    }
}
//评论按钮效果
var commentEV={
	init:function(){
		$("#article .comment .scrollDiv").hover(
			function(){
				$(this).animate({
					top:-38
				},300)
			},
			function(){
				$(this).animate({
					top:0
				},300)
			}
		)
	}
}
// 页面事件
var pageEvent = {
    init:function(){
		//下拉菜单
		$(".apply .btnMore").click(function(){
			$(this).toggleClass("on");										
			$(".apply .appSelect").toggle();										
		})
		//放大缩小
		var fontSize = 1;
		$(".comment .fd").click(function(){
			if(fontSize==0)
			{
				$(".article p").css({"font-size":"18px"});
				fontSize++;
			}
			else if(fontSize==1)
			{
				$(".article p").css({"font-size":"20px"});
				fontSize++;
			}
		})
		$(".comment .sx").click(function(){
			if(fontSize==2)
			{
				$(".article p").css({"font-size":"18px"});
				fontSize--;
			}
			else if(fontSize==1)
			{
				$(".article p").css({"font-size":"16px"});
				fontSize--;
			}
		})
    }
}
// 手机菜单
var mobileHeader = {
    init:function(){
		$("#mobileHeader .right").click(function(){
			var $_this = $(this),
				$_mobileNavList = $("#mobileHeader .mobileNavList");
			if(!$_this.hasClass("open")){
				$_this.addClass("open");
				$_mobileNavList.animate({height:420}, 200);
			}else{
				$_this.removeClass("open");
				$_mobileNavList.animate({height:0}, 200);
			}
		});
    }
};
// 滚动事件
var windowScroll = {
    init:function(){
        $(window).scroll( function() {
            var _this = $(this);

            $(".adIframeLazy").each(function(){ //iframe延迟
                if(_this.scrollTop() > ($(this).offset().top-WinH) && !$(this).attr("src")){
                    $(this).attr("src",$(this).attr("data-src"));
                }
            });
            $(".imgLazy").each(function(){ //隐藏图片延迟
                if(_this.scrollTop() > ($(this).offset().top-WinH)){
                    $(this).attr("src",$(this).attr("data-src")).removeClass("imgLazy");
                }
            });


            if(_this.scrollTop()>(WinH*2)){
                $("#returnTop").show();                
            }else{
                $("#returnTop").hide();  
            };
        });
    }
};
//返回顶部
var returnTop = {
    init:function(){
        var $_returnTop = $("#returnTop");
        $_returnTop.click(function(){
            scroll(0,0);
            $(this).hide();
        })
    }
};
//自动获取频道
var setChannel = {
	init:function(){
		var currurl = location.href,pd="";
		if(currurl.indexOf("gate/big5/news.xinhuanet.com")>0) {
			pd = currurl.substring(currurl.indexOf("gate/big5/news.xinhuanet.com/")+29,currurl.indexOf("/2"));
		}
		else {
			pd = currurl.substring(currurl.indexOf("com/")+4,currurl.indexOf("/2"));
		}
		if(currurl.indexOf(".com/2")>0){
			pd ="newscenter";
		}
		if(pd.indexOf("power")>-1)pd="power";
		if(pd.indexOf("house")>-1 && pd!=="yzyd/house") pd="house";
		if(currurl.indexOf("japan.xinhuanet.com/")>-1) pd="japan";
		if(currurl.indexOf("korea.xinhuanet.com/")>-1 || currurl.indexOf("korea.news.cn")>-1) pd="koreas";
		if(currurl.indexOf("travel.news.cn/")>-1) pd="travel";
		if(currurl.indexOf("education.news.cn")>-1) pd="edu";
		if(currurl.indexOf("ent.news.cn")>-1) pd="ent";
		if(currurl.indexOf("zgly.xinhuanet.com")>-1) pd="zgly";
		if(currurl.indexOf("cx.news.cn/")>-1) pd="cx";
		_channelName = pd;		
		
		//pd = "fortune";
		return pd;
	},
	pushData:function(){
		for( var i=0; i<arrChannel.length ; i++)
		{			
			if(_channelName==arrChannel[i].sKey)	{
				var columnName ='<a target="_blank" href="'+arrChannel[i].sUrl+'">'+arrChannel[i].sValue+'</a>';
				$(".curNews").html(columnName);
				$("#mobileHeader .home").html(arrChannel[i].sValue).attr("href",arrChannel[i].sUrl);
				//如果频道是新闻中心
				if(_channelName=="newscenter"){
					$(".curNews").html(arrChannel[i].sValue);
					$("#mobileHeader .home").html(arrChannel[i].sValue).attr("href","");	
				}
			}
		}
	},
	huazhonghua:function(){
		if($("#article .article p").length >1 && $("#div_currpage").length==0 && winW > 767){
			$("#article .article p:last").prev().prepend('<iframe style="width:300px;height:250px; float:left; margin-right:10px;" border="0" name="search" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" noResize scrolling="no" vspale="0" src="http://www.xinhuanet.com/adhtml/ad_hzh.htm"></iframe>');
		}
	}
}
//二维码
var twocode = {
	init:function(){
		$("#towCode .closeBtn").click(function(){
			$("#towCode").hide();					   
		})
	}
}
function creatAd(){
	/*var script = document.createElement('script'),
	head = document.getElementsByTagName('head')[0] || document.documentElement;
	script.src = "http://embed.xinhuanet.com/main/s?user=AllyesNetwork|overseas|Xfuchaung&db=xinhuanet&border=0&local=yes&js=ie";
	script.charset = 'gbk';
	head.appendChild(script);*/	
	
	//$("#Xfuchaung").html('<iframe marginheight="0" marginwidth="0" frameborder="0" width="336" height="300" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|overseas|Xfuchaung&db=xinhuanet&border=0&local=yes"></iframe>');
	$("#Xfuchaung").html('<iframe marginheight="0" marginwidth="0" frameborder="0" width="336" height="300" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|TppAd|WzPc226t280&db=xinhuanet&border=0&local=yes"></iframe>');
}
var column = {
	fortune:function(){
		if(!$("#towCode").length){
			var ewm = '<div id="towCode" class="ewm_fortune"><div class="closeBtn">关闭</div></div>';
			$("#center").append(ewm);
		}
	}
}
var winResize={
	init:function(){
		$(window).on('resize',function(){
			loadInit.baseSet();
	        if(winW>1000){
	        	var iframeW = 1000;
	        }else{
	        	var iframeW = 768;
	        }
			$("#articleTit iframe").width(iframeW)
		});
	}
};
// 相关页面效果 
var newXL = {
	init:function(){
		this.relatedNews();
		//this.videoPlay();
		this.ewm();
		//this.imgEwm();
		this.isShowVideo();
		this.showKeyWord();
		this.showRelKey();
	},
	//相关阅读
    relatedNews:function(){
    	$("#relatedNews .title h3").click(function(){
			var _index = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$("#relatedNews .content ul").eq(_index).show().siblings().hide();
		})
    },
	videoPlay:function(){
		$("#videoArea img").click(function(){
			var oVideo = $(this).next();
			var url = oVideo.attr("data-src");
			oVideo.show().attr("src",url);
		})
	},
	ewm:function(){
		$(".yjfx").hover(function(){
			$(".yjfxImg img").stop().animate({
				left:"0"	
			},600);	
		},function(){
			$(".yjfxImg img").stop().animate({
				left:"100%"	
			},600);
		})
	},
	// 自动生成二维码
	imgEwm:function(){
		var currurl = location.href;
		var _src = currurl.replace("c_","ewm_").replace(".htm","1n.jpg");
		var sEwm = '<img src="'+_src+'" /><br />分享至手机';
		$(".yjfxImg").html(sEwm);
	},
	//验证视频
	isShowVideo:function(){
		var spSrc = $("#videoArea span").html();
		if(spSrc.indexOf("http:") >= 0){
			var spHtml = '<iframe marginheight="0" id="ifr_video" marginwidth="0" frameborder="0" src="'+spSrc+'"></iframe>';
			$("#videoArea").show().append(spHtml);
		}else{
			//无视频功能时支持图片点击播放视频
			new Play().init();
		}
	},
	//显示搜索关键词
	showKeyWord:function(){
		var hotkey = $("meta[name='keywords']").attr("content");
		if (hotkey) {
			hotparams = hotkey.split(",")[0];
			$("#q").val(hotparams);
		}; 	
	},
	//显示相关阅读关键词
	showRelKey:function(){
		var hotkey = $("meta[name='keywords']").attr("content").split(","),
			sKey='';
		for(var i=0;i<hotkey.length;i++){
			sKey='<span><a href="javascript:">'+hotkey[i]+'</a></span>';
			$("#relatedNews .title").append(sKey);
		}
		newXL.keyWordForm();
	},
	keyWordForm:function(){
		$("#relatedNews .title span a").click(function(){
			var val = $(this).html();
			$("#q").val(val);
			$(".ss_submit").click();
			newXL.showKeyWord();
		})	
	}
}
//视频跟随
var moveVideo = {
	init:function(){
		//#focusBoxBody .playVideo class
		this.scrollEvent();
	},
	scrollEvent:function(){
		var $video = $("#videoArea"),
			videoBot = $video.offset().top + $video.height(),
			$videoDiv = $video.find("iframe"),
			_screenW = $(window).width(),
            _screenH = $(window).height();
			
		//cssMove 设置为拖动的对象 #_player
			
		$(window).scroll( function() { 
			var _this = $(this);
			if($videoDiv.length>0){ //小iframe视频播放中
				//如果滚动区域小于iframe的顶部 或者 滚动渔区大于iframe底部+1屏高度 时，视频增加定位样式
				
				//if( _this.scrollTop() > ifrVideoBot || _this.scrollTop()+_screenH < ifrVideoTop){
				if( _this.scrollTop() > videoBot ){
					$videoDiv.addClass('onPlay');
				}
				else{
					$videoDiv.removeClass('onPlay');
				}
			}
		});
	},
	drag:function(){
		var obj = $("#focusBoxBody .playVideo"),		
			objClose = $("#headLine .videoCloseBtn");
		/*--------------拖曳效果----------------
		*原理：标记拖曳状态dragging ,坐标位置iX, iY
		*         mousedown:fn(){dragging = true, 记录起始坐标位置，设置鼠标捕获}
		*         mouseover:fn(){判断如果dragging = true, 则当前坐标位置 - 记录起始坐标位置，绝对定位的元素获得差值}
		*         mouseup:fn(){dragging = false, 释放鼠标捕获，防止冒泡}
		*/
		var dragging = false;
		var iX, iY;
		obj.mousedown(function(e) {
			dragging = true;
			iX = e.clientX - this.offsetLeft;
			iY = e.clientY - this.offsetTop;
			this.setCapture && this.setCapture();
			return false;
		});
		document.onmousemove = function(e) {
			if (dragging) {
			var e = e || window.event;
			var oX = e.clientX - iX;
			var oY = e.clientY - iY;
			obj.css({"left":oX + "px", "top":oY + "px"});
			objClose.css({"left":oX + 300 + "px", "top":oY + "px"});
			return false;
			}
		};
		$(document).mouseup(function(e) {
			dragging = false;
			obj[0].releaseCapture();
			objClose[0].releaseCapture();
			e.cancelBubble = true;
		})	
	},
	resetPos:function(){
		$("#focusBoxBody .playVideo").css({'left':'0px','bottom':'0px','top':'auto'});
		$("#headLine .videoCloseBtn").css({'left':'300px','bottom':'184px','top':'auto'});
	}
};

//增加点击正文图片播放视频功能
function Play(){
    this.imgs = $('#article').find('img');
    this.init = function(){
        this.imgHover();
    }
}
Play.prototype = {
    imgClick:function(node, alt){
        var self = this;
        node.on('click',function(){
            //console.log('c');
            var width = $(this).width(),
                height = $(this).height();/*获取宽高*/
            self.imgs.each(function(){/*全部初始化*/
                $(this).show();
                $(this).next('iframe').hide();
            });
            var next = $(this).next('iframe');
            if(next.length>0){/*有视频框就显示*/
                $(this).next('iframe').show();
            }else{/*没有就添加*/
                var video = '<iframe src="'+alt+'" width="'+width+'px" height="'+height+'px"></iframe>';
                $(this).parent().append(video);
            }
            $(this).hide();
        });
    },
    imgHover:function(){
        var self = this;
        self.imgs.each(function(){
            var alt = $(this).attr('alt');
            var index = alt && alt.indexOf('http://');/*判断是否为路径*/
            if(index == 0){
                $(this).css('cursor', 'pointer');
                self.imgClick($(this), alt);
            }
        });
    }
};

//new Play().init();

//根据频道加载广告
var addAd={
	init:function(){
		if(_channelName=="politics"){
			var _ad = '<iframe style="width: 1000px; height: 90px; margin: 0px auto 5px;"  marginwidth="0" framespacing="0" marginheight="0" frameborder="0" noresize="" scrolling="no" vspale="0" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|Pol|szny_qz&db=xinhuanet&border=0&local=yes"></iframe>';
			$("#articleTit").prepend(_ad);
		}
	}
};


