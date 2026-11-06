
let coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
  { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
  { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

const formulaire1 = document.getElementById("formulaire-1")
const formulaire2 = document.getElementById("formulaire2")
const formulaire3 = document.getElementById("formulaire3")

let name_
let checkkk_name = false
const name_produit = document.getElementById("name-produit")
name_produit.addEventListener('input', (e) => {
  let array = []
  for (let i = 0; i < coffeeProducts.length; i++) {
    array.push(coffeeProducts[i].name)
  }
  console.log(array)
  name_ = e.currentTarget.value
  const name_eror = document.getElementById("name-eror")
  console.log(name_)
  checkkk_name = /^[a-zA-ZÀ-ÿ\s'-]+$/.test(name_) && name_ != "" && !array.includes(name_)
  if (checkkk_name) {
    name_eror.classList = "hidden"
  } else {
    name_eror.classList.remove("hidden")
  }
})
let text
let checkkk_desciption = false
document.querySelectorAll('#text-produit').forEach((input) => {
  input.addEventListener('input', (e) => {
    text = e.currentTarget.value
    const text_eror = document.getElementById("description-eror")
    checkkk_desciption = /^[a-zA-ZÀ-ÿ\s'-]+$/.test(text) && text != ""
    if (checkkk_desciption) {
      text_eror.classList = "hidden"
    } else {
      text_eror.classList.remove("hidden")
    }

  })
})
let prix
let checkkk_prix = false
const prix_produit = document.getElementById("prix-produit")
prix_produit.addEventListener('input', (e) => {
  prix = e.currentTarget.value
  const prix_eror = document.getElementById("num-eror")
  checkkk_prix = /^\d/.test(prix) && prix != ""
  if (checkkk_prix) {
    prix_eror.classList = "hidden"
  } else {
    prix_eror.classList.remove("hidden")
  }
})
let image
let check_image
const image_imput = document.getElementById("image-produit")
image_imput.addEventListener('input', (e) => {
  const image_eror1 = document.getElementById("image-eror")
  image = e.currentTarget.value
  console.log(image)
  check_image = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\?[^#]*)?(#.*)?$|\.(jpg|jpeg|png|webp|gif|svg)$/i.test(image) && image != ""
  console.log(check_image)
  if (check_image) {
    image_eror1.classList = "hidden"
  } else {
    image_eror1.classList.remove("hidden")
  }
})
let check
let date_promo
let date_promov2
const now = new Date();
console.log(now)
let checkkk_date = false
const pourcentage = document.getElementById("pourcentage")
const date = document.getElementById("date")
date.addEventListener('input', (e) => {
  const date_eror = document.getElementById("date-eror")
  date_promo = new Date(e.currentTarget.value + "T00:00:00")
  date_promov2 = e.currentTarget.value
  now.setHours(0, 0, 0, 0)

  checkkk_date = e.currentTarget.value !== "" && date_promo >= now

  if (checkkk_date) {
    date_eror.classList = "hidden"
  } else {
    date_eror.classList.remove("hidden")
  }
})
let pourcentage_promo
let checkkk_pourecntage = false
pourcentage.addEventListener('input', (e) => {
  console.log(e.currentTarget.value)
  pourcentage_promo = e.currentTarget.value
  console.log(pourcentage_promo);
  checkkk_pourecntage = /^\d{2}$/.test(pourcentage_promo) && pourcentage_promo != ""
  const porcentage_eror = document.getElementById("pourcentage-eror")
  if (checkkk_pourecntage && Number(pourcentage_promo) < 100) {
    porcentage_eror.classList = "hidden"
  } else {
    porcentage_eror.classList.remove("hidden")
  }
})
const promo = document.querySelectorAll("#promo")
const btn_promo = document.getElementById("btn_promo")
btn_promo.addEventListener('click', (e) => {
  if (e.currentTarget.checked) {
    promo.forEach((input) => {
      input.style.display = "block"
    })
    check = true
  } else {
    promo.forEach((input) => {
      input.style.display = "none"
    })
    check = false
  }
})
let checkv2 = false

const btn_1 = document.getElementById("btn-suivant-1")
btn_1.addEventListener('click', (e) => {
  if (btn_promo.checked) {
    checkv2 = checkkk_pourecntage && checkkk_date

  } else {
    checkv2 = true
  }
  console.log(checkv2)
  if (checkkk_name && checkkk_prix && checkkk_desciption && checkv2 && check_image) {
    formulaire1.classList = "hidden"
    formulaire2.classList.remove("hidden")
    e.preventDefault()
  } else {
    alert("eror en formulaire 1")
    e.preventDefault()
  }
})

let check_tempera = false
let temperatur_chois
document.querySelectorAll("#tempreature").forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.checked) {
      check_tempera = true
      temperatur_chois = e.currentTarget.closest('#temperature-chois').textContent.trim()
      console.log(typeof (temperatur_chois))
    } else {
      check_tempera = false
    }
  })
})

