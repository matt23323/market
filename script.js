let grid = document.getElementById("products-grid")
let productsArray = []
let xhr = new XMLHttpRequest();
let url = "https://my-json-server.typicode.com/matt23323/market"


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
    <a href="userProfile.html?id= ${p.author_id}>Seller profile</a>
    <button onclick="addProductToCart"(${p.id})">Buy</button>
    `;
    grid.append(product);
})
}
xhr.send();