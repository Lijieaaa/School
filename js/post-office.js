window.onload=function(){
	shixi();
	inputs();

	
}
function shixi(){
	var shixi=document.getElementById("shixi");
	var a1=shixi.getElementsByTagName("a");
	for(var i=0;i<a1.length;i++){
		a1[i].onclick=function(){
			for(var j=0;j<a1.length;j++){
				a1[j].style.background="#fff"
			}
			this.style.background="#7FA7C3"
		}
	}
	

}
function inputs(){
	var inputs=document.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
		inputs[i].onfocus=function(){
			this.value="";
			if(this==inputs[inputs.length-1]){
				this.value="确认发布"
				
			}
			
		}
	
	}
}
function DisInfo(tt){
	var p=tt.parentNode.parentNode.nextSibling;
	 if(tt.value!==""){
	if(p.className=="form-validate-prompt"){
     p.style.display="none"
	}
}else{
	p.style.display="block"
}

 
}
function jobsel(jj){
	var jobchoice=document.getElementById("jobchoice");

	var lis=jobchoice.getElementsByTagName("li")
	if(jobchoice.style.display=="none"){
		jobchoice.style.display="block"
		for(var i=0;i<lis.length;i++){
			lis[i].onclick=function(){
            jj.value=this.children[0].innerHTML;
            jobchoice.style.display="none"
            DisInfo(jj)

       }
 	}
		 }

}
function xueli(xx){
	var xueli=document.getElementById("xueli");
	var lis=xueli.getElementsByTagName("li")
	if(xueli.style.display=="none"){
		xueli.style.display="block"
		for(var i=0;i<lis.length;i++){
			lis[i].onclick=function(){
            xx.value=this.innerHTML;
            xueli.style.display="none"
           
        }
    }
}

}