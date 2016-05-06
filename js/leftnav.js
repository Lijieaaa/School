window.onload=function() {
    admin();
}
function admin(){
 var lis=document.getElementsByTagName('li');
 var dls=document.getElementsByTagName('dl');
 for(var i=0;i<lis.length;i++){
 	lis[i].id=i;
 	lis[i].onclick=function(){
       if(this.className=="over"){
 			this.className="";
 			 dls[this.id].style.display="none";
 		}else{
 			for(var j=0;j<lis.length;j++){
 			lis[j].className="";
 			dls[j].style.display="none"
 		}
 			this.className="over";
 	  dls[this.id].style.display="block";

 		}


 	}
 }

}