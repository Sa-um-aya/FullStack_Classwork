document.getElementById("1");
document.getElementById("2");
document.getElementById("3");
document.getElementById("4");
document.getElementById("5");
document.getElementById("6");
document.getElementById("7");
document.getElementById("8");

const uniquecard=[1,2,3,4,5,6,7,8];
const gamecards=[...uniquecard,...uniquecard];

function shuffle(uniquecard){
    for(let i=uniquecard.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [uniquecard[i],uniquecard[j]=uniquecard[j],uniquecard[i]];
    }
    return uniquecards;
}
gamecards=shuffle(gamecards);
