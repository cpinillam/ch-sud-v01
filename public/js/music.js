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


//libreria swiper

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
 
    pagination: {
    el: ".swiper-pagination",
  },
  loop:true,
  autoplay: {
    delay: 500,
    disableOnInteraction:false,
  },
});
