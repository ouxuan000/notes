jQuery(function($){

	   String.prototype.GetValue= function(para) {  
			var reg = new RegExp("(^|&)"+ para +"=([^&]*)(&|$)");  
			var r = this.substr(this.indexOf("\?")+1).match(reg);  
			 if (r!=null) return unescape(r[2]); return null;  
		} 
		var par_num = 5;
		var par_tag = "tag";
		var par_position = "lagou_jobs";
		var jobs_js_url = "";

		jobs_js_url = $('#js_jobs').attr('src');
		if (jobs_js_url) {
			var par_num = jobs_js_url.GetValue("num")||5;  
			var par_tag = jobs_js_url.GetValue("tag")||"tag";  
			var par_position = jobs_js_url.GetValue("position")||"lagou_jobs";
		}
	   function getTaglist(){   

			var liLength = $("#"+par_tag+ "li").length;  
			var array = [];
			for(var i = 0; i < liLength; i++){   
				array[i] = $("#"+par_tag+ "li a")[i].innerHTML;
			}   
			return array;
		}   

	   var keyword = getTaglist();


	   $.ajax({
			type: "GET",
			cache: false,
			contentType:"application/x-www-form-urlencoded; charset=utf-8",
			url: "/misc.php",//可在提交页设置隐藏的url来替换
			data:"mod=jobs&action=list&k="+keyword+"&num="+par_num,
			dataType: "jsonp", 
            jsonp: 'callback', 
			success: function(msg){
				
					var strHtml = "";//存储数据的变量
					$("#"+par_position).empty();//清空内容

					var click_count = "";

					$.each(msg,function(infoIndex,info){

						if(info["click_count"]){
							var click_count = "&nbsp;&nbsp;<span class='gray'>(关注："+info["click_count"]+")</span>";
						}

						strHtml += "<dt><a href='"+info["source_url"]+"' title='"+info["positionName"]+"' target='_blank'>"+info["positionName"]+"</a>["+info["city"]+"]"+click_count+"</dt>";

						strHtml += "<dd>";

						strHtml += "<p><span>年薪：</span>"+info["salary"]+"</p>";
						
						strHtml += "<p><span>公司：</span>"+info["companyName"]+"</p>";
						
						strHtml += "<p><span>待遇：</span>"+info["positionAdvantage"]+"</p>";

						strHtml += "</dd>";
					
					})
					$("#"+par_position).html(strHtml);//显示处理后的数据
		}
	});

});  