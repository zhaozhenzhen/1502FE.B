// window.onload=function(){
	function lazy(options){
		var tmp=options.id?document.getElementById(options.id):document;
		if(tmp===null) return ;
		var imgs=tmp.getElementsByTagName('img'),
			lenghts=imgs.length,
			temp=[];
			console.log(tmp);
			for(var i=0;i<lenghts;i++){
				var _temp=imgs[i];
				if(_temp.getAttribute('data-src')!==null){
					if(isLoad(_temp)){
						setimg(_temp);
					}else{
						temp.push(_temp);
					}
				}
			}
		var len=temp.length;
		function hanble(){
			for(var i=0;i<len;i++){
				var obj=temp[i];
				if(isLoad(obj)){
					_setimg(obj)
					temp.splice(i,1)
					len--;
					if(len===0){lazyLoad()}
				}
			}
		}
	
	function isLoad(ele){
		var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
			if(ele==='undefined')return false;
			var edit=~~ele.getAttribute("data-range")||options.lazyRange
			var clientHeight=scrollTop+document.documentElement.clientHeight+edit;
			var offsetTop=0;
			while(ele.tagName.toUpperCase()!=='BODY'){
				offsetTop+=ele.offsetTop;
				ele=ele.offsetParent;
			}
			return (clientHeight>offsetTop)

	}

	function _setimg(ele){
		if(options.lazyTime){
			setTimeout(function(){
				setimg(ele)
				
			},options.lazyTime)
		}else{
			setimg(ele)
		}
	}
	function setimg(ele){
		ele.src=ele.getAttribute('data-src')
	}
	function lazyLoad(){
		window.removeEventListener?window.removeEventListener('scroll',hanble,false):window.detachEvent('onscroll',hanble)
	}
	window.addEventListener?window.addEventListener("scroll",hanble,false):window.attchEvent("onscroll",hanble)
}