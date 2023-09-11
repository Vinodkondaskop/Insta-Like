var con =document.querySelector("#container");
var img =document.querySelector("img")
var love =document.querySelector("#ye");
var He=document.querySelector("#He");
img.addEventListener("dblclick",function(){
    love.style.transform="translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8;
    He.style.color="red";
    He.style.fontWeight="900";
    setTimeout(function(){
     love.style.opacity=0;
     },1000);
    setTimeout(function(){
love.style.transform="translate(-50%,-50%) scale(1)";
    },2000);
})
var bookmark=document.querySelector("#bookmark");
bookmark.addEventListener("click",function(){
    bookmark.style.fontWeight=900;
})

