/**
 * Created by Yeves on 2017/6/4.
 */
window.onload = function () {

    var aDiv = document.getElementsByClassName('contentNav');
    var oUl=document.getElementsByTagName("ul")[0];
    var aLi = oUl.getElementsByTagName('li');
    var oBg = aLi[aLi.length - 1];
    var minzIndex = 2;
    var oBtn=document.getElementById('submit');

        oBtn.onclick=function(){
            if(confirm("是否提交评价？")){
                window.open("../index.html");
            };

    }
    //调用评价函数
    star();

    //布局转换

    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].style.left = aDiv[i].offsetLeft + 'px';
        aDiv[i].style.top = aDiv[i].offsetTop + 'px';

    }
    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].style.position = 'absolute';
        aDiv[i].style.margin = '0';
    }
    //从中间放大
    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].onmouseover = function () {
            this.style.zIndex = minzIndex++;
            startMove(this, {width: 170, height: 70, marginLeft: -10, marginTop: -10});

        };
        aDiv[i].onmouseout = function () {

            startMove(this, {width: 150, height: 50, marginLeft: 0, marginTop: 0, color: "#51C332"});

        };
    }

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function () {
            flexMoveNav(oBg, this.offsetLeft);
        };
    }


}//就绪函数
var iSpeed=0;
var timer=null;
var left=0;
function flexMoveNav(obj,iTarget){
    clearInterval(obj.timer);
    obj.timer=setInterval(function() {
        iSpeed += (iTarget - obj.offsetLeft) / 5;
        iSpeed *= 0.7;

        left += iSpeed;
        if (Math.abs(left-iTarget)<1 && Math.abs(iSpeed)<1 ){
            clearInterval(obj.timer);
            obj.style.left=iTarget+'px';
        }

        else {

            obj.style.left = left + 'px';

        }
    },30)




}

function star(){
    var content1= document.getElementById('content1');
    var score1 = document.getElementById('score1');
    var content2 = document.getElementById('content2');
    var score2 = document.getElementById('score2');
    var content3 = document.getElementById('content3');
    var score3 = document.getElementById('score3');
    star1();
    star2();
    star3();
    function star1(){
        var oUl = content1.getElementsByClassName('stars')[0];
        var aLi = oUl.getElementsByTagName('li');
        var tip = content1.getElementsByClassName('tip')[0];
        var arr = ['较差','还行','满意','推荐','力荐'];

        oUl.onmouseover = function(){
            tip.style.visibility = 'visible';
        };
        oUl.onmouseout = function(){
            tip.style.visibility = 'hidden';
        };
        for( var i=0;i<aLi.length;i++ ){
            aLi[i].index = i;
            aLi[i].onclick = function () {
                mark(this.index);
                oUl.index = this.index;
            };
            aLi[i].onmouseover = function(){
                for( var i=0;i<aLi.length;i++ ){
                    aLi[i].style.color = '#ccc';
                }
                mark(this.index);
            };
            aLi[i].onmouseout = function(){
                for( var i=0;i<=this.index;i++ ){
                    aLi[i].style.color = '#ccc';
                }
                if(oUl.index !== 'undefined'){
                    mark(parseInt(oUl.index));
                }
            }
        }
        function show() {
            tip.style.visibility = tip.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
        function mark(index) {
            for( var i=0;i<=index;i++ ){
                aLi[i].style.color = index < 2 ? 'gray' : 'orange';
            }
            score1.innerHTML = arr[index] ? arr[index] : '待评价';
        }
    }
    function star2(){
        var oUl = content2.getElementsByClassName('stars')[0];
        var aLi = oUl.getElementsByTagName('li');
        var tip = content2.getElementsByClassName('tip')[0];
        var arr = ['较差','还行','满意','推荐','力荐'];

        oUl.onmouseover = function(){
            tip.style.visibility = 'visible';
        };
        oUl.onmouseout = function(){
            tip.style.visibility = 'hidden';
        };
        for( var i=0;i<aLi.length;i++ ){
            aLi[i].index = i;
            aLi[i].onclick = function () {
                mark(this.index);
                oUl.index = this.index;
            };
            aLi[i].onmouseover = function(){
                for( var i=0;i<aLi.length;i++ ){
                    aLi[i].style.color = '#ccc';
                }
                mark(this.index);
            };
            aLi[i].onmouseout = function(){
                for( var i=0;i<=this.index;i++ ){
                    aLi[i].style.color = '#ccc';
                }
                if(oUl.index !== 'undefined'){
                    mark(parseInt(oUl.index));
                }
            }
        }
        function show() {
            tip.style.visibility = tip.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
        function mark(index) {
            for( var i=0;i<=index;i++ ){
                aLi[i].style.color = index < 2 ? 'gray' : 'orange';
            }
            score2.innerHTML = arr[index] ? arr[index] : '待评价';
        }
    }
    function star3(){
        var oUl = content3.getElementsByClassName('stars')[0];
        var aLi = oUl.getElementsByTagName('li');
        var tip = content3.getElementsByClassName('tip')[0];
        var arr = ['较差','还行','满意','推荐','力荐'];

        oUl.onmouseover = function(){
            tip.style.visibility = 'visible';
        };
        oUl.onmouseout = function(){
            tip.style.visibility = 'hidden';
        };
        for( var i=0;i<aLi.length;i++ ){
            aLi[i].index = i;
            aLi[i].onclick = function () {
                mark(this.index);
                oUl.index = this.index;
            };
            aLi[i].onmouseover = function(){
                for( var i=0;i<aLi.length;i++ ){
                    aLi[i].style.color = '#ccc';
                }
                mark(this.index);
            };
            aLi[i].onmouseout = function(){
                for( var i=0;i<=this.index;i++ ){
                    aLi[i].style.color = '#ccc';
                }
                if(oUl.index !== 'undefined'){
                    mark(parseInt(oUl.index));
                }
            }
        }
        function show() {
            tip.style.visibility = tip.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
        function mark(index) {
            for( var i=0;i<=index;i++ ){
                aLi[i].style.color = index < 2 ? 'gray' : 'orange';
            }
            score3.innerHTML = arr[index] ? arr[index] : '待评价';
        }
    }

}