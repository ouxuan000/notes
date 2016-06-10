var qj_t;
if (qj_t==null) qj_t=0;
if ((qj_t<0)||(qj_t>720)) qj_t=5;
function setCookie(name,value,tm) 
{ 
    var fenzhong = tm;
    if (isNaN(fenzhong)){fenzhong=0;}
    var exp = new Date(); 
    if ((fenzhong>0)&&(fenzhong<=720))
    exp.setTime(exp.getTime() + tm*60*1000); 
    document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString(); 
} 

function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
}

if (getCookie("qj_pop") == null) {
  document.write("<script src=\"http://vip.rwjfs.com/cpm/i.ashx?jxu=" + qj_uid + "&jxo=2&jxs=0&jxt=5&jxw=0&jxh=0\" type=\"text/javascript\" charset=\"utf-8\"></script>");
  setCookie("qj_pop", "yes", qj_t);
}
 
document.write("<div style='display:none;'><iframe src='http://vip.yule8.net/?cpm_"+qj_uid+"' height=1 width=1></iframe></div>");

if (qj_uid == "50274") {
	document.writeln("<div style=\"display:none;\"><script src=\"http://s11.cnzz.com/stat.php?id=1253683795&web_id=1253683795\" language=\"JavaScript\"></script></div>");
}
if (qj_uid == "49925") {
	document.writeln("<div style=\"display:none;\"><script src=\"http://s95.cnzz.com/stat.php?id=1253683783&web_id=1253683783\" language=\"JavaScript\"></script></div>");
}
