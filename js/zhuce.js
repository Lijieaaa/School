function findStr(str,n){
var tmp=0;
for(var i=0;i<str.length;i++){
if(str.charAt(i)==n){
   tmp++;
   }
}
return tmp;
}
window.onload=function(){
var aInput=document.getElementsByTagName('input');
var oName=aInput[0];
var paw=aInput[1];
var paw2=aInput[2];
var aP=document.getElementsByTagName('p');
var name_msg=aP[0];
var pwd_msg=aP[1];
var pwd2_msg=aP[2];
var count=document.getElementById('count');
var aEm=document.getElementsByTagName('em');
var name_length=0;

//用户名
oName.onfocus=function(){
name_msg.style.display="block";
}
oName.onblur=function(){
//手机号验证
var phone=/^1[358][0123456789]\d{8}$/; 
//电子邮箱验证
var email=/^([\w-+=_]+(?:\.[\w-+=_]+)*)@(?!163.com$|sina.com$)((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
if(email.test(this.value)){
	name_msg.innerHTML='<i class="err"><img src="img/v.jpg" width="10" height="10"></i>OK！';
	
}
else if(phone.test(this.value)){
	name_msg.innerHTML='<i class="err"><img src="img/v.jpg" width="10" height="10"></i>OK！';
}
else if(this.value==""){
	name_msg.innerHTML='<i class="err"><img src="img/x.jpg" width="10" height="10"></i>请输入手机号或email'
}
else{
name_msg.innerHTML='<i class="err"><img src="img/x.jpg" width="10" height="10"></i>请输入正确的手机号或email';
}
}
//密码
paw.onfocus=function(){
pwd_msg.style.display="block";
}
paw.onkeyup=function(){
//大于5个字符为“中”
if(this.value.length>5){
aEm[1].className="active";
paw2.removeAttribute("disabled");
pwd2_msg.style.display="block";
}
else{
aEm[1].className="";
paw2.setAttribute("disabled","");
pwd2_msg.style.display="none";
}
//大于10个字符
if(this.value.length>10){
aEm[2].className="active";
}
else{
aEm[2].className="";
}
}
paw.onblur=function(){
var m=findStr(paw.value,paw.value[0]);
var re_n=/[^\d]/g;
var re_t=/[^a-zA-Z]/g;
//不能为空
        if(this.value==""){
        pwd_msg.innerHTML='<i class="err"><img src="img/x.jpg" width="10" height="10"></i>不能为空！';
        }
//不能用相同字符
else if(m==this.value.length){
pwd_msg.innerHTML='<i class="err"><img src="img/x.jpg" width="10" height="10"></i>不能用相同字符！';
}
//长度应为6-16个字符
else if(this.value.length<6||this.value.length>16){
pwd_msg.innerHTML='<i class="err"><img src="img/x.jpg" width="10" height="10"></i>长度应为6-16个字符！';

}
//不能全为数字
else if(!re_n.test(this.value)){
pwd_msg.innerHTML='<i class="err"><img src="img/x.jpg" width="10" height="10"></i>不能全为数字！';
}
//不能全为字母
else if(!re_t.test(this.value)){
pwd_msg.innerHTML='<i class="err"><img src="img/x.jpg" width="10" height="10"></i>不能全为字母！';
}
//OK
else{
pwd_msg.innerHTML='<i class="err"><img src="img/v.jpg" width="10" height="10"></i>OK！';
}
}
//确认密码
paw2.onblur=function(){
if(this.value!=paw.value){
pwd2_msg.innerHTML='<i class="err"><img src="img/x.jpg" width="10" height="10"></i>两次输入密码不一致！';
}
else{
pwd2_msg.innerHTML='<i class="err"><img src="img/v.jpg" width="10" height="10"></i>OK！';
}
}
}