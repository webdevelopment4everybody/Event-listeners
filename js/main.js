"use strict";
let HTML = '';
for (let i=0; i<4; i++){
    HTML += `<div class="btn"> Paspausta kartu: <span>0</span></div>`
}
document.querySelector('body').innerHTML=HTML;

const buttons = document.querySelectorAll('.btn');

for(let i =0; i<buttons.length; i++){
    buttons[i].addEventListener('click', increment);
}
function increment(event){
    const btn= event.target;
    const span = btn.querySelector('span');
    let number=parseInt(span.innerText);
    span.innerText = number+1;
    
}