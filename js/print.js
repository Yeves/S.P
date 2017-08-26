/**
 * Created by Yeves on 2017/6/12.
 */
//print页面js代码


function showRule() {
    var ruleTxt = document.getElementById("rule");
    var ruleBox = document.getElementById("rulePic");
    ruleTxt.onmouseover = function () {
        ruleBox.style.visibility = "visible";
    }
    ruleBox.onmouseover = function () {
        ruleBox.style.visibility = "visible";
    }
    ruleTxt.onmouseout=function(){
        ruleBox.style.visibility = "hidden";
    }
    ruleBox.onmouseout=function(){
        ruleBox.style.visibility = "hidden";
    }
}