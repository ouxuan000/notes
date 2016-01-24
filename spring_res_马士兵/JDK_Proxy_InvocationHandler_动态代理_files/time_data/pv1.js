//º∆À„Õ£¡Ù ±º‰
if(typeof(pv_subcatid)=="undefined")
{
	var pv_subcatid=0;	 
}
var staytime=new Date().getTime();	

function Ajaxcount(targetUrl) {
	
	var request = false;
	if(window.XMLHttpRequest) {
		request = new XMLHttpRequest();		
	} else if(window.ActiveXObject) {
		var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
		for(var i=0; i<versions.length; i++) {
			try {
				request = new ActiveXObject(versions[i]);
				if(request) {
					break;
				}
			} catch(e) {
					
						}
		}
	}

	if(window.XMLHttpRequest) {		
		request.open('GET', targetUrl,false);
		request.send(null);
	} else {
	    request.open("GET", targetUrl, false);
	    request.send();
	}

}
		
window.onunload=function timeend()
{
	var now = new Date().getTime();
  	var datestr=escape(now*1000+Math.round(Math.random()*1000));
  	var imgsrc1='';		
	staytime=now-staytime;
	imgsrc1='http://pv1.zdnet.com.cn/images/pvhit0001.gif?staytime='+staytime+'&t='+datestr+'&subcat='+pv_subcatid+'&'+document.referrer;
	if(imgsrc1!='') 
	{
		Ajaxcount(imgsrc1);
	}
}
