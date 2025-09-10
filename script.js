let canv = document.getElementById("myCanvas");
let ctx = canv. getContext("2d");

 let posX = 300;
 let posY = 200;

let speedX = Math.random() *10 - 5; // velocidade 
let speedY = Math.random() *10 - 5; // velocidade

let radius = 20;


function Desenha()

{

    ctx. clearRect(0, 0, canv.clientWidth, canv.height); 
    posX += speedX // SOMA 1 AO VALOR DE posX
    posY += speedY;
    if (posX > canv.width - radius|| posX<radius)
    speedX = -speedX;
    if (posY > canv.height - radius || posY< radius)    
        speedY = -speedY; 

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(posX,posY,radius,0,2*Math.PI);
    ctx.stroke();
}
setInterval(Desenha,20); // chama a função a cada 20 milessegundos
