let scrollConcerts=document.getElementById("tour--concerts-scroll");

tourConcertItems=[
    {
        id:"1",
        day:"03",
        month:"Oct",
        name:"Festival Atlantikaldia",
        place:"Munich",
        description:"descripcion del concierto",
    },
    {
        id:"2",
        day:"03",
        month:"Nov",
        name:"Festival Atlantikaldia",
        place:"Madrid",
        description:"descripcion del concierto",
    },
    {
        id:"3",
        day:"12",
        month:"Feb",
        name:"Festival Atlantikaldia",
        place:"Tokio",
        description:"descripcion del concierto",
    },

    {
        id:"4",
        day:"23",
        month:"Mar",
        name:"Festival Atlantikaldia",
        place:"Berlín",
        description:"descripcion del concierto",
    }

];

function printTourListItems(item, indice){
    scrollConcerts.innerHTML  +=`
        <div class="tour--concert-item">
        <div class="concert--item-date">
        <img class="concert-icon" src="img/Polygon 1.png" alt="triángulo">
            <h2 class="concert--item-day">${item.day}</h2>
            <p class="concert--item-month">${item.month}</p>
        </div>
    
        <div class="concert--item-info">
            <h4 class="item--info-name">${item.name}</h4>
            <p class="item--info-place">${item.place}</p>
            <p class="item--info-description">${item.description}</p>
        </div>
        <div class="concert--arrow-button">
        <img onclick="abrir(${indice})"src="img/arrow-forward.png" alt="flecha">
        </div>
  
    </div>`;
       
}
    
function loadConcerts(){
    tourConcertItems.forEach((item, index)=>printTourListItems(item, index ));
    
    }
    loadConcerts();


const slider = document.querySelector(".tour--concerts-scroll");

    slider.addEventListener("wheel", (event) => {
    console.log(event);
    event.preventDefault();
    slider.scrollLeft += event.deltaY;
});

let isDown = false;
let startX;
let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
    isDown = true;  
   
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
 });
 
slider.addEventListener("mouseup", () => {
    isDown = false;
    // slider.classList.remove('active');
 });
 slider.addEventListener("mousemove", (e) => {
    if(!isDown) return;
     e.preventDefault();
     const x = e.pageX - slider.offsetLeft;
     console.log({x, startX});
     const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
 });

 function abrir(indice){
    showDetails(indice)
    document.querySelector(".tourDos").style.display="flex";   
}

function cerrar(){
    document.querySelector(".tourDos").style.display="none";
}

let tourInfo = document.querySelector(".tourDos");
function showDetails(indice){
    tourInfo.innerHTML  =`

    <div class="tourDos--concert-item">
    <a onclick="cerrar(${indice})"><img class="close" src="./img/eliminar-cruz.png"></a>

        <div class="concert--item-date tourDos--item-date">
            <h2 class="concert--item-day">${tourConcertItems[indice].day}</h2>
            <p class="concert--item-month">${tourConcertItems[indice].month}</p>
        </div>
    
        <div class="concert--item-info">
            <h4 class="item--info-name">${tourConcertItems[indice].name}</h4>
            <p class="item--info-place">${tourConcertItems[indice].place}</p>
            <p class="item--info-description">${tourConcertItems[indice].description}</p>
        </div>
      
    </div>`};


    