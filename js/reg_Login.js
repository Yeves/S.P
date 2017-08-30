
window.onload=function() {
    //验证用户名
    /*
    * get
           ../S.P/index.php
           m:index
           a:verifyUserName；
           username：要验证的用户名；
       返回：
            {
                code：返回的信息代码；0=没错误；1=有错误；
                message：返回的信息；
            }
    * */
    var oTipsDiv = document.getElementsByClassName('regTips')[0];
    var oUsername = document.getElementById('regUsername');
    oUsername.onblur = function () {
        ajax('get','../S.P/index.php','m=index&a=verifyUserName&username='+this.value,function(data){
            var d=JSON.parse(data);
            oTipsDiv.innerHTML=d.message;
            if(d.code){
                oTipsDiv.style.color='red';
            }else{
                oTipsDiv.style.color='green';
            }
        });

    };//onblur事件

    //用户注册
    /*
    * post
           ../S.P/index.php
           m:index
           a:reg；
           username：要验证的用户名；
           password:注册密码
       返回：
            {
                code：返回的信息代码；0=没错误；1=有错误；
                message：返回的信息；
            }
    * */
    var oRegBtn=document.getElementById('regBtn');
    var aPassWord=document.getElementsByClassName('regPass')
    oRegBtn.onclick = function () {
        if(aPassWord[0].value != aPassWord[1].value){
            alert('两次输入的密码不一致，请重新输入！');
            aPassWord[0].value = '';
            aPassWord[1].value='';
        }else {

            ajax('post', '../S.P/index.php', 'm=index&a=reg&username=' + oUsername.value + '&password='
                + aPassWord[0].value, function (data) {
                var d = JSON.parse(data);
                alert(d.message)
            });
        }
    };//onclick事件


    //用户登录
    /*
    * post
           ../S.P/index.php
           m:index
           a:reg；
           username：要验证的用户名；
           password:注册密码
       返回：
            {
                code：返回的信息代码；0=没错误；1=有错误；
                message：返回的信息；
            }
    * */
    var oLoginBtn=document.getElementsByClassName('loginBtn')[0];
    var oLoginUsername=document.getElementsByClassName('LoginUsername')[0];
    var oLoginPassWord=document.getElementsByClassName('loginPass')[0];
    oLoginBtn.onclick = function () {
        ajax('post','../S.P/index.php','m=index&a=login&username' +
            '='+oLoginUsername.value+'&password='+oLoginPassWord.value,function(data){
            var d=JSON.parse(data);
            alert(d.message)
        });

    };//onclick事件

/********状态切换***********/
    var oLoginBtn=document.getElementById('loginBtn');
    var oToRegBtn=document.getElementById('toRegBtn');
    var oRegDiv=document.getElementById('regDiv');
    var oLoginDiv=document.getElementById('loginDiv');
    oLoginBtn.onclick=function () {
        oRegDiv.style.visibility='hidden';
        oLoginDiv.style.visibility='visible';

    }
    oToRegBtn.onclick=function () {
        oRegDiv.style.visibility='visible';
        oLoginDiv.style.visibility='hidden';

    }


};//onload函数