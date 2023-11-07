const splash = document.getElementById("splash");

window.setTimeout(fjernSplash,3000);
function fjernSplash (){
    splash.style.animationName= "fadeOut";
}