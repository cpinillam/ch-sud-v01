const circleLines = document.querySelectorAll('.audioLines');
const circle = document.querySelector('#audioIcon');
const area = document.querySelector('.canvas_hero');



area.addEventListener("mousemove", (e)=>{
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
} )

area.addEventListener("mouseover", ()=>{
 
  circle.classList.add('makeVisible');
  circle.classList.remove('makeInvisible');
});

area.addEventListener("mouseout", ()=>{
 
   circle.classList.remove('makeVisible');
  circle.classList.add('makeInvisible');
});


area.addEventListener('click', audioToggle);

function audioToggle() {
  circle.querySelector(".texticon").classList.toggle('makeInvisible');

  for(let i = 0; i < circleLines.length; i++) { 
    circleLines[i].classList.toggle('volumeChanges');
  }
}

