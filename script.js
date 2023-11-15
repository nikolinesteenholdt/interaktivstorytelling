/*const splash = document.getElementById("splash");

window.setTimeout(fjernSplash,3000);
function fjernSplash (){
    splash.style.animationName= "fadeOut";
}*/

const btn_snak = document.getElementById("billedeafann");

btn_snak.onmouseover = function(){
    audio_ann.play();
}

btn_snak.onmouseout = function(){
    audio_ann.pause();
}

let nuBillede = 0;
let billedekarussel = document.getElementById("billedekarussel");
const galleri1 = document.getElementById("galleri1");
const galleri2 = document.getElementById("galleri2");
const galleri3 = document.getElementById("galleri3");

setInterval(function(){
    if(nuBillede==0){
        galleri1.style.display = "inline";
        galleri2.style.display = "none";
        galleri3.style.display = "none";
        nuBillede+=1;
    }
    else if(nuBillede==1){
        galleri1.style.display = "none";
        galleri2.style.display = "inline";
        galleri3.style.display = "none";
        nuBillede+=1;
    }
    else if(nuBillede==2){
        galleri1.style.display = "none";
        galleri2.style.display = "none";
        galleri3.style.display = "inline";
        nuBillede=0;
    }    
    }, 3000);

