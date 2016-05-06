window.onload=function(){
      camera();
      sex();
      // birth();
      xueli();
     

}
function camera(){
	var came=document.getElementById("camera");
	var tip=document.getElementById("tips");
	came.onmouseover=function(){
		tip.style.display="block";
	}
	came.onmouseout=function(){
		tip.style.display="none"
	}

}
function sex(){

	var sex=document.getElementById("sex");
	var boy=sex.getElementsByTagName("a")[0];
	var girl=sex.getElementsByTagName("a")[1];
	var  inputMr=document.getElementById("inputMr")
	var wei=inputMr.getElementsByTagName("a")[0];
	var yi=inputMr.getElementsByTagName("a")[1];
	var haiwai=document.getElementById("haiwai");
	var you=haiwai.getElementsByTagName("a")[0];
	var wu=haiwai.getElementsByTagName("a")[1];
	boy.onclick=function(){
		boy.className="iptRadio boy checked";
		girl.className="iptRadio girl"
	}
	girl.onclick=function(){
		girl.className="iptRadio girl checked";
		boy.className="iptRadio boy"
	}
	wei.onclick=function(){
		wei.className="iptRadio checked";
		yi.className="iptRadio";
	}
	yi.onclick=function(){
		yi.className="iptRadio checked";
		wei.className="iptRadio";
	}
	you.onclick=function(){
		you.className="iptRadio checked";
		wu.className="iptRadio";
	}
	wu.onclick=function(){
		wu.className="iptRadio checked";
		you.className="iptRadio";
	}
// function getByClassName(obj, cls){
//         var elements = obj.getElementsByTagName("*");
//         var result = [];
//         for(var i = 0; i < elements.length; i++){
//             if(elements[i].className == cls){
//                 result.push(elements[i]);
//             }
//         }
//         return result;
//     }
	
// 	  var items = getByClassName(editBase, "inputMr");
// 	  for(var i=0;i<items.length;i++){
// 	  	items[i].onclick=function(){
// 	  		alert(this)
// 	  		addClass(this,"checked")
// 	  	}
// 	  }
// 	  function addClass(abj,cls){
//           obj.className="iptRadio"+ cls
// 	  }
}
// function birth(){
// 	var birth=document.getElementById("birthDay");

// 	var calen=document.getElementById("calen");
// 	var span=calen.getElementsByTagName("span")[0]
// 	var calender=document.getElementById("calender");
// 	var nianul=document.getElementById("calender_ys")
// 	var nian=nianul.getElementsByTagName("li");
// 	var yue=calender.getElementsByTagName("td")
// 	birth.onclick=function(){
// 		if(calen.style.display=="none"){
// 			calen.style.display="block"
// 		}else{
// 			calen.style.display="none"
// 		}
// 	}
// 	span.onclick=function(){
// 		if(nianul.style.display=="block"){
// 			nianul.style.display="none";

// 		}else{
// 			nianul.style.display="block"
// 		}
// 	}
//  for(var i=0; i<nian.length;i++){
//  	nian[i].onclick=function(){
//        birth.value=this.innerHTML;
//        if(birth.value==this.innerHTML){
//        	nianul.style.display="none"
//        }
//  	}
//  	}
 
// for(var j=0; j<yue.length;j++){
// 	yue[j].onclick=function(){

// 		for(var n=0;n<yue.length;n++){
// 			yue[n].className=""
// 		birth.value=birth.value.substring(0,5);
// 		}
// 		if(birth.value!==this.innerHTML)
// 		this.className="hover"
// 		birth.value+=this.innerHTML;
// 	    calen.style.display="none"
// 	}

// }


// }
function xueli(){
	var hEducation=document.getElementById("hEducation");
	var span=hEducation.getElementsByTagName("span")[0];
	var ul=hEducation.getElementsByTagName("ul")[0];
	var lis=ul.getElementsByTagName("li")
	span.onclick=function(){
		if( ul.style.display=="block"){
        ul.style.display="none"
	}else{
		ul.style.display="block"
	}
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			span.innerHTML=this.innerHTML;
			ul.style.display="none"
		}
	}
}
}