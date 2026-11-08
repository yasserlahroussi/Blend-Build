
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
const onglet_1 = document.getElementById("onglet-1")
const onglet_2 = document.getElementById("onglet-2")
const formulaire1 = document.getElementById("formulaire-1")
const formulaire2 = document.getElementById("formulaire2")
const formulaire3 = document.getElementById("formulaire3")
const pro1 = document.getElementById("step-progression1")
const pro2 = document.getElementById("step-progression2")
const pro3 = document.getElementById("step-progression3")
const progress1 = document.getElementById("progresss1")
const progress2 = document.getElementById("progresss2")
const progress3 = document.getElementById("progresss3")
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
    name_eror.classList.add("hidden")
  } else {
    name_eror.classList.remove("hidden")
  }
})
let range_
let check_range = false
const affich_range = document.getElementById("range-affiche")
const range = document.getElementById("range")
range.addEventListener('input', (e) => {
  affich_range.textContent = "Intensité : " + e.currentTarget.value + " /10"
  range_ = e.currentTarget.value
  check_range = true
})
let text
let checkkk_desciption = false
const text_input = document.getElementById("text-produit")
text_input.addEventListener('input', (e) => {
  text = e.currentTarget.value
  const text_eror = document.getElementById("description-eror")
  checkkk_desciption = /^[a-zA-ZÀ-ÿ\s'-]+$/.test(text) && text != ""
  if (checkkk_desciption) {
    text_eror.classList.add("hidden")
  } else {
    text_eror.classList.remove("hidden")
  }
})
let prix
let checkkk_prix = false
const prix_produit = document.getElementById("prix-produit")
prix_produit.addEventListener('input', (e) => {
  prix = e.currentTarget.value
  const prix_eror = document.getElementById("num-eror")
  checkkk_prix = /^\d/.test(prix) && prix != ""
  if (checkkk_prix) {
    prix_eror.classList.add("hidden")
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
    image_eror1.classList.add("hidden")
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
    date_eror.classList.add("hidden")
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
    porcentage_eror.classList.add("hidden")
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
    console.log("kayan amal")
    check = false
    pourcentage.value = ""
    date.value = ""
    pourcentage_promo = undefined
    date_promo = undefined
    console.log(pourcentage_promo)
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
    formulaire1.classList.add("hidden")
    formulaire2.classList.remove("hidden")
    progress1.classList.add("hidden")
    progress2.classList.remove("hidden")
    pro2.classList.add("step-primary")
    e.preventDefault()
    swal.fire("BRAVO", "vous avez terminé le formulaire 1", "success")
  } else {
    swal.fire("ERROOOR", "les input sont incorrect or (empty)", "error")
    e.preventDefault()
  }
})

let check_tempera = false
let temperatur_chois
const temp = document.querySelectorAll('.tempreature')
document.querySelectorAll(".tempreature").forEach((btn) => {
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
const chekkk = document.querySelectorAll('#taille')
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
const laiiiit = document.querySelectorAll('#lait')
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
const suuuppp = document.querySelectorAll('#supplement')
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
  if (array_supplement.length != 0 && array_lait.length != 0 && array_taille.length != 0 && check_tempera && check_range) {
    console.log("hi")
    e.preventDefault()
    formulaire2.classList.add("hidden")
    formulaire3.classList.remove("hidden")
    progress2.classList.add("hidden")
    progress3.classList.remove("hidden")
    pro3.classList.add("step-primary")
    ajouter_ticket(ticket)
    swal.fire("BRAVO", "vous avez terminé le formulaire 2", "success")
  } else {
    swal.fire("ERROOOR", "les input sont incorrect or (empty)", "error")
    e.preventDefault()
  }
})
btn_retour.addEventListener('click', (e) => {
  formulaire2.classList.add("hidden")
  formulaire1.classList.remove("hidden")
  progress1.classList.remove("hidden")
  progress2.classList.add("hidden")
  pro2.classList.remove("step-primary")
  e.preventDefault()
})

const ticket = document.getElementById("ticket-de-review")
function ajouter_ticket(ticket) {
  ticket.textContent = ""
  ticket.className = "flex flex-col gap-4 text-gray-700"
  const p = document.createElement("p")
  if (pourcentage_promo == null && date_promo == null) {
    p.style.display = "none"
  } else {
    p.className = "bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-lg w-fit"
    p.textContent = `promo de  ${pourcentage_promo}% end en ${date_promov2}`
  }
  const h2 = document.createElement("h2")
  h2.className = "text-xl font-bold text-gray-900"
  h2.innerHTML = `Nom de produit : ${name_}`
  const prix_ = document.createElement("p")
  prix_.className = "font-semibold text-amber-700 text-lg"
  prix_.innerHTML = `prix : ${prix}`
  const description = document.createElement("p")
  description.className = "text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100"
  const image1 = document.createElement("img")

  image1.setAttribute("src", image)
  image1.className = "w-full h-full object-cover"
  description.textContent = "Description : " + text
  const taille = document.createElement("p")
  const affich_taille = document.createElement("p")
  affich_taille.textContent = "les tailles disponibles : "
  affich_taille.className = "text-sm"
  affich_taille.append(taille)
  taille.className = "font-medium text-gray-800"
  for (let i = 0; i < array_taille.length; i++) {
    taille.textContent += array_taille[i] + " ."
  }
  const genre = document.createElement("p")
  genre.className = "text-sm"
  genre.textContent = "categorie :" + temperatur_chois
  const lait = document.createElement("p")
  for (let i = 0; i < array_lait.length; i++) {
    lait.textContent += array_lait[i] + " ."
  }
  const affich_lait = document.createElement("p")
  lait.className = "font-medium text-gray-800"
  affich_lait.className = "text-sm"
  affich_lait.textContent = "les laits disponibles : "
  affich_lait.append(lait)
  const supplement = document.createElement("p")
  supplement.className = "font-medium text-gray-800"
  for (let i = 0; i < array_supplement.length; i++) {
    supplement.textContent += array_supplement[i] + " ."
  }
  const affich_summpliment = document.createElement("p")
  affich_summpliment.className = "text-sm"
  affich_summpliment.textContent = "les suplement disponibles : "
  affich_summpliment.append(supplement)
  ticket.append(p, h2, prix_, description, genre, affich_taille, affich_lait, affich_summpliment, image1)
}
const btn_validd = document.getElementById("btn-confirm")
const btn_retourrr = document.getElementById("btn-retourrr")

btn_retourrr.addEventListener('click', (e) => {
  formulaire3.classList.add("hidden")
  formulaire2.classList.remove("hidden")
  progress2.classList.remove("hidden")
  progress3.classList.add("hidden")
  pro3.classList.remove("step-primary")
  e.preventDefault()
})
btn_validd.addEventListener('click', (e) => {
  let objet = {}
  objet = { id: `c${coffeeProducts.length + 1}`, name: name_, category: temperatur_chois, price: prix, image: image }
  if (pourcentage_promo !== null && date_promov2 !== null && btn_promo.checked) {
    objet = { id: `c${coffeeProducts.length + 1}`, name: name_, category: temperatur_chois, price: prix, image: image, promo: pourcentage_promo, date: date_promov2 }
  }
  coffeeProducts.push(objet)
  console.log(objet)
  e.preventDefault()
  console.log(coffeeProducts)
  section2.classList = "hidden"
  section1.classList.remove("hidden")
  onglet_2.classList.remove("text-[green]")
  onglet_1.classList.add("text-[green]")
  affich_product_final(coffeeProducts)
  swal.fire("BRAVO", "element ajouter avec success", "success")
})
const div_container_product = document.getElementById("produit-container")
function affich_product_final(array) {
  div_container_product.textContent = ""
  for (const key in array) {
    const div = document.createElement("div")
    const div_contain_image = document.createElement("div")
    const titre = document.createElement("h2")
    titre.id = "test"
    titre.classList = "text-lg font-bold text-gray-800 "
    const imaaage = document.createElement("img")
    const prix_titre = document.createElement("p")
    prix_titre.classList = "text-amber-700 font-semibold mb-4"
    const categori = document.createElement("span")
    categori.classList = "text-sm text-gray-500 mb-2"
    const promo = document.createElement("span")
    const btn_remove__ = document.createElement("button")
    btn_remove__.textContent = "supprimer"
    btn_remove__.classList = "w-full bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-lg text-sm font-medium transition duration-200 btn-suprimer"
    btn_remove__.setAttribute("data-category", array[key].id)
    titre.textContent = array[key].name
    const div2 = document.createElement("div")
    div2.append(btn_remove__)
    imaaage.setAttribute("src", array[key].image)
    prix_titre.textContent = array[key].price + " DH"
    categori.textContent = array[key].category
    div.classList = "bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between p-4 border border-gray-100"
    div_contain_image.append(imaaage)
    div_contain_image.classList = "w-full h-48 overflow-hidden rounded-lg mb-3"
    imaaage.classList = "w-full h-full object-cover hover:scale-105 transition duration-300"
    const div_contain_text = document.createElement("div")
    div_contain_text.append(titre, prix_titre, categori)
    div_contain_text.classList = "flex flex-col flex-grow"
    div.append(div_contain_image, div_contain_text, div2)
    if (array[key].promo !== undefined && array[key].date !== undefined) {
      promo.textContent = array[key].promo + "%  fin le  " + array[key].date
      promo.classList = "bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md mb-2 w-fit"
      div.append(promo, div_contain_image, div_contain_text, div2)
    }
    div_container_product.append(div)
  }
}
affich_product_final(coffeeProducts)

const btn_ajouterr = document.getElementById("btn-ajouter")
const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
btn_ajouterr.addEventListener('click', (e) => {
  section1.classList.add("hidden")
  onglet_1.classList.remove("text-[green]")
  onglet_2.classList.add("text-[green]")
  section2.classList.remove("hidden")
  pro2.classList.remove("step-primary")
  pro3.classList.remove("step-primary")
  console.log(name_produit)
  check_lait = false
  checkkk_name = false
  check_image = false
  check_supplement = false
  check_taille = false
  check_tempera = false
  checkv2 = false
  checkkk_desciption = false
  checkkk_prix = false
  check_range = false
  temp.forEach((check) => { check.checked = false })
  laiiiit.forEach((check) => { check.checked = false })
  chekkk.forEach((check) => { check.checked = false })
  suuuppp.forEach((check) => { check.checked = false })
  formulaire2.classList.add("hidden")
  formulaire3.classList.add("hidden")
  formulaire1.classList.remove("hidden")
  progress2.classList.add("hidden")
  progress3.classList.add("hidden")
  progress1.classList.remove("hidden")
  swal.fire("BIENVENUE", "VEUILLEZ REMPLIR LES CHAMPS", "info")
})
onglet_1.addEventListener('click', (e) => {
  section1.classList.remove("hidden")
  section2.classList.add("hidden")
  e.target.classList.add("text-[green]")
  onglet_2.classList.remove("text-[green]")
  e.preventDefault()
})
onglet_2.addEventListener('click', (e) => {
  section2.classList.remove("hidden")
  section1.classList.add("hidden")
  e.preventDefault()
  e.target.classList.add("text-[green]")
  onglet_1.classList.remove("text-[green]")
  formulaire2.classList.add("hidden")
  formulaire3.classList.add("hidden")
  formulaire1.classList.remove("hidden")
})

const containerProduit = document.getElementById("produit-container")

containerProduit.addEventListener('click', (e) => {
  if (e.target.classList.contains("btn-suprimer")) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Produit supprimer avec success.",
          icon: "success"
        });
        const targetId = e.target.dataset.category
        const index = coffeeProducts.findIndex(item => item.id == targetId)
        coffeeProducts.splice(index, 1)
        affich_product_final(coffeeProducts)
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {

        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Produit not supprimer",
          icon: "error"
        });
      }
    });
  }
}
)
