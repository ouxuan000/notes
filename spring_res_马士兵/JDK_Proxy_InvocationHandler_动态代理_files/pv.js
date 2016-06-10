function pv_d(pv_subcatid){
	var now = new Date().getTime();	
  	var datestr=escape(now*1000+Math.round(Math.random()*1000));
	    datestr+="befrombj";
  	var imgsrc='';	
	var imgsrc1='';	
	  	//增加产品线统计
   	

	imgsrc='http://pv.zdnet.com.cn/images/pvhit0001.gif?t='+datestr+'&subcat='+pv_subcatid+'&'+document.referrer;
	if(imgsrc!='') document.write('<img border=0 width=1 height=1 src="'+imgsrc+'">');	
}

if(typeof(pv_subcatid)=="undefined")
  		var pv_subcatid=0;	 

pv_d(pv_subcatid);

/*
//在特定条件下不输出这几个iframe
(function(){
	//var domains = ['www.zdnet.com.cn', 'news.zdnet.com.cn', 'www.cnetnews.com.cn', 'www.bnet.com.cn', 'www.esmb.com.cn', 'cio.zdnet.com.cn', 'notebook.zdnet.com.cn','server.zdnet.com.cn'];
	var urls = ['http://www.cnetnews.com.cn/news/ent','http://www.cnetnews.com.cn/ent.shtml','http://server.zdnet.com.cn/server/throng.shtml'];
	//if(!inarray(domains, location.host) && !inarray(urls, location.href)){
	if(!inarray(urls, location.href)){
		document.write("<iframe src='http://showpv.zdnet.com.cn/files/adshow.php' height='0' width='0' scrolling='no'></iframe>");
	}

	function inarray(array, str){
		for(var i=0; i<array.length; i++){
			if(array[i] == str.toLowerCase()){
				return true;
			}
		}
		return false;
	}
})();*/
  document.write("<iframe src='http://showpv.zdnet.com.cn/files/adshow.php' height='0' width='0' scrolling='no'></iframe>");
document.write("<iframe src='http://pv1.zdnet.com.cn/html/time.html' height='0' width='0' scrolling='no'></iframe>");
