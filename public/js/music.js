let listaCD=[

  {id:1,
  img:"./img/cd3.jpg",
  },

  {
  id:2,
  img:"./img/cd2.jpeg",
  },

  {
  id:3,
  img:"./img/cd1.jpg",
  },  

  {id:4,
  img:"./img/cd3.jpg",
},

{
  id:5,
  img:"./img/cd2.jpeg",
  },

{
  id:6,
  img:"./img/cd1.jpg",
  
}     
];

let DOMdiscos=document.getElementById("DOMdiscos");

function printDiscos(object){

DOMdiscos.innerHTML += `
                    <div class=" card-cd swiper-slide">
                    <img src="${object.img}"
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
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: false,
},
loop:true,
autoplay: {
  delay: 3000,
  disableOnInteraction:false,
},
pagination: {
  el: '.swiper-pagination',
},
});
