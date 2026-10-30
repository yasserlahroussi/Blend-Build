const config = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};
for (const ckey in config) {
  for (const key in config[ckey]) {
    const name1 = document.querySelector(`.${ckey}-${key}-name`)
    name1.textContent = config[ckey][key].name

    const price1 = document.querySelector(`.${ckey}-${key}-price`)
    price1.innerHTML = config[ckey][key].price + ",00 DH"
    price1.parentElement.querySelector("input").setAttribute("data-category", config[ckey][key].price)
  }
}

const total_final = document.getElementById('Total')
let selectedConfig = {
  base: null,
  taille: null,
  lait: null,
  caramel: null,
  vanille: null
};

// const boutonEspresso = document.getElementById("input1");
// boutonEspresso.addEventListener("click",choisir);

let input = document.querySelectorAll('input')
let final = 0
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('click', total1)

}
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('click', resultat22)

}
let totalGlobale = 0;
function total1(event) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {

    if (input[i].checked) {
      total += Number(input[i].dataset.category)
    }
  }
  totalGlobale = total;
  total_final.innerHTML = total

}
function resultat22(event) {
  let resultat = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      resultat += `<h6>${input[i].parentElement.querySelector("p").textContent}.</h6>`
      console.log(resultat)
    }
    
  }
  
}

const bilan = document.querySelector('.bilan')
const total_bilan = document.querySelector('.total_bilan')
const resultat = document.getElementById("resultat-de-commande")


function bilanTotal() {
bilan.innerHTML = ""
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      bilan.innerHTML += `
      <div>
        <p> ${input[i].parentElement.className}:  ${input[i].parentElement.querySelector("p").textContent}</p>
        <span> ${input[i].parentElement.querySelector("span").textContent}</span>
        
      </div>
    `
    }

  } total_bilan.innerHTML = ` <div> <p>Total</p><span>${totalGlobale},00 DH </span></div>`

}
function page_suivant() {
  const base22 = document.getElementById('base1')
  const base2 = document.getElementById('base2')
  if (totalGlobale!=0 && (base22.checked || base2.checked)) {
    
  const num1 = document.getElementById('number-one')
  const introduction = document.getElementById('Introduction');
  const option = document.getElementById('option');
  const total = document.getElementById('section3-total')
  const titre_bilan = document.getElementById('titre-bilan')
  const commande = document.getElementById('section-bilan')
  const titre_commande = document.getElementById('titre-apre commande')
  const info = document.getElementById('usless-info')
  if (introduction.style.display = "none") {
    introduction.style.display = "none"
    option.style.display = "none"
    total.style.display = "none"
    info.style.display="none"
    titre_bilan.style.display = "grid"
    commande.style.display = "grid"
    titre_commande.style.display = "flex"
    num1.style.display="flex"
    }
}else{
  alert('impossible, veuillez choisi une café')
}
}
function hahaha() {
  const num1 = document.getElementById('number-one')
  const introduction = document.getElementById('Introduction');
  const option = document.getElementById('option');
  const total = document.getElementById('section3-total')
  const titre_bilan = document.getElementById('titre-bilan')
  const commande = document.getElementById('section-bilan')
  const titre_commande = document.getElementById('titre-apre commande')
  const info = document.getElementById('usless-info')
 if (introduction.style.display = "none"){
      introduction.style.display = "grid"
    option.style.display = "grid"
    total.style.display = "flex"
    info.style.display="flexgi"
    titre_bilan.style.display = "none"
    commande.style.display = "none"
    titre_commande.style.display = "none"
    num1.style.display="none"
    }
}



