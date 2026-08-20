const bodyEl = document.getElementsByTagName("body")[0]; 


function colorFlip(color) {
  bodyEl.style.backgroundColor = color;
}

function rancolor(){

const red = Math.round(Math.random()*255);
const green= Math.round(Math.random()*255);
const blue = Math.round(Math.random()*255);

const color =`rgb(${red},${green},${blue} )`;
bodyEl.style.backgroundColor = color;
};