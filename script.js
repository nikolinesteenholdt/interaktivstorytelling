const splash = document.getElementById("splash");

window.setTimeout(fjernSplash,3000);
function fjernSplash (){
    splash.style.animationName= "fadeOut";
}

const btn_snak = document.getElementById("billedeafann");

btn_snak.onmouseover = function(){
    audio_ann.play();
}

btn_snak.onmouseout = function(){
    audio_ann.pause();
}