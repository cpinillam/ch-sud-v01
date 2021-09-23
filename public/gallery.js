let listOfPicture =[
    {img: "./img/chesudaka3.jpg"},
    {img: "./img/che1.jpg"},
    {img: "./img/che2.jpg"},
    {img: "./img/che3cachafaz.jpg"},
    {img: "./img/che4.jpg"}
]

let galleryPrincipal = document.getElementById("galleryPrincipal");
let gallerySecundary = document.getElementById("gallerySecundary");

function orderPicture(){
    listOfPicture.reverse();
}

function printObjeto(gallery,galleryBox,photo) {
    gallery.innerHTML +=`
    <div class ="box ${galleryBox}">
        <img class = "gallery__img" src="${photo}" alt="foto Che sudaka">
    </div>
    ` 
}

function printElemento(i,photo){
    if(i==0){
        printObjeto(galleryPrincipal,"gallery__xlBox__img",photo)
    }
    else{
        printObjeto(gallerySecundary,"gallery__smallBox__img",photo)
        }
}

function loadElemento(){
    orderPicture();
    for(let i=0;i<listOfPicture.length;i++){
        let photo = listOfPicture[i].img
        printElemento(i,photo);
    }
}
loadElemento();



