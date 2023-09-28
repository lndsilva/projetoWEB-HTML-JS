let param = document.getElementsByTagName('p');

// alert(param[0].nodeName);

const btn = document.querySelector("button");

function numeroRandomico(numero){
    return Math.floor(Math.random() * (numero + 1));
}

btn.addEventListener("click", () =>{
    const numRand = `rgb(${numeroRandomico(255)}, ${numeroRandomico(255)}, ${numeroRandomico(255)})`;
    document.body.style.backgroundColor = numRand;
});

const elemet = document.getElementById("intro");

const tagName = document.getElementsByTagName('p');

const x = document.getElementById('main');
const y = x.getElementsByTagName('p');

document.getElementById("main").innerHTML = "Senac Largo Treze";
document.getElementById("myImage").src = "imagens/smiley_n.gif";

document.getElementById("data").innerHTML = "Data:  " + Date();

console.log(tagName);

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}
