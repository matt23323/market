let grid = document.getElementById("products-grid")
let productsArray = []
let xhr = new XMLHttpRequest();
let url = "https://my-json-server.typicode.com/matt23323/market"

let a = document.getElementById("cart-button")
let b = document.getElementById("cart-products")
let cart = []

xhr.open("GET",url+"/products")
xhr.responseType = "json"
xhr.onload = function(){
    productsArray = xhr.response
    grid.innerHTML =  null;
    productsArray.forEach(p=> {
        productsArray.push(p)
    let product = document.createElement("div")
    product.classList.add("product");
    product.innerHTML = `
    <h1 class="product-name"> ${p.name}</h1>
    <img class="product-photo" src="${p.photo_url}">
    <p class="product-price">Price: ${p.price}</p>
    <p class="product-description">Description: ${p.description}</p>
    <a href="userProfile.html?id=${p.author_id}">Seller profile</a>
    <button onclick="addProductToCart()"(${p.id})">Buy</button>
    `;
    grid.append(product);
})
}
xhr.send();


function openCart(){
    cartProd.classList.toggle('hide')
}
function closeCart(){
    cartProd.classList.toggle('hide')
}
let cartProd = document.getElementById('cart-products');
// if(localStorage.getItem('cart')) {
//     cart = JSON.parse(localStorage.getItem('cart'));
//     drawCartProducts();
// }
function addProductToCart(id) {
    let product = productsArray.find(function(p) {
        return p.id == id;
    })
    cart.push(product);
    // drawCartProducts();
    // localStorage.setItem("cart", JSON.stringify(cart));

    // document.getElementById('cart-button').classList.add('active');
    // setTimeout(function(){
    //     document.getElementById('cart-button').classList.remove('active');
    // },500);
}
function drawCartProducts() {
    if(cart.length === 0) return cartProd.innerHTML = 'Cart is empty';
    cartProd.innerHTML = null;
    let sum = 0;
    cart.forEach(function(p){
        cartProd.innerHTML += `
            <p><img src="${p.photo_url}"> ${p.name} |${p.price}$</p>
            <hr>
        `;
        sum += p.price;
    });
    cartProd.innerHTML += `
        <p>Total Price: ${sum}$</p>
        <button onclick="buyAll()">Buy All</button>
    `;
}
function buyAll() {
    cart = [];
    cartProd.innerHTML = 'Money was withdrawn from your credit card';
    localStorage.setItem("cart", '[]');
}