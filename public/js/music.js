



let listaCD=[

    {
    id:1,
    img:"./img/cd1.jpg",
    },

    {
    id:2,
    img:"./img/cd2.jpeg",
    },

    {
    id:3,
    img:"./img/cd3.jpg",
    },  
    
    {id:4,
    img:"./img/cd1.jpg",
    },
    
    {
    id:5,
    img:"./img/cd2.jpeg",
    },

    {
    id:6,
    img:"./img/cd3.jpg",
    },    
    {
    id:7,
    img:"./img/cd1.jpg",
    
    }
];

let DOMdiscos=document.getElementById("DOMdiscos");

function printDiscos(object){

DOMdiscos.innerHTML += `
                        <div class="swiper-slide">
                        <img src="${object.img}" />
                       `             
};

function loadDiscos(){
listaCD.forEach((object)=>printDiscos(object));
};

loadDiscos();



//libreria swiper

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 20,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
 
    pagination: {
    el: ".swiper-pagination",
  },
    loop: true,
    autoplay: 100,
      delay:500,
    disableOnInteraction: false,

  });

