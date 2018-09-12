//fill every paragraph with the last one's content.
//fill every paragraph with the last one's content keeping the cat strong.


let pars = document.getElementsByTagName('p');
let parText = pars[pars.length -1].innerText

for (let i = 0; i < pars.length; i++){
    pars[i].innerHTML = parText;
}