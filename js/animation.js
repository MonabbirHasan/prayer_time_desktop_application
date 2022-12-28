
var count=200;
var i=0;
var container=document.querySelector("body")
while(i<count){
  var buble=document.createElement("i");

var x=Math.random()*window.innerWidth+'px'
var y=Math.random()*window.innerHeight+'px'
var size=Math.random()*10;
buble.style.width=size+'px'
buble.style.height=size+'px'
buble.style.left=x
buble.style.top=y;
container.appendChild(buble)
i++;

}

