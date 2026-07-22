// ===============================
// CANVAS CODE BACKGROUND
// ===============================


const canvas = document.getElementById("code");
const ctx = canvas.getContext("2d");


function resizeCanvas(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}


resizeCanvas();

window.addEventListener("resize",resizeCanvas);



const letters = "01 DATA AI CODE".split("");

const fontSize = 13;

let columns = canvas.width / fontSize;

let drops = Array(Math.floor(columns)).fill(1);



function draw(){

ctx.fillStyle="rgba(0,0,0,0.03)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);


ctx.fillStyle="rgba(0,247,255,0.20)";

ctx.font=fontSize+"px monospace";



for(let i=0;i<drops.length;i++){


let text =
letters[Math.floor(Math.random()*letters.length)];


ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);



if(
drops[i]*fontSize > canvas.height
&& Math.random()>0.98
){

drops[i]=0;

}


drops[i]++;


}


}



setInterval(draw,80);







// ===============================
// EMAILJS MESSAGE FORM
// ===============================



document.addEventListener("DOMContentLoaded",()=>{


emailjs.init(
"hhxgoyeEfEqFF-TxH"
);



const form =
document.getElementById("contact-form");



if(form){


form.addEventListener(
"submit",
function(e){


e.preventDefault();



emailjs.send(

"service_emran",

"template_y6hwt0b",

{

name:this.name.value,

email:this.email.value,

message:this.message.value

}


)

.then(()=>{


alert(
"Message sent successfully!"
);


this.reset();


})


.catch(error=>{


console.log(error);


alert(
"Failed to send message."
);


});



});


}



});







// ===============================
// WELCOME SCREEN
// ===============================



window.addEventListener(
"load",
()=>{


const screen =
document.getElementById(
"welcome-screen"
);



const typing =
document.getElementById(
"typing-text"
);



if(!screen || !typing)
return;




const text =
"Welcome to Emran Azizi Portfolio";


let index=0;



function type(){


if(index < text.length){


typing.innerHTML +=
text.charAt(index);


index++;


setTimeout(
type,
55
);


}


}



type();




setTimeout(()=>{


typing.classList.add(
"glitch"
);


},1200);





setTimeout(()=>{


typing.classList.remove(
"glitch"
);


typing.innerHTML =
"System Ready";



},2500);






setTimeout(()=>{


screen.style.opacity="0";



setTimeout(()=>{


screen.style.display="none";


document.body.classList.add(
"loaded"
);


},800);



},3800);



});
