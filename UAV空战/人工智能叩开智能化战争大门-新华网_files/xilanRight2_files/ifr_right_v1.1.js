//频道匹配
var arrChannel = [{sKey:"test",sValue:"测试",sUrl:"http://www.news.cn/politics/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_local},
{sKey:"politics",sValue:"时政",sUrl:"http://www.news.cn/politics/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"comments",sValue:"网评",sUrl:"http://www.news.cn/comments/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"newscenter",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/newscenter/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_newcenter},
{sKey:"renshi",sValue:"人事",sUrl:"http://www.news.cn/renshi/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_renshi},
{sKey:"hr",sValue:"人才",sUrl:"http://www.news.cn/hr/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_hr},
{sKey:"ziliao",sValue:"资料",sUrl:"http://www.news.cn/ziliao/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"legal",sValue:"法治",sUrl:"http://www.news.cn/legal/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_legal},
{sKey:"local",sValue:"地方",sUrl:"http://www.news.cn/local/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_local},
{sKey:"book",sValue:"悦读",sUrl:"http://www.news.cn/book/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_book},
{sKey:"lianzheng",sValue:"廉政",sUrl:"http://www.news.cn/lianzheng/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_lianzheng},
{sKey:"world",sValue:"国际",sUrl:"http://www.news.cn/world/",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"overseas",sValue:"海外华人",sUrl:"http://www.news.cn/overseas/",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"gangao",sValue:"港澳",sUrl:"http://www.news.cn/gangao/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_gat},
{sKey:"tw",sValue:"台湾",sUrl:"http://www.news.cn/tw/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_gat},
{sKey:"mil",sValue:"军事",sUrl:"http://www.xinhuanet.com/mil/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"culture",sValue:"文化",sUrl:"http://www.news.cn/culture/",wyakList:depart_fortune,cnxh:"3",autoDate:site_culture},
{sKey:"fortune",sValue:"财经",sUrl:"http://www.news.cn/fortune/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"money",sValue:"金融",sUrl:"http://www.news.cn/money",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"caipiao",sValue:"彩票",sUrl:"http://www.xinhuanet.com/lottery/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"jiaju",sValue:"家居",sUrl:"http://www.news.cn/jiaju/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"gongyi",sValue:"公益",sUrl:"http://www.news.cn/gongyi/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"futures",sValue:"期货",sUrl:"http://www.news.cn/futures/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"finance",sValue:"金融",sUrl:"http://www.news.cn/finance/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"auto",sValue:"汽车",sUrl:"http://www.news.cn/auto/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_auto},
{sKey:"edu",sValue:"教育",sUrl:"http://www.news.cn/edu/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_edu},
{sKey:"abroad",sValue:"出国",sUrl:"http://www.news.cn/abroad/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_edu},
{sKey:"food",sValue:"食品",sUrl:"http://www.news.cn/food/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_food},
{sKey:"tea",sValue:"茶叶",sUrl:"http://www.news.cn/tea/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_food},
{sKey:"air",sValue:"航空",sUrl:"http://www.news.cn/air/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_travel},
{sKey:"tech",sValue:"科技",sUrl:"http://www.news.cn/tech/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_tech},
{sKey:"jiadian",sValue:"家电",sUrl:"http://www.news.cn/jiadian/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_tech},
{sKey:"health",sValue:"健康",sUrl:"http://www.news.cn/health/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_health},
{sKey:"environment",sValue:"环保",sUrl:"http://www.news.cn/environment/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"coal",sValue:"煤炭",sUrl:"http://www.news.cn/coal/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"power",sValue:"电力",sUrl:"http://www.news.cn/power/",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"energy",sValue:"能源",sUrl:"http://www.news.cn/energy/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"shuhua",sValue:"书画",sUrl:"http://www.news.cn/shuhua/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_shuhua},
{sKey:"collection",sValue:"收藏",sUrl:"http://www.news.cn/collection/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_shuhua},
{sKey:"travel",sValue:"旅游",sUrl:"http://www.news.cn/travel/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_travel},
{sKey:"fashion",sValue:"时尚",sUrl:"http://www.news.cn/fashion/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fashion},
{sKey:"city",sValue:"城市",sUrl:"http://www.news.cn/city/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_city},
{sKey:"sports",sValue:"体育",sUrl:"http://sports.news.cn/",wyakList:depart_fortune,cnxh:"3",autoDate:site_sports},
{sKey:"insurance",sValue:"保险",sUrl:"http://www.xinhuanet.com/insurance/",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"expo",sValue:"会展",sUrl:"http://www.xinhuanet.com/expo/",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"xiangtu",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/xiangtu/",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"info",sValue:"信息化",sUrl:"http://www.xinhuanet.com/info/index.htm",wyakList:depart_fortune,cnxh:"4",autoDate:site_info},
{sKey:"zhcs",sValue:"智慧城市",sUrl:"http://www.xinhuanet.com/zhcs/index.htm",wyakList:null,cnxh:"4",autoDate:site_info},
{sKey:"ent",sValue:"娱乐",sUrl:"http://www.news.cn/ent/",wyakList:depart_fortune,cnxh:"0",autoDate:site_ent},
{sKey:"yuqing",sValue:"舆情",sUrl:"http://www.news.cn/yuqing/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_yuqing},
{sKey:"newmedia",sValue:"传媒",sUrl:"http://www.xinhuanet.com/newmedia/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_newmedia},
{sKey:"video",sValue:"视频",sUrl:"http://www.news.cn/video/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"foto",sValue:"摄影",sUrl:"http://www.xinhuanet.com/foto/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_foto},
{sKey:"house",sValue:"房产",sUrl:"http://www.xinhuanet.com/house/",wyakList:depart_political,cnxh:"0",autoDate:site_house},
{sKey:"forum",sValue:"论坛",sUrl:"http://forum.home.news.cn/list/50-0-0-1.html",wyakList:depart_fortune,cnxh:"3",autoDate:site_forum},
{sKey:"yzyd/politics",sValue:"时政",sUrl:"http://www.news.cn/politics/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"yzyd/comments",sValue:"网评",sUrl:"http://www.news.cn/comments/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"yzyd/newscenter",sValue:"新闻中心",sUrl:"http://www.xinhuanet.com/newscenter/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_politics},
{sKey:"yzyd/legal",sValue:"法治",sUrl:"http://www.news.cn/legal/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_legal},
{sKey:"yzyd/local",sValue:"地方",sUrl:"http://www.news.cn/local/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_local},
{sKey:"yzyd/book",sValue:"悦读",sUrl:"http://www.news.cn/book/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_book},
{sKey:"yzyd/world",sValue:"国际",sUrl:"http://www.news.cn/world/",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/overseas",sValue:"海外华人",sUrl:"http://www.news.cn/overseas/",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/gangao",sValue:"港澳",sUrl:"http://www.news.cn/gangao/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/tw",sValue:"台湾",sUrl:"http://www.news.cn/tw/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/mil",sValue:"军事",sUrl:"http://www.xinhuanet.com/mil/index.htm",wyakList:depart_overseas,cnxh:"1",autoDate:site_word},
{sKey:"yzyd/fortune",sValue:"财经",sUrl:"http://www.news.cn/fortune/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"yzyd/jiaju",sValue:"家居",sUrl:"http://www.news.cn/jiaju/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fortune},
{sKey:"yzyd/finance",sValue:"金融",sUrl:"http://www.news.cn/finance/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_finance},
{sKey:"yzyd/auto",sValue:"汽车",sUrl:"http://www.news.cn/auto/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_auto},
{sKey:"yzyd/edu",sValue:"教育",sUrl:"http://www.news.cn/edu/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_edu},
{sKey:"yzyd/food",sValue:"食品",sUrl:"http://www.news.cn/food/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_food},
{sKey:"yzyd/tech",sValue:"科技",sUrl:"http://www.news.cn/tech/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_tech},
{sKey:"yzyd/jiadian",sValue:"家电",sUrl:"http://www.news.cn/jiadian/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_tech},
{sKey:"yzyd/health",sValue:"健康",sUrl:"http://www.news.cn/health/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_health},
{sKey:"yzyd/energy",sValue:"能源",sUrl:"http://www.news.cn/energy/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_energy},
{sKey:"yzyd/travel",sValue:"旅游",sUrl:"http://www.news.cn/travel/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_travel},
{sKey:"yzyd/fashion",sValue:"时尚",sUrl:"http://www.news.cn/fashion/index.htm",wyakList:depart_fortune,cnxh:"3",autoDate:site_fashion},
{sKey:"yzyd/ent",sValue:"娱乐",sUrl:"http://www.news.cn/ent/",wyakList:depart_political,cnxh:"0",autoDate:site_ent},
{sKey:"yzyd/foto",sValue:"摄影",sUrl:"http://www.xinhuanet.com/foto/index.htm",wyakList:depart_political,cnxh:"0",autoDate:site_foto},
{sKey:"yzyd/house",sValue:"房产",sUrl:"http://www.xinhuanet.com/house/",wyakList:depart_political,cnxh:"0",autoDate:site_house},
{sKey:"japan",sValue:"日本频道",sUrl:"http://japan.xinhuanet.com/",wyakList:depart_japan,cnxh:"0",autoDate:site_japan},
{sKey:"zgly",sValue:"中国旅游新闻",sUrl:"http://zgly.xinhuanet.com/",wyakList:depart_fortune,cnxh:"0",autoDate:site_fortune},
{sKey:"vr",sValue:"VR/AR",sUrl:"http://www.xinhuanet.com/vr/",wyakList:depart_fortune,cnxh:"0",autoDate:site_fortune}
//{sKey:"drone",sValue:"无人机",sUrl:"http://news.cn/drone/",wyakList:depart_fortune,cnxh:"0",autoDate:drone}
];

//{sKey:"koreas",sValue:"韩国频道",sUrl:"http://korea.news.cn/",wyakList:depart_koreas,cnxh:"0",autoDate:site_koreas}


var channelName = "";
var channelLength = arrChannel.length;


window.onload=function(){
	loadInit.init();
	vedioAnimation.init();//视频推荐效果
	channelName = setChannel.init();//获取频道名
	setChannel.pushData();//设置频道数据
	//creatAd.init();
};
//====================================================

	
//输出数据通用函数
//参数说明：数据，要显示的dom元素，数据开始位置，数据结束位置，数据输出方式
var xinhuaData = {
	xinhua:function(x_data,x_div,x_begin,x_length,x_list){
		var t_str = "";
		for(var i=x_begin;i<x_length;i++){
			if(x_list==1) t_str += xinhuaData.data_li(x_data[i]);
			if(x_list==2) t_str += xinhuaData.data_li2(x_data[i],i);
			if(x_list==3) t_str += xinhuaData.data_li3(x_data[i]);
		};
		$(x_div).html(t_str);
	},
	xinhua_pre:function(x_data,x_div,x_begin,x_length,x_list){
		var t_str = "";
		for(var i=x_begin;i<x_length;i++){
			if(x_data[i]==undefined){
				break;	
			}
			if(x_list==1) t_str += xinhuaData.data_li(x_data[i]);
			if(x_list==2) t_str += xinhuaData.data_li2(x_data[i]);
		};
		$(x_div).prepend(t_str);
	},
	data_li:function(a){   //图片推荐数据样式
		var temp_a ="";
		if(a.t){	
			temp_a = '<li><a href="'+ setUrl.init(a.u) +'" target="_blank"><img src="'+ setUrl.init(a.tpu) +'" /> <span class="bg"></span><span class="text">'+setUrl.init(a.t)+'</span> </a></li>';
		}
		return temp_a;
	},
	data_li2:function(a,i){   //点击排行数据样式
		var temp_a ="";
		if(a.t){
			temp_a = '<li><i class="i'+(i+1)+'">'+(i+1)+'</i><a target="_blank" href="'+setUrl.init(a.u)+'">'+a.t+'</a></li>';
		}
		return temp_a;
	},
	data_li3:function(a){   //热搜次数据样式
		var temp_a ="";
		if(a.n){
			temp_a = '<li><a target="_blank" href="'+ setUrl.init(a.u) +'" target="_blank">'+ a.n +'</a></li>';
		}
		return temp_a;
	}
};
var setUrl = {
	init:function(a){
		if(a.indexOf("wwwnet")>-1) a=a.replace("wwwnet","http://www.xinhuanet.com");	
		if(a.indexOf("newsnet")>-1) a=a.replace("newsnet","http://news.xinhuanet.com");	
		if(a.indexOf("wsinet")>-1) a=a.replace("wsinet","http://www.xinhuanet.com/static/img");
		return a;
	}
}
//自动获取频道
var setChannel = {
	init:function(){
		var currurl = location.href;
		var pd = currurl.substring(currurl.indexOf("channel=")+8);
		//var pd = 'politics';
		return pd;
	},
	pushData:function(){
		for( var i=0; i<channelLength ; i++)
		{
			if(channelName==arrChannel[i].sKey)	{
				
				//politics,legal,local
				if(channelName=="sports"){
					creatAd.sports360();
				}
				else{
					//炫图推荐
					var arr_xttj = arrChannel[i].autoDate.pdtj_pic;
					if(arr_xttj){
						xinhuaData.xinhua(arr_xttj,"#pdtjList",0,2,1);
						//xinhuaData.xinhua(arr_xttj,"#pdtjList",0,4,1);
					}
				};
				if(channelName=="politics"||channelName=="legal"||channelName=="local"||channelName=="book"||channelName=="newmedia"||channelName=="comments"||channelName=="video"){
					// creatAd.politics360();		
					creatAd.politics();		
				}
				if(channelName=="fortune"||channelName=="money"||channelName=="finance"||channelName=="ent"||channelName=="edu"||channelName=="yuqing"||channelName=="tech"||channelName=="fashion"||channelName=="travel"||channelName=="food"||channelName=="auto"||channelName=="city"||channelName=="gongyi"||channelName=="sports"||channelName=="energy"||channelName=="air"||channelName=="health"||channelName=="lottery"||channelName=="drone"||channelName=="zgly")
				{
					creatAd.fortune();
				}
				if(channelName=="world"||channelName=="overseas"||channelName=="gangao"||channelName=="tw"||channelName=="mil")
				{
					creatAd.world();	
				}
				if(channelName=="newscenter")
				{
					$("#djph").hide();
					$("#pdtjList li").addClass("newscenterLi");
					$("#asideRight").height(2200);
					creatAd.politics();	
				}
				if(channelName=="japan")
				{
					creatAd.japan();	
				}
				if(channelName=="info")
				{
					creatAd.fortune();
					//creatAd.infos();
				}

				//点击排行
				var arr_djph = arrChannel[i].wyakList;	
				if(arr_djph){
					xinhuaData.xinhua(arr_djph,"#djphList",0,8,2);
				}
				//频道链接
				$("#goPh").attr("href",arrChannel[i].sUrl);
			}
		}
		
		//热搜排行榜
		var arr_xwrs = c_xinwenresou;	
		xinhuaData.xinhua(arr_xwrs,"#rsb_list",0,10,3);
	}
};
//视频动画效果
var vedioAnimation = {
	init:function(){
		$("#sptjList dt").mouseover(function(){
			$("#sptjList dd").hide();
			$(this).next("dd").show();
		})	
	}
}

var loadInit = {
    init:function(){
        // 加载数据之外的图片
        $("iframe:visible").each(function(){
            var _this = $(this);
            _this.attr("src",_this.attr("data-original"));
        });
	}
}

var creatAd = {
    fortune:function(){
        $("#ad1").html('<iframe id="iframe_r_1" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|cjxl_hzh1&db=xinhuanet&border=0&local=yes"></iframe>');
        $("#ad2").html('<iframe id="iframe_r_2" marginheight="0" marginwidth="0" frameborder="0" width="300" height="70" scrolling="no" src="http://www.xinhuanet.com/classad/xlwz_right_tf01.htm"></iframe>');
       // $("#ad3").html('<iframe id="iframe_r_3" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh2&db=xinhuanet&border=0&local=yes"> </iframe>');
       // $("#ad4").html('<iframe id="iframe_r_4" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh3&db=xinhuanet&border=0&local=yes"></iframe>');
        $("#ad5").html('');
	},
    politics:function(){
        $("#ad1").html('<iframe id="iframe_r_1" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|szxl_hzh1&amp;db=xinhuanet&amp;border=0&amp;local=yes"></iframe>');
        $("#ad2").html('<iframe id="iframe_r_2" marginheight="0" marginwidth="0" frameborder="0" width="300" height="70" scrolling="no" src="http://www.xinhuanet.com/classad/xlwz_right_tf01.htm"></iframe>');
       // $("#ad3").html('<iframe id="iframe_r_3" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh2&amp;db=xinhuanet&amp;border=0&amp;local=yes"> </iframe>');
       // $("#ad4").html('<iframe id="iframe_r_4" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh3&amp;db=xinhuanet&amp;border=0&amp;local=yes"></iframe>');
        $("#ad5").html('');
	},
    newcenter:function(){
        $("#ad1").html('<iframe id="iframe_r_1" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|szxl_hzh1&amp;db=xinhuanet&amp;border=0&amp;local=yes"></iframe>');
        $("#ad2").html('<iframe id="iframe_r_2" marginheight="0" marginwidth="0" frameborder="0" width="300" height="70" scrolling="no" src="http://www.xinhuanet.com/classad/xlwz_right_tf01.htm"></iframe>');
       // $("#ad3").html('<iframe id="iframe_r_3" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh2&amp;db=xinhuanet&amp;border=0&amp;local=yes"> </iframe>');
        //$("#ad4").html('<iframe id="iframe_r_4" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh3&amp;db=xinhuanet&amp;border=0&amp;local=yes"></iframe>');
        $("#ad5").html('');
	},
    world:function(){
        $("#ad1").html('<iframe id="iframe_r_1" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|gjxl_hzh1&amp;db=xinhuanet&amp;border=0&amp;local=yes"></iframe>');
        $("#ad2").html('<iframe id="iframe_r_2" marginheight="0" marginwidth="0" frameborder="0" width="300" height="70" scrolling="no" src="http://www.xinhuanet.com/classad/xlwz_right_tf01.htm"></iframe>');
       // $("#ad3").html('<iframe id="iframe_r_3" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh2&amp;db=xinhuanet&amp;border=0&amp;local=yes"> </iframe>');
       // $("#ad4").html('<iframe id="iframe_r_4" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh3&amp;db=xinhuanet&amp;border=0&amp;local=yes"></iframe>');
        $("#ad5").html('');
	},
    japan:function(){
        $("#ad1").html('<iframe id="iframe_r_1" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|gjxl_hzh1&amp;db=xinhuanet&amp;border=0&amp;local=yes"></iframe>');
        $("#ad2").html('<iframe id="iframe_r_2" marginheight="0" marginwidth="0" frameborder="0" width="300" height="70" scrolling="no" src="http://www.xinhuanet.com/classad/xlwz_right_tf01.htm"></iframe>');
       // $("#ad3").html('<iframe id="iframe_r_3" marginheight="0" marginwidth="0" frameborder="0" width="300" height="270" scrolling="no" src="http://japanese.china.org.cn/node_7194234.htm"> </iframe>');
       // $("#ad4").html('<iframe id="iframe_r_4" marginheight="0" marginwidth="0" frameborder="0" width="300" height="250" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|new_xl|xl_hzh3&amp;db=xinhuanet&amp;border=0&amp;local=yes"></iframe>');
        $("#ad5").html('');
	},
    infos:function(){
        $('<iframe id="iframe_r_info" marginheight="0" marginwidth="0" frameborder="0" width="300" height="130" scrolling="no" src="http://embed.xinhuanet.com/main/s?user=AllyesNetwork|xingxihuapindao|xxh_xilan_guanming&db=xinhuanet&border=0&local=yes"></iframe>').insertBefore("#pdtj");
	},
	politics360:function(){
		window.soNewsCallback_10159 = function(data) {
			var newsContainer = document.getElementById('pdtjList');
			var newsTemplate = '<li>'+
			'<a href="{shURL}" target="_blank"><img src="{imgURL}" border="0" height="109" width="145">'+
			'<span class="bg"></span>'+
			'<span class="text">{title}</span>'+
			'</a></li>';
			var template = function(template, filler) {
				for(attr in filler) {
					template = template.replace(new RegExp('{' + attr + '}', 'img'), filler[attr]);
				}
				return template;
			};
	
			var newsList = data['data'];
			var newsHTML = '';
			//for(var i = 0, len = newsList.length; i < len; i++) {
			for(var i = 0, len = newsList.length; i < 2; i++) {
				var news = newsList[i],
					title = news['title'],
					imgURL = news['img'],
					shURL = news['url'];
				newsHTML += template(newsTemplate, {title: title, imgURL: imgURL, shURL: shURL});
			}
			if(newsHTML) newsContainer.innerHTML = newsHTML;
		}
	
		/* 推广位数据接口 */
		var script = document.createElement('script'),
			head = document.getElementsByTagName('head')[0] || document.documentElement;
		script.src = "http://s.lianmeng.360.cn/media/news/union_mt_10159.js?t=" + Math.random();
		script.charset = 'UTF-8';
		head.appendChild(script);
	},
	sports360:function(){
		window.soNewsCallback_10187 = function(data) {
			var newsContainer = document.getElementById('pdtjList');
			var newsTemplate = '<li>'+
			'<a href="{shURL}" target="_blank"><img src="{imgURL}" border="0" height="109" width="145">'+
			'<span class="bg"></span>'+
			'<span class="text">{title}</span>'+
			'</a></li>';
			var template = function(template, filler) {
				for(attr in filler) {
					template = template.replace(new RegExp('{' + attr + '}', 'img'), filler[attr]);
				}
				return template;
			};
	
			var newsList = data['data'];
			var newsHTML = '';
			//for(var i = 0, len = newsList.length; i < len; i++) {
			for(var i = 0, len = newsList.length; i < 2; i++) {
				var news = newsList[i],
					title = news['title'],
					imgURL = news['img'],
					shURL = news['url'];
				newsHTML += template(newsTemplate, {title: title, imgURL: imgURL, shURL: shURL});
			}
			if(newsHTML) newsContainer.innerHTML = newsHTML;
		}
	
		/* 推广位数据接口 */
		var script = document.createElement('script'),
			head = document.getElementsByTagName('head')[0] || document.documentElement;
		script.src = "http://s.lianmeng.360.cn/media/news/union_mt_10187.js?t=" + Math.random();
		script.charset = 'UTF-8';
		head.appendChild(script);
	}
}



	




