/**
 * Created by Yeves on 2017/6/4.
 */
window.onload = function () {

    var aDiv = document.getElementsByClassName('contentNav');
    var oUl=document.getElementsByTagName("ul")[0];
    var aLi = oUl.getElementsByTagName('li');
    var oBg = aLi[aLi.length - 1];
    var minzIndex = 2;

    //调用评价函数
    //star(content1,score1);
    //star(content2,score2);
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

function star(obj1,obj2){
    var content = document.getElementById('obj1');
    var score = document.getElementById('obj2');
    var oUl1 = content.getElementsByClassName('stars')[0];
    var aLi1 = oUl1.getElementsByTagName('li');
    var tip = content.getElementsByClassName('tip')[0];
    var arr = ['较差','还行','满意','推荐','力荐'];

    oUl1.onmouseover = function(){
        tip.style.visibility = 'visible';
    };
    oUl1.onmouseout = function(){
        tip.style.visibility = 'hidden';
    };
    for( var i=0;i<aLi1.length;i++ ){
        aLi1[i].index = i;
        aLi1[i].onclick = function () {
            mark(this.index);
            oUl1.index = this.index;
        };
        aLi1[i].onmouseover = function(){
            for( var i=0;i<aLi1.length;i++ ){
                aLi1[i].style.color = '#ccc';
            }
            mark(this.index);
        };
        aLi1[i].onmouseout = function(){
            for( var i=0;i<=this.index;i++ ){
                aLi1[i].style.color = '#ccc';
            }
            if(oUl1.index !== 'undefined'){
                mark(parseInt(oUl1.index));
            }
        }
    }
    function show() {
        tip.style.visibility = tip.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }
    function mark(index) {
        for( var i=0;i<=index;i++ ){
            aLi1[i].style.color = index < 2 ? 'gray' : 'orange';
        }
        score.innerHTML = arr[index] ? arr[index] : '待评价';
    }
}