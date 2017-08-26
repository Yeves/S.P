function getStyle(obj,attr){
				if (obj.currentStyle) {
					return obj.currentStyle[attr];
				} else{
					return getComputedStyle(obj,false)[attr];
				}
			}

			var timer=null;
			function startMove(obj,json,fun){
				
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					//相对于以前的循环数组，现在换成了json
					for(var attr in json)
					{
						//同样提供一个变量来保存当前的attr
						var iCur=0;
					if (attr=='opacity') {
						iCur=parseInt(parseFloat(getStyle(obj,attr))*100);	//因为其他属性的是值都是整数，所以这里乘以100来把透明度化为整数
					} else{
						iCur=parseInt(getStyle(obj,attr));
					}
					
					var bStop=true;
					var iSpeed=(json[attr]-iCur)/10;
					
					iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
					
					//判断是否所有项都完成动作，还有未完成就赋值为false（在还没找到需要的attr前不能停止，一旦找到就可以停止了）
					if(iCur!=json[attr]){
						bStop=false;
					}
						if (attr=='opacity') {
							obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
							obj.style.opacity=(iCur+iSpeed)/100;

						} 
						else
						{
							obj.style[attr]=iCur+iSpeed+'px';
						}
					}
					//如果所有的动作都完成 了才关闭定时器
					if (bStop) {
						clearInterval(obj.timer);
//					//检测是否有函数传入，有的话就执行，否则就不执行
						if (fun) {
							fun();
						}
					}
				},30)
			}