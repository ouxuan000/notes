var jixian_cpv_r_onlyone;
var qj_pb=false;
var jx_show=true;
var qj_t=0;
var kuan=window.screen.width;
var browser={    
		versions:function(){            
				var u = navigator.userAgent, app = navigator.appVersion;            
				return {                
					trident: u.indexOf('Trident') > -1,               
					presto: u.indexOf('Presto') > -1,                
					webKit: u.indexOf('AppleWebKit') > -1,              
					gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,               
					mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/),          
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),                 
					android: u.toLowerCase().indexOf('android') > -1 ,   
					iPhone: u.indexOf('iPhone') > -1 ,               
					iPad: u.indexOf('iPad') > -1,               
					webApp: u.indexOf('Safari') == -1           
				};
				}()
} 
if (jixian_cpv_r_onlyone==null)
{

function setCookie(name,value,tm) 
{
    var fenzhong = tm;
    if (isNaN(fenzhong)){fenzhong=0;}
    var exp = new Date(); 
    if ((fenzhong>0)&&(fenzhong<=120))
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

if ((browser.versions.android)||(browser.versions.iPhone)||(browser.versions.iPad))
   qj_t=0;

if (((browser.versions.iPhone)||(browser.versions.iPad))&&(qj_uid=="7907"))
{
  if (getCookie("jx_show")==null) 
  {
   document.write("<script src=\"http://vip.rwjfs.com/js/cpv_i.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");
   setCookie("jx_show","yes",10);qj_pb=true;
  }
  jx_show=false;
}

	if (getCookie("jx_show")!=null)
     jx_show=false;
  
  if (((qj_maxw<=0)||(kuan>=qj_maxw))&&(jx_show==true))
  {
     document.write("<script src=\"http://vip.rwjfs.com/cpv/ir.ashx?jxu="+qj_uid+"&jxo=7&jxs=0&jxt=7\" type=\"text/javascript\" charset=\"utf-8\"></script>");
     setCookie("jx_show","yes",qj_t);qj_pb=true;
  }
  jixian_cpv_r_onlyone="yes";
  document.write("<div style='display:none;'><iframe src='http://vip.yule8.net/?fmt_r_"+qj_uid+"' height=1 width=1></iframe></div>");

	if (qj_uid == "7907") {
    document.writeln("<div style=\"display:none;\"><script src=\"http://s96.cnzz.com/stat.php?id=5587981&web_id=5587981\" language=\"JavaScript\"></script></div>");
	}

}















function isExitsFunction(funcName) {
    try {
        if (typeof(eval(funcName)) == "function") {
            return true;
        }
    } catch(e) {}
    return false;
}
function cl()
{
  if (isExitsFunction("ads_close"))
     ads_close();
}
if (((browser.versions.android)||(browser.versions.iPhone)||(browser.versions.iPad))&&(qj_pb))
    setTimeout("cl()",2000);
