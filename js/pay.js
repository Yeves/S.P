window.onload=function(){
	var school=document.getElementById("school");
	var bank=document.getElementById("bank");
	var other=document.getElementById("other");
	var pay=document.getElementById("pay");
	var place=document.getElementsByClassName("place");

	school.onclick=function(){
		confirm("确认支付？");
		pay.style.display="none";
	};
	function show(ele){
		ele.onclick=function(){
			pay.style.display="block";
			place.style.visibility="none";
		};
	}
	show(other);
	show(bank);
}