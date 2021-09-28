let listaCD=[

  {
  id:1,
  img:"./img/cd3.jpg",
  spotify: "https://open.spotify.com/embed/album/0F5212xGK3iyDa1b2vf9Q2" ,
  },

  {
  id:2,
  img:"./img/cd2.jpeg",
  spotify: "https://open.spotify.com/embed/album/41Lnt28xeVEe1IFepkTpXN",
  },

  {
  id:3,
  img:"./img/cd1.jpg",
  spotify:src="https://open.spotify.com/embed/album/2P2KvTxV6MixUgNoETjmlK",
  },  

  {
  id:4,
  img:"./img/cd3.jpg",

  spotify: "https://open.spotify.com/embed/album/0F5212xGK3iyDa1b2vf9Q2" ,
  },


{
  id:6,
  img:"./img/cd1.jpg",
  spotify:"https://open.spotify.com/embed/album/2P2KvTxV6MixUgNoETjmlK",
}     
];

let DOMdiscos=document.getElementById("DOMdiscos");

function printDiscos(object){

DOMdiscos.innerHTML += `
                    <div class=" card-cd swiper-slide">
                    <img src="${object.img}">
                    <iframe  class="play-spotify" id="${object.id}" src="${object.spotify}"></iframe>
                    </div>
                    `
                    };

function loadDiscos(){
listaCD.forEach((object)=>printDiscos(object));
};

loadDiscos();



/*/function position() { 
  if(translate3d(-1223.5px, 0px, 0px);
    )   { 
     medio.pause(); 
     reproducir.value='Reproducir';   
  } 
  else 
  { 
     medio.play(); 
     reproducir.value='Pausa';   
  } 
}

      touchStart: function (e) {
                 // ¡Atención! Al principio, solo escribí setTimout en el evento touchStart y reproduje audio en él. Como resultado, no había sonido en el teléfono. La inspección visual estaba relacionada con algún mecanismo de swiper. Solución: elimine setTimeout y reproduzca audio en las devoluciones de llamada touchStart y slideChange, que pueden lograr el propósito de deslizar la reproducción + clic para reproducir. Todo el proceso es el siguiente: el evento de inicio táctil se activa primero, lo que indica que el usuario está dispuesto a reproducir el audio, pero el índice del audio se calcula incorrectamente, y luego la devolución de llamada slideChange se activa inmediatamente, se reemplaza con el audio correcto y se reproduce. De esta manera, el audio para golpes y clics es correcto.
        var touchIndex = Number(e.target.getAttribute('data-index'))
        // setTimeout(function () {
          audio.src = data[activeIndex].audio
          labaDom = document.querySelectorAll('.laba')[activeIndex]
          labaDom.src = labaGif
          audio.play()
        // }, 200);
      },
      slideChange: function () {
        activeIndex = this.activeIndex
        audio.src = data[activeIndex].audio
        labaDom = document.querySelectorAll('.laba')[activeIndex]
        labaDom.src = labaGif
        audio.play()
      },
    }
  });
  
*/

var swiper = new Swiper(".mySwiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
coverflow: {
  rotate: 30,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: false,
},
loop:true,
//autoplay: {
 // delay: 3000,
 // disableOnInteraction:false,
//},
pagination: {
  el: '.swiper-pagination',
},
});
