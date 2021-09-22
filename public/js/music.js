//slider js puro

let listaCD=[

    {id:1,
    imgUp:"./img/cd1.jpg",
    imgDown:"./img/line.jpg",
    imgReflect:"./img/cd1.jpg"
    },

    {
    id:2,
    imgUp:"./img/cd2.jpeg",
    imgDown:"./img/line.jpg",
    imgReflect:"./img/cd2.jpeg"
    },

    {
    id:3,
    imgUp:"./img/cd3.jpg",
    imgDown:"./img/line.jpg",
    imgReflect:"./img/cd3.jpg"
    },  
     
    {id:4,
        imgUp:"./img/cd1.jpg",
        imgDown:"./img/line.jpg",
        imgReflect:"./img/cd1.jpg"
     },
    
     {
        id:5,
        imgUp:"./img/cd2.jpeg",
        imgDown:"./img/line.jpg",
        imgReflect:"./img/cd2.jpeg"
        },
    
    {
        id:6,
        imgUp:"./img/cd3.jpg",
        imgDown:"./img/line.jpg",
        imgReflect:"./img/cd3.jpg"
    }     
];

let DOMdiscos=document.getElementById("DOMdiscos");

function printDiscos(object){

    DOMdiscos.innerHTML += ` <div class="musicCD item">           
    <img class="cd__up" src="${object.imgUp}">
    <img class="cd__down" src="${object.imgDown}" >
    <div class="cd__reflex"> <div class="degrade__reflex"></div> <div class="relative__reflex"> <img src="${object.imgReflect}"></div> 
    </div> 
    </div> `
};

function loadDiscos(){
    listaCD.forEach((object)=>printDiscos(object));
};

loadDiscos();


const slider= document.querySelector(".music__discos");

let onClick = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown',(e)=>{
    onClick = true;
    console.log(e);
    startX= e.pageX - slider.offsetLeft;
    scrollLeft =slider.scrollLeft;  
});
slider.addEventListener('mouseleave',()=>{
    onClick=false; 
  });
  
  
  slider.addEventListener('mouseup',()=>{
    onClick=false;
  });
  
  slider.addEventListener('mousemove',(e)=>{
    if(!onClick)return //para la función de correr
    //console.count(onClick);
    //console.log(startX);
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    //console.log({x, startX}) //startx tiene numero fijo mientras movemos y x no
    const walk = (x-startX)*2; //con paréntesisi y *2px mejoramos el efecto
    //console.log(walk) //solo imprime desde que apreto cursor hasta que lo dejo ir
    slider.scrollLeft= scrollLeft-walk;
  });
  

/*slider con libreria swiper
var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	loop: true,
	centeredSlides: true,
	slidesPerView: 3,
	initialSlide: 1,
	keyboardControl: true,
	mousewheelControl: true,
	lazyLoading: true,
	preventClicks: false,
	preventClicksPropagation: false,
	lazyLoadingInPrevNext: true,
	nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',
	coverflow: {
		rotate: -20,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows : false,
	}
});
*/