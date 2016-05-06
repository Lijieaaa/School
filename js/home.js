window.onload=function(){
        sousuo();
        menu();
        csxz();
}
function sousuo(){
   var left=document.getElementById("search-left");
    var btn=document.getElementById("btn");
    var down=left.getElementsByTagName("div")[0];
    var a=down.getElementsByTagName("a");
   left.onmouseover=function(){
     down.style.display="block";
     aa();
   }
   left.onmouseout=function(){
    down.style.display="none";
   }
   function aa(){
    for(var i=0;i<a.length;i++){
       a[i].onclick=function(){
                var text=this.text;
                 btn.innerHTML=text;
                 down.style.display="none";
        }
    }
}
}
function menu(){
    var menu=document.getElementById("menu")
    var lis=menu.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++){
        lis[i].i=i;
        lis[i].onmouseover=function(){
            
            this.className="lihover" ;
            var h0 = (this.i - 1) * 84 +50 ;
             var y = this.getElementsByTagName("div")[0].offsetHeight;
                    var h = this.getElementsByTagName("div")[0].style.top + y;
                      if (h < h0) {
                        this.getElementsByTagName("div")[0].style.top = h0 + "px";
                    }
        }
        lis[i].onmouseout=function(){
            this.className="";
            

        }
    }
}
function csxz(){
    var changeCity=document.getElementById("changeCity");
    var cityMask=document.getElementById("cityMask");
    var box=document.getElementById("Box");
    var offbox=document.getElementById("offbox");
    var ul=document.getElementById("clearfix")
    var a=ul.getElementsByTagName("a");
    var strong=document.getElementsByTagName("strong")[0];
    changeCity.onclick=function(){
        cityMask.style.display="block";
        Box.style.display="block";

    }
    offbox.onclick=function(){
        cityMask.style.display="none";
        Box.style.display="none";
    }
    for(var i=0;i<a.length;i++){
        a[i].onclick=function(){
        strong.innerHTML=this.text;
        cityMask.style.display="none";
        Box.style.display="none";

        }
    }
}