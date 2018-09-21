(function(){

	var cfg = {
		url : {
			newsInfo : "http://comment.home.news.cn/a/newsInfo.do",
			checkLoginStatus : "http://comment.home.news.cn/a/checkLoginStatus.do",
			logOut : "http://comment.home.news.cn/a/ajaxLogout.do",
			addComment : "http://comment.home.news.cn/a/adComment.do"
		},
		template : {
			top : {
				boxStart : '<div class="nc_box1 nc_clear" id="nc_top">',
				fakeContent : '<div class="nc_l">正文</div>',
				wrapStart : '<div class="nc_r nc_clear">',
				tabStart : '<span class="nc_tab" id="nc_tab"><a class="nc_discuss nc_clear" href="#" target="_blank" id="nc_top_discuss">',
				tabContent1 : '<span class="nc_discuss_bt" id="nc_discuss_bt">我有话要说</span>',
				tabContent2 : '<span class="nc_discuss_st">(</span>',
				tabContent3 : '<span class="nc_discuss_red nc_ellipsis" id="nc_top_num" title=""></span>',
				tabContent4 : '<span class="nc_discuss_st">人参与)</span>',
				tabEnd : '</a></span>',
				debate : '<a class="nc_debate" href="http://my.xuan.news.cn/main.do#inTheX_form_debate" target="_blank">辩论厅</a>',
				//ad : '<a class="nc_ad nc_ellipsis" href="http://www.news.cn" target="_blank" title=""></a>',
				wrapEnd : '</div>',
				boxEnd : '</div>'				
			},
			btm : {
				boxStart : '<div class="nc_box2" id="nc_btm">',
				scopeStart : '<div class="nc_scope nc_clear">',
				amountStart : '<a class="nc_num nc_clear" href="#" target="_self" id="nc_btm_discuss">',
				amountEntry1 : '<span class="nc_num_t">条评论</span>',
				amountEntry2 : '<span class="nc_num_n nc_ellipsis" id="nc_btm_num" title=""></span>',
				amountEntry3 : '<span class="nc_num_t" id="nc_check">查看</span>',
				amountEnd : '</a>',
				formStart : '<form action="" method="POST" id="nc_form"><div class="nc_input nc_clear">',
				input1 : '<input type="text" name="content" value="" class="nc_input_i" placeholder="来说两句吧..." id="nc_comment_input">',
				input2 : '<input type="hidden" name="newsId" value="" id="nc_newsId">',
				input3 : '<input type="hidden" name="formType" value="1" id="nc_fromType">',
				input4 : '<input type="hidden" name="parentId" value="">',
				input5 : '<input type="hidden" name="shareToWb" value="0">',
				input6 : '<input type="hidden" name="sourceId" value="1">',
				input7 : '<input type="hidden" name="type" value="1">',
				input8 : '<input type="hidden" name="rurl" value="" id="nc_rurl">',
				submit : '<div class="nc_input_b" id="nc_submit">发布评论</div>',
				formEnd : '</div></form>',
				userStart : '<div class="nc_user">',
				name : '<a class="nc_user_name nc_ellipsis nc_hide" href="#" target="_blank" id="nc_user_name" title=""></a>',
				logout : '<span class="nc_user_logout nc_hide" id="nc_logout">[退出]</span>',
				login : '<span class="nc_user_login" id="nc_login">登录</span>',
				register : '<a class="nc_user_register" href="http://login.home.news.cn/reg.jsp" target="_blank" id="nc_register">注册</a>',
				userEnd : '</div>',
				scopeEnd : '</div>',
				cross : '<div class="nc_close" id="nc_close"><div class="nc_cross"></div></div>',
				boxEnd : '</div>'
			},
			flt : {
				icon : '<a href="#pinglun" class="nc_icon" id="nc_icon">我要评论</a>'
			},
			mid : {
				num : '<span class="wyhs_wrap nc_clear"><span class="wyhs_text" id="wyhs_tip">我有话要说</span><span class="wyhs_text">(</span><span class="wyhs_num nc_ellipsis" id="wyhs_num" title=""></span><span class="wyhs_text" id="wyhs_end">人参与)</span></span>'
			}
		}
	};

	//insert html && attach functions 
	function NcCtrl(){
		this.url = cfg.url;
		this.top = window.NcOpt.top;
		this.btm = window.NcOpt.btm;
		this.mid = window.NcOpt.mid;
		this.flt = window.NcOpt.flt;
		this.fltBoxId = window.NcOpt.fltBoxId;
		this.maxLen = 1000;
		this.commAmount = 0;

		this.check();
		this.siteId = this.getSiteId();
		this.newsId = this.getNewsId();
		this.getNewsInfo();
	}
	NcCtrl.prototype = {

		check : function(){
			var self = this;
			if(self.top) self.insert("top");
			if(self.btm) self.insert("btm");
			if(self.flt) self.insert("flt");
			if(self.mid) self.insert("mid");;
		},

		insert : function(type){
			if(type == "mid"){
				KISSY.one("#wyhs").hide().text("我有话要说");
				return;
			}

			var template = cfg.template[type],
				html = "";
			for(var i in template){
				html += template[i];
			}
			if(window.NcOpt.boxId){
				var box = KISSY.one("#" + window.NcOpt.boxId);
				box.append(html);
				return;
			}
			if(window.NcOpt.preId){
				var pre = KISSY.one("#" + window.NcOpt.preId);
				pre.after(html);
				return;
			}
		},

		getSiteId : function(){
			var siteNode = KISSY.one("#xhnc_commentSite");
			if(siteNode && siteNode.length) var site = siteNode.val();
			else var site = "1";
			return site;
		},

		getNewsId : function(){
			// return "1-126952421"; //rw
			// return "1-1112413693"; //writeonly
			// return "1-1112413677"; //readonly
			// return "1-1112413690"; //closed

			var self = this;
			if(window.NcOpt.newsId) return window.NcOpt.newsId;			
			if(self.siteId == "1") var newsId =  self.xhnetNewsId();
			return self.siteId + "-" + newsId;
		},

		xhnetNewsId : function(){
			var self = this,
				url = location.href,
				sta = url.lastIndexOf("c_") + 2,
				end = url.lastIndexOf("."),
				rst = url.slice(sta, end);
			rst = self.rmUnderline(rst);
			return rst;
		},

		rmUnderline : function(str){
			var pos = str.indexOf("_");
			if(pos == -1) return str;
			return str.slice(0, pos);
		},

		getNewsInfo : function(){
			if(!this.top && !this.btm && !this.mid && !this.flt) return;

			var self = this,
				url = self.url.newsInfo,
				param = {"newsId" : self.newsId};
			KISSY.IO.jsonp(url, param, function(data){
				self.commAmount = data.commAmount;
				if(data.commentFlag == 3) self.readWrite();
				if(data.commentFlag == 2) self.readonly();
				if(data.commentFlag == 1) self.writeonly();
				if(data.commentFlag == 0) self.commentClosed(); 
			});
		},

		readWrite : function(){
			if(this.top){
				KISSY.one("#nc_top").show();
				this.renderUrl("top");
				this.renderAmount("top");
			}
			if(this.btm){
				KISSY.one("#nc_btm").show();
				this.renderUrl("btm");
				this.renderAmount("btm");	
				this.checkLoginStatus();
				this.bindHideBtm();
				this.bindLogin();
				this.bindLogout();
				this.synchLog();
				this.initForm();
				this.bindSubmit();
				this.ie6BtmFix();
			}
			if(this.flt){
				this.showFlt();
			}
			if(this.mid){
				this.showMid();
				this.renderAmount("mid");
			}
		},

		readonly : function(){
			if(this.top){
				KISSY.one("#nc_top").show();
				KISSY.one("#nc_discuss_bt").text("查看评论");
				this.renderUrl("top");
				this.renderAmount("top");
			}
			KISSY.one("#nc_btm").remove();
		},

		writeonly : function(){
			if(this.top){
				KISSY.one("#nc_top").show();
				KISSY.one("#nc_tab").hide();
				this.renderAmount("top");
				this.showFlt();
			}
			if(this.btm){
				KISSY.one("#nc_btm").show();
				KISSY.one("#nc_check").text("共有");
				this.renderAmount("btm");
				this.checkLoginStatus();
				this.bindHideBtm();
				this.bindLogin();
				this.bindLogout();
				this.synchLog();
				this.initForm();
				this.bindSubmit();
				this.ie6BtmFix();
			}
			if(this.flt){
				this.showFlt();
			}
			if(this.mid){
				this.showMid();
				this.renderAmount("mid");
			}
		},

		commentClosed : function(){
			if(this.top){
				KISSY.one("#nc_top").show();
				KISSY.one("#nc_tab").hide();
			}if(this.btm){
				KISSY.one("#nc_btm").remove();
			}
		},

		renderUrl : function(type){
			var self = this,
				url = "http://comment.home.news.cn/nc/" + this.newsId + ".html";
			if(type == "top") KISSY.one("#nc_top_discuss").attr({"href" : url});
			if(type == "btm") KISSY.one("#nc_btm_discuss").attr({"href" : url});		
		},

		renderAmount : function(type){
			var self = this,
				num = self.commAmount;
			if(type == "top"){
				var topNum = KISSY.one("#nc_top_num");
				topNum.attr({"title" : num}).text(num);
			}
			if(type == "btm"){
				var btmNum = KISSY.one("#nc_btm_num");
				btmNum.text(num).attr({"title" : num});
			}
			if(type == "mid"){
				var midNode = KISSY.one("#wyhs"),
					midWrap = KISSY.DOM.create(cfg.template.mid.num),
					midNum = KISSY.DOM.children(midWrap, ".wyhs_num"),
					midEnd = KISSY.DOM.children(midWrap, "#wyhs_end");
				KISSY.DOM.text(midNum, num);
				KISSY.DOM.attr(midNum, {"title" : num});				
				midNode.text("").append(midWrap);
			}
		},

		checkLoginStatus : function(){
			var self = this,
				url = self.url.checkLoginStatus,
				param = {};
			KISSY.IO.jsonp(url, param, function(data){				
				if(data.code == 200){
					var nickname = data.content.nickname,
						username = data.content.username,
						userid = data.content.userid,
						portalUrl = "http://" + username + ".home.news.cn/portal/",
						nameNode = KISSY.one("#nc_user_name"),
						logOut = KISSY.one("#nc_logout"); 
					nameNode.text(nickname);
					nameNode.attr({
						"title" : nickname,
						 "href" : portalUrl
					});

					nameNode.show();
					logOut.show();
					KISSY.one("#nc_login").hide();
					KISSY.one("#nc_register").hide();
				}else{
					KISSY.one("#nc_user_name").hide();
					KISSY.one("#nc_logout").hide();
					KISSY.one("#nc_login").show();
					KISSY.one("#nc_register").show();
				}
			});
		},

		bindHideBtm : function(){
			KISSY.Event.delegate(document,"click","#nc_close",function(){
				KISSY.one("#nc_btm").hide();
			});
		},

		bindLogin : function(){
			var self = this;
			KISSY.Event.delegate(document,"click","#nc_login",function(){
				var loginBox = KISSY.one(".de-login"),
					loginBtn = loginBox.first(),
					btnId = loginBtn.attr("id");
				if(btnId.indexOf("login") > -1) loginBtn.fire("click");
			});
		},

		bindLogout : function(){
			var self = this;
			KISSY.Event.delegate(document,"click","#nc_logout",function(){
				var url = self.url.logOut,
					param = {};	
				KISSY.IO.jsonp(url, param, function(data){
					if(data.code != 200) return;
					KISSY.one("#nc_user_name").hide();
					KISSY.one("#nc_logout").hide();
					KISSY.one("#nc_login").show();
					KISSY.one("#nc_register").show();
					location.reload();
				});				
			});
		},

		synchLog : function(){
			var self = this;
			KISSY.Event.delegate(document,"click",".l-submit",function(){
				setTimeout(function(){self.checkLoginStatus();},1000);
			});
			KISSY.Event.delegate(document,"click",".de-logout",function(){
				setTimeout(function(){self.checkLoginStatus();},1000);
			});
		},

		initForm : function(){
			var self = this;
			KISSY.one("#nc_form").attr({"action" : self.url.addComment});
			KISSY.one("#nc_newsId").attr({"value" : self.newsId});
			KISSY.one("#nc_fromType").attr({"value" : self.siteId});
			KISSY.one("#nc_rurl").attr({"value" : window.location.href});
		},

		bindSubmit : function(){
			var self = this;
			KISSY.Event.delegate(document,"click","#nc_submit",function(){
				var content = KISSY.one("#nc_comment_input").val();
				content = content.replace(/(^\s*)|(\s*$)/g, "");
				if(!content) return;
				if(content.length > self.maxLen){
					alert("最多只能发表1000个文字哦");
				}else{
					alert("评论成功，等待审核！");
					document.getElementById("nc_form").submit();
				}
			});
		},

		ie6BtmFix : function(){
			var self = this,
				isIE=!!window.ActiveXObject,
				isIE6=isIE&&!window.XMLHttpRequest;
			if(!isIE6) return;
			var bodyWidth = KISSY.get("body").clientWidth;
			KISSY.one("#nc_btm").width(bodyWidth);
		},

		showFlt : function(){
			var self = this,
				isIE=!!window.ActiveXObject,
				isIE6=isIE&&!window.XMLHttpRequest,
				icon = KISSY.one("#nc_icon");				
			icon.css({"display" : "block"});

			var centerId = self.fltBoxId ? self.fltBoxId : "center",
				center = KISSY.get("#" + centerId),
				left = center.offsetLeft + center.offsetWidth + 3;

			if(!isIE6){
				icon.css({"left":left});
			}else{
				icon.css({"margin-left":left});
			}

			var style = KISSY.one("#wyhs").attr("data-style");
			if(style == "pic"){
				icon.text("").addClass("nc_pic");
			}
		},

		showMid : function(){
			KISSY.one("#wyhs").show();
		}

		
	};




	//make sure option is legal
	if(!window.NcOpt.top && !window.NcOpt.btm && !window.NcOpt.mid && !window.NcOpt.flt) return;

	//check kissy is loaded or not
	checkKissy();
	function checkKissy(){
		if(window.KISSY){
			new NcCtrl();
		}else{
			setTimeout(checkKissy,500);
		}
	}		

}());
