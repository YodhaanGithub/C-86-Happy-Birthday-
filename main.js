canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_x=10;
car_y=10;

car_img="car1.png";
background_img="Background.jpg";

car_width="150";
car_height="80";

function add(){
    bgimg=new Image();
    bgimg.onload=uploudbg;
    bgimg.src=background_img;  
    
    carimg=new Image();
    carimg.onload=uploudcar;
    carimg.src=car_img;   
}

function uploudbg(){
    ctx.drawImage(bgimg,0,0, canvas.width, canvas.height);
}
