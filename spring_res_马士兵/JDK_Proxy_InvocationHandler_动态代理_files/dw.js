
var DW={doXpath:!!document.evaluate,internalSiteRe:/(^|\.)(3qit\.com|atlarge\.com|bnet\.com|builderau\.com\.au|businessmobile\.fr|buying\.com|chow\.com|chowhound\.com|cnetasia\.com|cnet\.com|cnet\.com\.au|cnet\.co\.uk|cnet\.de|cnetdirect\.com|cnetfrance\.fr|cnetnetworks\.com|cnetnews\.com\.cn|cnettv\.com|cnettv\.co\.uk|cnettv\.fr|com\.com|cweek\.com\.cn|download\.com|dw\.com|ea3w\.com|fengniao\.com|filmspot\.com|findarticles\.com|gamecenter\.com|gamefaqs\.com|gamekult\.com|gamerankings\.com|gamespot\.be|gamespot\.co\.kr|gamespot\.com|gamespot\.com\.au|gamespot\.com\.cn|gamespot\.co\.uk|gamespot\.nl|goosto\.fr|help\.com|iphoneatlas\.com|macfixit\.com|macfixitforums\.com|mp3\.com|mysimon\.com|news\.com|news\.fr|notebookshopper\.com|notebookshopper\.dw\.com|onlylady\.com\.cn|pchome\.net|search\.com|silicon\.com|silicon\.de|smartplanet\.com|smartshop\.com|spn\.com\.cn|sportsgamer\.com|techrepublic\.com|techtracker\.com|tv\.com|upload\.com|urbanbaby\.com|versiontracker\.com|webware\.com|xcar\.com\.cn|xiyuit\.com|zdnetasia\.com|zdnet\.be|zdnet\.co\.kr|zdnet\.com|zdnet\.com\.au|zdnet\.com\.cn|zdnet\.com\.tw|zdnet\.co\.uk|zdnet\.de|zdnet\.fr|zdnetindia\.com|zdnet\.nl|zol\.com\.cn|audioscrobbler\.net|cbsaudiencenetwork\.com|cbs\.com|cbsdigitalmedia\.com|cbseyemobile\.com|cbsgames\.com|cbsiphone\.qwapi\.com|cbsmobile\.com|cbsnews\.com|cbsrecords\.com|cbssports\.com|cbssportsstore\.com|cbsstore\.com|cwtv\.com|etonline\.com|kewlopolis\.com|last\.fm|lastfm\.com\.br|lastfm\.com\.tr|lastfm\.de|lastfm\.es|lastfm\.fr|lastfm\.it|lastfm\.jp|lastfm\.pl|lastfm\.ru|lastfm\.se|lastfm\.spiegel\.de|maxpreps\.com|moblogic\.tv|ncaa\.com|ncaasports\.com|ourchart\.com|radio\.aol\.co\.uk|radio\.aol\.de|radio\.aol\.fr|sho\.com|sportsline\.com|startrek\.com|theinsider\.com|theshowbuzz\.com|uwire\.com|wallstrip\.com)$/,hrefHasHostname:new RegExp("^([a-z][a-z0-9+.-]*:)?//[^/]","i"),tagDelim:';',tagLevels:2,defaultTag:'untagged',longNvpNames:{xref:1,xreq:1,srcurl:1,title:1,targeturl:1},clearCalled:0,trackClicksCalled:0,clear:function(additionalParams){var params=this.mergeParams(this.pageParams,additionalParams);var d=new Date();params.ts=d.getTime();if(!params.sid){params.sid=params.siteid;delete params.siteid;}
if(window.location.host){if(!params.ld){params.ld=window.location.host;}
if(!params.clgf){params.clgf=this.getCookie("XCLGFbrowser");}
if(!params.globid){params.globid=this.getCookie("globid");}}
if(!params.xref&&document.referrer){var xParams=this.parseReferrerUrl(document.referrer);for(var p in xParams){if(!params[p]){params[p]=xParams[p];}}}
if(this.regSilo){var pursCookie=this.getCookie("purs_"+this.regSilo);if(pursCookie){var ursParams=this.parseUrsCookie(pursCookie);for(var p in ursParams){if(!params[p]){params[p]=ursParams[p];}}}}
params.oid=this.buildOid(params);if(!params.srcUrl){params.srcUrl=document.location;}
if(!params.title&&document.title){params.title=document.title;}
if(!this.tcset){params.tcset='utf8';}
params.im='dwjs';var img=new Image(1,1);img.src=this.buildUrl(this.clearPath,this.toQueryString(params));img.onload=function(){DW.dwVoid();}
this.clearCalled=1;},redir:function(additionalParams){var params=this.mergeParams(this.pageParams,additionalParams);var d=new Date();params.ts=d.getTime();params.desturl="http://img.com.com/b.gif";if(!params.srcUrl){params.srcUrl=document.location;}
if(!params.title&&document.title){params.title=document.title;}
if(!this.tcset){params.tcset='utf8';}
params.im='dwjs';var img=new Image(1,1);img.src=this.buildUrl(this.redirPath,this.toQueryString(params));},mergeParams:function(){var to={};for(var i=0;i<arguments.length;i++){var obj=arguments[i]
for(var p in obj){if(obj.hasOwnProperty&&obj.hasOwnProperty(p)){to[p.toLowerCase()]=obj[p];}}}
return to;},toQueryString:function(params){var nvps=Array();var longNvps=Array();var val=null;for(var p in params){val=params[p];if(val){if(p.toLowerCase()in this.longNvpNames){longNvps.push(p+"="+encodeURIComponent(val));}else{nvps.push(p+"="+encodeURIComponent(val))}}}
return nvps.concat(longNvps).join('&');},buildUrl:function(path,queryString){return this.protocol+"//"+this.host+path+"?"+queryString;},buildOid:function(params){if(!params.oid&&(params.ptid&&params.onid&&(params.sid||params.siteid))){var oid=params.ptid+'-'+params.onid+'_'+(params.sid||params.siteid)+'-'+(params.asid||params.contid||params.pid||'0');if(params.pgnbr){oid+='-'+params.pgnbr;}
return oid;}else if(params.oid){return params.oid;}},parseReferrerUrl:function(referrer){var questionMark=referrer.indexOf('?');var params={};if(questionMark!=-1){params.xref=referrer.substring(0,questionMark);params.xrq=referrer.substring(questionMark+1);}else{params.xref=referrer;}
return params;},getCookie:function(name){var start=document.cookie.indexOf(name+"=");var len=start+name.length+1;if((!start)&&(name!=document.cookie.substring(0,name.length))){return null;}
if(start==-1)return null;var end=document.cookie.indexOf(';',len);if(end==-1)end=document.cookie.length;return unescape(document.cookie.substring(len,end));},parseUrsCookie:function(cookieValue){var parts=cookieValue.split("!",4);var params={};if(parts[0]){params.ursuid=parts[0].substring(40);}
if(parts[1]){var realm=parseInt(parts[1],16);if(!isNaN(realm)&&(realm&(1<<9))!=0){params.ursclc=1;}}
return params;},trackClicks:function(clickHandler){this.addEvent(document.body,"click",function(e){DW.click(e,clickHandler||DW.defaultClickHandler)},false);this.trackClicksCalled=1;},defaultClickHandler:function(e){var target=DW.getEventTarget(e);var linkObj=DW.getLinkObject(target);if(null==linkObj||DW.ignoreClick(linkObj)||(DW.isInternalLink(linkObj)&&DW.hasTagParam(linkObj))){return;}
var tag=DW.buildTag(target);if(DW.isInternalLink(linkObj)){DW.addTag(linkObj,tag);}else{DW.trackClickInBackground(linkObj,tag,target.nodeName,e.type);}},altClickHandler:function(e){var target=DW.getEventTarget(e);var linkObj=DW.getLinkObject(target);if(null==linkObj||DW.ignoreClick(linkObj)){return;}
var tag=(DW.getTag(linkObj))||DW.buildTag(target);DW.trackClickInBackground(linkObj,tag,target.nodeName,e.type);},addEvent:function(elm,evType,fn,useCapture){if(elm.addEventListener){elm.addEventListener(evType,fn,useCapture);return true;}else if(elm.attachEvent){return elm.attachEvent('on'+evType,fn);}else{elm['on'+evType]=fn;}},click:function(e,cb){if(!e)e=window.event;cb(e);},getEventTarget:function(e){return(e.target||e.srcElement);},getLinkObject:function(target){if(this.doXpath){var xpres=document.evaluate('(ancestor-or-self::*[@href])[last()]',target,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);if(xpres.snapshotLength>0&&xpres.snapshotItem(xpres.snapshotLength-1))return xpres.snapshotItem(xpres.snapshotLength-1);}else{var parent=target;for(var i=0;i<5&&parent&&parent.nodeName.toLowerCase()!='body';i++,parent=parent.parentNode){if(parent.getAttribute('href',2)){return parent;}}}
return null;},getTag:function(link){var res=link.search.match(/(\?|&)tag=([^&]+)/);if(res){return res[2];}
return null;},getOptions:function(link){var optAttr=link.getAttribute('dw');if(optAttr){try{return this.parseJson(optAttr)||{};}catch(err){return{};}}
return{};},buildTag:function(target){if(this.doXpath){return this.buildTagXpath(target);}else{return this.buildTagCrawl(target);}},buildTagXpath:function(obj){if(this.doXpath){var tag=new Array();var xpres=document.evaluate('(ancestor-or-self::*[@section])[position() > last() - '+this.tagLevels+']',obj,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(var i=0;i<xpres.snapshotLength&&i<this.tagLevels;i++){tag.push(xpres.snapshotItem(i).getAttribute('section'));}
if(tag.length>0)return tag.join(this.tagDelim);xpres=document.evaluate('(ancestor-or-self::*[contains(@class,"section") and @id])[position() > last() - '+this.tagLevels+']',obj,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(var i=0;i<xpres.snapshotLength&&i<this.tagLevels;i++){tag.push(xpres.snapshotItem(i).id);}
if(tag.length>0)return tag.join(this.tagDelim);xpres=document.evaluate('(ancestor-or-self::*[@id])[position() > last() - '+this.tagLevels+']',obj,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(var i=0;i<xpres.snapshotLength&&i<this.tagLevels;i++){tag.push(xpres.snapshotItem(i).id);}
if(tag.length>0)return tag.join(this.tagDelim);}
return this.defaultTag;},buildTagCrawl:function(target){var parent=target;var secArray=new Array();var clArray=new Array();var idArray=new Array();for(var i=0;i<500&&parent&&parent.nodeName.toUpperCase()!='BODY';i++,parent=parent.parentNode){if(parent.getAttribute("section")&&secArray.length<this.tagLevels){secArray.push(parent.getAttribute('section'));}
if(secArray.length==this.tagLevels){return secArray.reverse().join(this.tagDelim);}
if(this.hasClass(parent,"section")&&parent.id&&clArray.length<this.tagLevels){clArray.push(parent.id);}
if(parent.id&&idArray.length<this.tagLevels){idArray.push(parent.id);}}
if(secArray.length>0){return secArray.reverse().join(this.tagDelim);}else if(clArray.length>0){return clArray.reverse().join(this.tagDelim);}else if(idArray.length>0){return idArray.reverse().join(this.tagDelim);}else{return this.defaultTag;}},addTag:function(link,tag){if(this.hasTagParam(link)||null==link||null==tag)return;var hrefBits=link.getAttribute('href',2).split('#');if(hrefBits[0].indexOf('?')<0)hrefBits[0]+='?';hrefBits[0]+=((/[?&]$/.test(hrefBits[0]))?'':'&')+'tag='+tag;link.href=hrefBits.join('#');},trackClickInBackground:function(link,tag,nodeName,eventType){var linkParams=this.getOptions(link);linkParams.targetUrl=link.href;linkParams.ctype='evnt;elem;dest';linkParams.cval=(eventType||'')+';'+nodeName+';'+link.href;linkParams.tag=tag;this.redir(linkParams);},hasClass:function(element,className){var classes=element.className.split(/\s+/);for(var i=0;i<classes.length;i++){if(classes[i]==className){return true;}}
return false;},hasTagParam:function(link){return this.getTag(link)!=null},ignoreClick:function(link){if(link){var hrefAttr=link.getAttribute('href',2);if(hrefAttr.charAt(0)=='#'||hrefAttr.match(/^javascript/)||hrefAttr.match(/^mailto/)){return true;}
if(this.ignoreDomains){for(var i=0;i<this.ignoreDomains.length;i++){if(hrefAttr.match(this.ignoreDomains[i])){return true;}}}
return false;}else{return true;}},isInternalLink:function(link){var hostName=link.host.split(':')[0];return!this.hrefHasHostname.test(link.getAttribute('href',2))||this.internalSiteRe.test(hostName);},parseJson:function(text){if(/^[\],:{}\s\w]*$/.test(text.replace(/\\./g,'@').replace(/['"][^'"\\\n\r]*['"]|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){return eval('('+text+')');}},dwVoid:function(){return;},ocp:{paramNames:{epartner:1,cpnmodule:1,refdomain:1},paramValues:{},trackImp:function(additionalParams){this.trackEvent(DW.mergeParams({event:'load'},additionalParams));},trackEvent:function(additionalParams){var params=DW.mergeParams(this.parseParams(window.location.href),additionalParams);var ctype=new Array();var cval=new Array();if(!params.ctype&&((params.cpn||params.cpnmodule)&&params.event)){ctype.push('cpn');cval.push((params.cpn||params.cpnmodule));if(params.cpn)delete params.cpn;ctype.push('evt');cval.push(params.event);delete params.event;if(params.source||params.target){ctype.push('src');cval.push((params.source||''));if(params.source)delete params.source;}
if(params.target){ctype.push('id');cval.push(params.target);delete params.target;}
params.ctype=ctype.join(';');params.cval=cval.join(';');}
DW.redir(params);},trackClicks:function(handler){DW.trackClicks(handler||DW.ocp.clickHandler);},parseParams:function(url){if(this.paramValues.cpnmodule&&this.paramValues.epartner&&this.paramValues.refdomain){return this.paramValues;}
var params={};if(url.indexOf("?")!=-1){var qs=url.split("?")[1].split("&");for(var i=0;i<qs.length;i++){var qarg=qs[i].split("=");if(qarg[0]in this.paramNames&&qarg[1]!=null&&qarg[1]!=''){params[qarg[0]]=qarg[1];}}}
if(params.cpnmodule&&params.epartner&&params.refdomain){this.paramValues=params;}
return params;},clickHandler:function(e){var target=DW.getEventTarget(e);var linkObj=DW.getLinkObject(target);if(null==linkObj||DW.ignoreClick(linkObj)){return;}
var tag=(DW.getTag(linkObj))||DW.buildTag(target);DW.ocp.trackEvent({event:(e.type||'click'),source:target.nodeName,target:linkObj.href,tag:tag,targetUrl:linkObj.href});}}};DW.protocol="http:";if(window.location.protocol=="https:"){DW.protocol="https:";}
DW.ignoreDomains=[/adlog\.com\.com/,/dw\.com\.com/,/chkpt\.zdnet\.com/];DW.host="dw-cn.com.com";DW.clearPath="/clear/c.gif";DW.redirPath="/redir";