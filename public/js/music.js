



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