let array_taille = []
let check_taille
document.querySelectorAll('#taille').forEach((check) => {
  check.addEventListener('click', (e) => {
    check_taille = e.currentTarget.closest('#taille-choisi').textContent.trim()
    if (check.checked) {
      if (!array_taille.includes(check_taille)) {
        array_taille.push(check_taille)
        console.log(array_taille)
      }
    } else {
      array_taille = array_taille.filter((option_flitre) => option_flitre !== check_taille)
      console.log(array_taille)
    }
  })
})

let array_lait = []
let check_lait
document.querySelectorAll('#lait').forEach((check) => {
  check.addEventListener('click', (e) => {
    check_lait = e.currentTarget.closest('#lait-choisi').textContent.trim()
    if (check.checked) {
      if (!array_lait.includes(check_lait)) {
        array_lait.push(check_lait)
        console.log(array_lait)
      }
    } else {
      array_lait = array_lait.filter(lait => lait !== check_lait)
      console.log(array_lait)
    }
  })
})



let array_supplement = []
let check_supplement

document.querySelectorAll('#supplement').forEach((check) => {
  check.addEventListener('click', (e) => {
    check_supplement = e.currentTarget.closest('#supplement-choisi').textContent.trim()
    if (check.checked) {
      if (!array_supplement.includes(check_supplement)) {
        array_supplement.push(check_supplement)
        console.log(array_supplement)
      }
    } else {
      array_supplement = array_supplement.filter(check => check !== check_supplement)
      console.log(array_supplement)
    }
  })
})
const btn_formulaire_2 = document.getElementById("btn-suivant-2")
const btn_retour = document.getElementById("retour")
btn_formulaire_2.addEventListener('click', (e) => {
  if (array_supplement.length != 0 && array_lait.length != 0 && array_taille.length != 0 && check_tempera) {
    console.log("hi")
    e.preventDefault()
    formulaire2.classList = "hidden"
    formulaire3.classList.remove("hidden")
    ajouter_ticket(ticket)
  } else {
    alert("complete le formulaire")
    e.preventDefault()
  }
})
btn_retour.addEventListener('click', (e) => {
  formulaire2.classList = "hidden"
  formulaire1.classList.remove("hidden")
  e.preventDefault()
})

