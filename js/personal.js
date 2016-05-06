
function tianjia(a){
    var add=a.parentNode.nextSibling;
  
    if(add.nodeType==1)
    { 
    	add.style.display="block"
    }
   else{
   	add=add.nextSibling;
   	if(add.style.display=="block"){
   		var text=a.children[1].innerHTML="添加"
    	add.style.display="none";
    	
    }
   	else{add.style.display="block"
   		text=a.children[1].innerHTML="取消"}
   }
}
function quxiao(b){
	var qu=b.parentNode.parentNode;
	qu.style.display="none";
}
