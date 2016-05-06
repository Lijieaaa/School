	window.onload=function(){
		lunbo();
	}
	function lunbo(){
		var container=document.getElementById('container');
		var list=document.getElementById('list');
		var buttons=document.getElementById('buttons').getElementsByTagName('span');
		var prev=document.getElementById('prev');
		var next=document.getElementById('next');
		var index=1;
		var action=false;
		var time;
		function play(){
		time=setInterval(function(){
			next.onclick()
		},3000);
	}
	function stop(){
		clearInterval(time);
	}
		function yuandian(){
			for(var i=0;i<buttons.length;i++){
				buttons[i].className='';
			}
			buttons[index-1].className='on';
		}

		function newleft(offset){
			action=true;
		  var newleft=parseInt(list.style.left)+offset;
		  var time=300;
		  var interval=10;
		  var speed=offset/(time/interval);
		  function go(){
		  	if((speed<0&&parseInt(list.style.left)>newleft)||(speed>0&&parseInt(list.style.left)<newleft)){
		  		list.style.left=parseInt(list.style.left)+speed+"px";
		  		setTimeout(go,interval);
		  	}
		  	else{
		  		 list.style.left=newleft+"px";
			if(newleft<-5448){
				
				list.style.left=-1362+"px";
			}
			if(newleft>-1362){
				
          list.style.left=-5448+"px";
			}
			action = false;
		  	}
		  }
         go();
		 
		}
		next.onclick=function(){
			if(index==4){
				index=1;
			}			
			else{index+=1;}
			yuandian();
			if(!action){
			newleft(-1362);
		};
		}
		prev.onclick=function(){
			if(index==1){
				index=4;debugger;
			}else{
			index-=1;}
			yuandian();
			if (!action){
			newleft(1362);
		};
		}
	 for (var i = 0;i<buttons.length;i++) {
                buttons[i].onclick = function () {
             if (this.className=="on") {
             	return;
             };
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -1362 * (myIndex - index);
                     if(!action){
                    newleft(offset);};
                    index = myIndex;
                    yuandian();
                }
            }
      container.onmouseover=stop;
      container.onmouseout=play
	}