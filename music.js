var swiper =new swiper(".swiper-container",{
  effect: "coverflow",
  grabCursor:true,
  centeredSlides:true,
  slidesPerView:"auto",
  coverflowEffect:{
    rotate:50,
    strech:0,
    depth:100,
    slideShadows:true,

  }
  pagination:{
    el: ".swiper-pagination",
  },
});