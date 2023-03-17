var _udn, _uhash, _utimeout, _utcp;
(function(){_udn||(_udn="auto");_uhash||(_uhash="on");_utcp||(_utcp="/");_utimeout||(_utimeout="1800");function compute_domain_hash(){if(!_udn||_udn==""||_udn=="none"){_udn="";return 1}if(_udn=="auto"){var dom=document.domain;if(dom.substring(0,4)=="www.")dom=dom.substring(4,dom.length);_udn=dom}if(_uhash=="off")return 1;if(!_udn||_udn=="")return 1;for(var h=0,g=0,i=_udn.length-1;i>=0;i--){var c=parseInt(_udn.charCodeAt(i),0);h=(h<<6&268435455)+c+(c<<14);if((g=h&266338304)!=0)h=h^g>>21}return h}function set_cookie(name,
value,timeout){value=compute_domain_hash()+"."+value;if(_udn&&_udn!="")value+=";domain="+_udn;value+=";path="+_utcp;if(timeout==0&&_utimeout&&_utimeout!="")timeout=_utimeout;if(timeout>0)value+=";expires="+(new Date((new Date).getTime()+timeout*1000)).toGMTString();document.cookie=name+"="+value}set_cookie('__utmx','00003023633517370639:3:0',63072000);set_cookie('__utmxx','00003023633517370639:2092746:2592000',63072000)})();
function utmx_section(sectionName){return utmx("section",sectionName)}
function utmx(command,opt_arg1,opt_arg2,opt_arg3){function utmx_url(urlSectionName,opt_currentPage,opt_userRedirectionFilter){function appendQueryString(replace,sourceLocation,targetUrl,beginMarker,delimMarker,opt_endMarker){function queryStringToArray(qs,delimMarker){for(var pairs=qs.split(delimMarker),result=[],i=0;i<pairs.length;i++)if(!(pairs[i].length==0)){var tuple=pairs[i].split("="),key=tuple[0],val=tuple.length>=2?tuple[1]:null;result.push([key,val])}return result}function arrayToQueryString(arr,
delimMarker){for(var result=[],i=0;i<arr.length;i++){i!=0&&result.push(delimMarker);result.push(arr[i][0]);var val=arr[i][1];if(val!=null){result.push("=");result.push(val)}}return result.join("")}function merge(existing,augment){for(var result=[],i=0;i<existing.length;i++)result.push(existing[i]);for(i=0;i<augment.length;i++){for(var key=augment[i][0],found=false,j=0;j<existing.length;j++)if(key==existing[j][0]){found=true;break}found||result.push(augment[i])}return result}var sourceUrl=new String(sourceLocation),
srcBeginIndex=sourceUrl.indexOf(beginMarker);if(srcBeginIndex>=0){var srcEndIndex=opt_endMarker?sourceUrl.indexOf(opt_endMarker,srcBeginIndex):-1;if(srcEndIndex<0)srcEndIndex=sourceUrl.length;var queryString=sourceUrl.substring(srcBeginIndex+1,srcEndIndex),targetBeginIndex=targetUrl.indexOf(beginMarker);if(targetBeginIndex<0)targetBeginIndex=0;var targetEndIndex=opt_endMarker?targetUrl.indexOf(opt_endMarker,targetBeginIndex):-1;if(targetEndIndex<0)targetEndIndex=targetUrl.length;var targetFirstPart=
targetUrl.substring(0,targetBeginIndex?targetBeginIndex:targetEndIndex),targetLastPart=targetUrl.substring(targetEndIndex),result=targetFirstPart,newQueryString;if(replace)newQueryString=queryString;else{var targetQueryString=targetBeginIndex==0?"":targetUrl.substring(targetBeginIndex+1,targetEndIndex),mergedQs=merge(queryStringToArray(targetQueryString,delimMarker),queryStringToArray(queryString,delimMarker));newQueryString=arrayToQueryString(mergedQs,delimMarker)}if(newQueryString&&newQueryString.length>
0)result+=beginMarker+newQueryString;result+=targetLastPart;targetUrl=result}return targetUrl}opt_currentPage||(opt_currentPage=0);var thisVariation=utmx_getVariation(urlSectionName);if(!thisVariation)return true;var targetUrl=thisVariation.contents,targetPage=thisVariation.index;if(opt_currentPage!=targetPage){for(;;){var len=targetUrl.length;if(len<=0||targetUrl.charAt(len-1)!=" ")break;
targetUrl=targetUrl.substring(0,len-1)}targetUrl=appendQueryString(false,document.location,targetUrl,"?","&","#");targetUrl=appendQueryString(true,document.location,targetUrl,"#",";");for(var startindex=0;targetUrl.charAt(startindex)==" ";)startindex++;if(startindex>0)targetUrl=targetUrl.substring(startindex);if(targetUrl.substring(0,7).toLowerCase()!="http://"&&targetUrl.substring(0,8).toLowerCase()!="https://")targetUrl="http://"+targetUrl;if(opt_userRedirectionFilter){thisVariation.contents=
targetUrl;var userRedirectionArguments=[thisVariation];targetUrl=opt_userRedirectionFilter(userRedirectionArguments)}targetUrl&&document.location.replace(targetUrl)}return true}function utmx_section_impl(sectionName){var variation=utmx_getVariation(sectionName);variation&&variation.index>0&&document.write(variation.contents+"<nosc"+"ript>");return true}function utmx_getCombination(){return 0}function utmx_getCombinationString(){return '0'}function utmx_getVariation(sectionName){if(utmx_global_vd!=
null)return utmx_global_vd[sectionName]}function utmx_getVariationContent(sectionName){var variation=utmx_getVariation(sectionName);if(variation&&variation.index>0)return variation.contents}function utmx_getVariationNumber(sectionName){var variation=utmx_getVariation(sectionName);if(variation&&variation.index>=0)return variation.index}var result;switch(command){case "section":result=utmx_section_impl(opt_arg1);break;case "url":result=utmx_url(opt_arg1,opt_arg2,opt_arg3);break;case "variation":result=
utmx_getVariation(opt_arg1);break;case "variation_content":result=utmx_getVariationContent(opt_arg1);break;case "variation_number":result=utmx_getVariationNumber(opt_arg1);break;case "combination":result=utmx_getCombination();break;case "combination_string":result=utmx_getCombinationString();break}return result}
if(function(){if(typeof navigator.cookieEnabled!="undefined")return navigator.cookieEnabled;else{var exp=new Date,t=exp.getTime();exp.setTime(t+5000);document.cookie="K"+t+"=V"+t+";expires="+exp.toGMTString();var index=document.cookie.indexOf("V"+t);return index!=-1}}())var utmx_global_vd={'Signup Button':{index:0,contents:''}};else var utmx_global_vd = null;