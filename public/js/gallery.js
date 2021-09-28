let listOfPicture =[
    {img: "img/fotos/chesudaka3.jpg"},
    {img: "img/fotos/che1.jpg"},
    {img: "img/fotos/che2.jpg"},
    {img: "img/fotos/che3cachafaz.jpg"},
    {img: "img/fotos/che4.jpg"}
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

function getCSC() {

    fetch('https://pretagteam.com/question/uncaught-in-promise-syntaxerror-unexpected-end-of-json-input-when-fetch-get-data',{
            'mode':'no-cors',
            'method':'GET',
           'Content-Type': 'application/json'    
        }
     )
     .then(res=> res.arrayBuffer())
     .then(data => console.log(data))
    }

  getCSC()








