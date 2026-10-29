setTimeout(()=>
    
    {
        document.body.style.backgroundColor="green";
    }
,3000);
const starttime=0;
function updatetime(){
    const currenttime=Date.now();
    const lapse=currenttime-starttime;
    const second=Math.floor(lapse/1000);
    document.getElementById("timer").innerText=lapse;
}
setInterval(updatetime,100);