const ticket = document.getElementById("ticket-de-review")
function ajouter_ticket(ticket) {
  ticket.textContent = ""
  const p = document.createElement("p")
  if (pourcentage_promo == null && date_promo == null) {
    p.style.display = "none"
  } else {
    p.textContent = `promo de  ${pourcentage_promo}% end en ${date_promov2}`
  }
  const h2 = document.createElement("h2")
  h2.innerHTML = `Nom de produit : ${name_}`
  const prix_ = document.createElement("p")
  prix_.textContent = "prix : " + prix + "DH"
  const description = document.createElement("p")
  const image1 = document.createElement("img")
  image1.setAttribute("src", image)
  description.textContent = "Description : " + text
  const taille = document.createElement("p")
  const affich_taille = document.createElement("p")
  affich_taille.textContent = "les tailles disponibles : "
  affich_taille.append(taille)
  for (let i = 0; i < array_taille.length; i++) {
    taille.textContent += array_taille[i] + " ,"
  }
  const genre = document.createElement("p")
  genre.textContent = "categorie :" + temperatur_chois
  const lait = document.createElement("p")
  for (let i = 0; i < array_lait.length; i++) {
    lait.textContent += array_lait[i] + " ,"
  }
  const affich_lait = document.createElement("p")
  affich_lait.textContent = "les laits disponibles : "
  affich_lait.append(lait)
  const supplement = document.createElement("p")
  for (let i = 0; i < array_supplement.length; i++) {
    supplement.textContent += array_supplement[i] + " ,"
  }
  const affich_summpliment = document.createElement("p")
  affich_summpliment.textContent = "les suplement disponibles : "
  affich_summpliment.append(supplement)
  ticket.append(p, h2, prix_, description, genre, affich_taille, image1, affich_lait, affich_summpliment)
}
const btn_validd = document.getElementById("btn-confirm")
const btn_retourrr = document.getElementById("btn-retourrr")

btn_retourrr.addEventListener('click', (e) => {
  formulaire3.classList = "hidden"
  formulaire2.classList.remove("hidden")
  e.preventDefault()
})
btn_validd.addEventListener('click', (e) => {
  let objet = {}
  objet = { id: `c${coffeeProducts.length + 1}`, name: name_, category: temperatur_chois, prix: Number(prix), image: image }
  if (pourcentage_promo !== null && date_promov2 !== null) {
    objet = { id: `c${coffeeProducts.length + 1}`, name: name_, category: temperatur_chois, prix: Number(prix), image: image, promo: pourcentage_promo, date: date_promov2 }
  }
  coffeeProducts.push(objet)
  console.log(objet)
  e.preventDefault()
  console.log(coffeeProducts)
  section2.classList = "hidden"
  section1.classList.remove("hidden")
  affich_product_final(coffeeProducts)
})
const div_container_product = document.getElementById("produit-container")
function affich_product_final(array) {
  div_container_product.textContent = ""
  for (const key in array) {
    const div = document.createElement("div")
    const titre = document.createElement("h2")
    titre.id = "test"
    const imaaage = document.createElement("img")
    const prix_titre = document.createElement("p")
    const categori = document.createElement("span")
    const promo = document.createElement("span")
    const btn_remove__ = document.createElement("button")
    btn_remove__.textContent = "supprimer"
    btn_remove__.id = "btn-suprimer"
    btn_remove__.setAttribute("data-category", array[key].id)
    titre.textContent = array[key].name
    const div2 = document.createElement("div")
    div2.append(btn_remove__)
    imaaage.setAttribute("src", array[key].image)
    prix_titre.textContent = array[key].prix
    categori.textContent = array[key].category

    div.append(imaaage, titre, prix_titre, categori, div2)
    if (array[key].promo !== undefined && array[key].date !== undefined) {
      promo.textContent = array[key].promo + " end en " + array[key].date
      div.append(promo)
    }
    div_container_product.append(div)
  }
}
affich_product_final(coffeeProducts)

const btn_ajouterr = document.getElementById("btn-ajouter")
const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
btn_ajouterr.addEventListener('click', (e) => {
  section1.classList = "hidden"
  section2.classList.remove("hidden")
})

document.querySelectorAll('#btn-suprimer').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let target = ""
    target = e.currentTarget.dataset.category

        console.log(target)
      coffeeProducts = coffeeProducts.filter(items => String(items.id) !== target)
        console.log(coffeeProducts)
    affich_product_final(coffeeProducts)
  })
})
