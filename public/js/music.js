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


//swipper

var swiper = new Swiper(".mySwiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
coverflow: {
  rotate: 30,
  stretch:0,
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
