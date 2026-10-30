// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
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

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "latte.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "mug.jpg" }
];


//1: ajoute des element en panier :
const panier = document.getElementById("articles-panier")
const div = document.createElement("div");
function addelement(famille, key) {
  if (famille[key].quantity > 0) {
    const panier = document.getElementById("articles-panier")
    const div = document.createElement("div");
    div.className = "articles";
    div.style = "display:flex ;justify-content: space-between;"
    const div1 = document.createElement("div")
    const image_article = document.createElement("img")
    image_article.className = "image-article"
    image_article.style.width = "50px"
    image_article.setAttribute("src", famille[key].image)
    div1.append(image_article)
    const div2 = document.createElement("div")
    const name_article = document.createElement("div")
    name_article.className = "name-article"
    name_article.textContent = famille[key].name
    const price_article = document.createElement("div")
    price_article.className = "price-article"
    price_article.textContent = famille[key].price
    const btn_remove = document.createElement("button")
    btn_remove.className = "remove"
    btn_remove.textContent = "remove"
    btn_remove.setAttribute("data-category", key)
    div2.append(name_article, price_article, btn_remove)
    const div3 = document.createElement("div")
    const quantity_article = document.createElement("div")
    quantity_article.className = "quantity-article"
    quantity_article.textContent = famille[key].quantity
    quantity_article.setAttribute("data-category", key)
    const btn_moin = document.createElement("button")
    btn_moin.textContent = "-"
    const btn_plus = document.createElement("button")
    btn_plus.textContent = "+"
    btn_moin.className = "button-moin"
    btn_plus.className = "button-plus"
    div3.append(btn_moin, quantity_article, btn_plus)
    div3.style = "display: flex; align-items: baseline; align-items: end;"
    div.append(div1, div2, div3)
    div.id = `article${key}`
    panier.appendChild(div);
  }
}

for (const key in coffeeCart) {
  addelement(coffeeCart, key)
}

//2: mettre les boutons effective

//A: btn de moins :

function btn_moin_() {
  document.querySelectorAll('.button-moin').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const objet_key = btn.parentElement.querySelector(".quantity-article").dataset.category
      if (+btn.parentElement.querySelector(".quantity-article").textContent > 1) {
        btn.parentElement.querySelector(".quantity-article").textContent = +btn.parentElement.querySelector(".quantity-article").textContent - 1
        coffeeCart[objet_key].quantity = +btn.parentElement.querySelector(".quantity-article").textContent
      }
      total(coffeeCart)
    });
  });
}
btn_moin_()

//B: btn de plus:

function btn_plus_() {
  document.querySelectorAll('.button-plus').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const objet_key = btn.parentElement.querySelector(".quantity-article").dataset.category
      btn.parentElement.querySelector(".quantity-article").textContent = +btn.parentElement.querySelector(".quantity-article").textContent + 1
      coffeeCart[objet_key].quantity = +btn.parentElement.querySelector(".quantity-article").textContent
      // console.log(coffeeCart)
      total(coffeeCart)
    });
  });
}

btn_plus_()
//C: btn de remove:



function remove_() {
  const panier_article = document.getElementById("articles-panier")
  document.querySelectorAll('.remove').forEach((e) => {
    e.addEventListener("click", (e) => {
      const objet_key = e.currentTarget.dataset.category
      coffeeCart[objet_key].quantity = 0
      // console.log(coffeeCart)
      let remove_target = e.currentTarget.closest(".articles")
      panier_article.removeChild(remove_target)
      total(coffeeCart)
    });
  });
}
remove_()

// 3: calculer le total :

function total(objet) {
  const total_bilan = document.getElementById("total-en-chifre")
  let total = 0
  for (const key in objet) {
    total += objet[key].price * objet[key].quantity
  }
  total_bilan.textContent = total
}
total(coffeeCart)

//4: live search :


//A:creation de model:
const model = document.getElementById("model-id")
const btn_ajout = document.getElementById("button-ajoute")
// console.log(model)
// console.log(btn_ajout)
btn_ajout.addEventListener('click', (e) => {
  model.style = "display: block"
})

const close_model = document.getElementById("close")
close_model.addEventListener('click', (e) => {
  model.style = "display: none"
})
//B:live search:
const resultat_de_recherche = document.getElementById("resultat-de-recherche")
const input_element = document.getElementById("barre")
function add_fct() {
  let search_input = ""
  input_element.addEventListener('input', (e) => {
    search_input = e.target.value.toLowerCase()
    resultat_de_recherche.textContent = ""
    coffeeProducts.filter((item) => { return (item.name.toLowerCase().includes(search_input)) }).forEach((e) => {
      recherche_element(e)
    })
    add_element()
  })
}
add_fct()
function recherche_element(e) {
  const resultat = document.createElement("div")
  resultat.className = "resultat"
  const div1_resultat = document.createElement("div")
  const div2_resultat = document.createElement("div")
  const image_result = document.createElement("img")
  image_result.className = "image-search"
  image_result.style.width = "50px"
  image_result.setAttribute("src", `${e.image}`)
  image_result.setAttribute("data-category", `${e.image}`)
  div1_resultat.append(image_result)
  div2_resultat.style = "display:flex;flex-direction:column;"
  div2_resultat.className = "name-ajout-produit"
  const name = document.createElement("span")
  const resultat_price = document.createElement("div")
  resultat_price.className = "price_resultat"
  resultat_price.textContent = `${e.price}`
  name.textContent = `${e.name}`
  name.className = "name-ajout-"
  const div3_resultat = document.createElement("div")
  const ajout_article = document.createElement("button")
  ajout_article.setAttribute("data-category" , `${e.id}`)
  ajout_article.className = "btn_ajout--"
  ajout_article.id = "btn_ajout--"
  ajout_article.textContent = "+"
  div3_resultat.append(ajout_article)
  div2_resultat.append(name, resultat_price)
  const div4_resultat = document.createElement("div")
  div4_resultat.className = "organize-img_titre_search"
  div4_resultat.append(div1_resultat, div2_resultat)
  resultat.append(div4_resultat, div3_resultat)
  resultat_de_recherche.append(resultat)
  resultat.style = "display:flex"
}
//C: ajout des articles en panier :

function add_element() {
  document.querySelectorAll('.btn_ajout--').forEach((btn) => {
    let objet = {}
    btn.addEventListener("click", (e) => {
      // const add = document.querySelector(".name-ajout-")
      // const price_add = document.querySelector(".price_resultat")
      const image_add = document.querySelector(".image-search").dataset.category
      const ProdId = e.currentTarget.dataset.category

      let targetProd =  coffeeProducts.find(p => p.id == ProdId);
      console.log(targetProd);
      objet = { id: targetProd.id, name: targetProd.name, price: targetProd.price, quantity: 1, image: image_add }
      // console.log(objet)
      //some katcheki ila 3la l2a9al kan element katrja3 true
      let exists  = coffeeCart.find(p =>  p.id == objet.id );
      console.log(exists, coffeeCart,targetProd)
      if (exists == null) {
      
        coffeeCart.push(objet)
        panier.textContent = ""
        for (const key in coffeeCart) {
          addelement(coffeeCart, key)
          total(coffeeCart)
          btn_moin_()
          btn_plus_()
          remove_()
        }
      }
      let target_container_to_remove = e.currentTarget.closest(".resultat")
      remove_addedproduct(target_container_to_remove)

    });

  });
}
function remove_addedproduct(target) {
  if (resultat_de_recherche.contains(target)) {
    resultat_de_recherche.removeChild(target)
  }

}