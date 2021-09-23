 /*let header = document.getElementById("header");
 let posicion = scrollY
 posicion = window.addEventListener('scrollY',animacionheader());

 function animacionheader(){
    if (posicion > 0){
    header.style.opacity = 0;    
    } else {
    header.style.opacity = 1;    
    }
}
window.addEventListener("scroll", function(event){
    console.log(window.scrollY)
    let currentScroll
    /*let header = document.getElementById("header");
    header.classList.toggle("abajo", window.scrollY>0);*/
//})
let ultimoScroll = 0

window.addEventListener("scroll", function(event){
    let scrollActual =  window.scrollY;
    if (scrollActual > ultimoScroll){
        console.log("esta bajando")
        escondermenu()
        ultimoScroll = scrollActual
    }
    else{
        console.log("subiendo")
        aparecermenu()
        ultimoScroll = scrollActual
    } 
})
function escondermenu(){
    header = document.getElementById("header")
    header.style.opacity = 0
}
function aparecermenu(){
    header = document.getElementById("header")
    header.style.opacity = 1
}



  
    
    
/*    window.scrollY(function(event){
        console.log(event)
        let scrollactual = window.scrollY()
        if (scrollactual > ultimoscroll);
})
/*
let lastScroll = window.scrollTop();

window.scroll(function() {
   const currentScroll = window.scrollTop(); 
   if (currentScroll > lastScroll){
      // scroll down
      $('#hiddenButton').removeClass().addClass('hidden');
   } else {
      // scroll up
      $('#hiddenButton').removeClass().addClass('stickyButton');
   }
   
   // scroll update
   lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});*/