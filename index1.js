//setTimeout(function,delay);
setTimeout(()=>console.log("Hello"),1000);
var counter=0;
setInterval(()=>{
    counter+=1;
    console.log(counter+"Seconds have passed");
},1000);//
//WAP to create a timer for 15 minutes using setInterval and setTimeout.Display the passing time.
setTimeout(()=>console.log("Hey"),900);
var time=900;
let timer=setInterval1(()=>{
    time-=1;
     console.log(time+"Seconds have passed");
     display();
    if(time==0){
        clearInterval(timer);
    }
},1000);
function display(){
    let seconds=time%60;
    let minutes=Number.parseInt(time/60);
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;
}
