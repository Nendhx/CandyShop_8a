const products = [
  {
    name: "snickers",
    price: 1000,
    quantity: 0,
  },
  {
    name: "milkyway",
    price: 1200,
    quantity: 0,
  },
  {
    name: "mars",
    price: 1500,
    quantity: 0,
  },
  {
    name: "twix",
    price: 1600,
    quantity: 0,
  },
  {
    name: "kitkat",
    price: 1300,
    quantity: 0,
  },
];

function Add(pname){
  let s = "";
  for(let i = 0; i < products.length; i++){
    if(products[i].name === pname){
      products[i].quantity++;
    }
    if(products[i].quantity > 0){
      s += `<li> ${products[i].name.toUpperCase()} - ${products[i].quantity} <button class="productButton" onclick="Remove('${products[i].name}')">×</button> </li>`
    }
  }
  if(s == ""){
    document.getElementById("cart").innerHTML = `<li>There is Nothing in the Cart</li><li>Go Checkout Our Candy Shop <---</li>`;
    return;
  }
  document.getElementById("cart").innerHTML = s;
}

function Reduce(pname){
  let s = "";
  for(let i = 0; i < products.length; i++){
    if(products[i].name === pname && products[i].quantity > 0){
      products[i].quantity--;
    }
    if(products[i].quantity > 0){
      s += `<li> ${products[i].name.toUpperCase()} - ${products[i].quantity} <button class="productButton" onclick="Remove('${products[i].name}')">×</button> </li>`
    }
  }
  document.getElementById("cart").innerHTML = s;
}

function Purchase(){
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }
  document.getElementById("total").innerHTML = total;
}

function Remove(pname){
  let s = "";
  for(let i = 0; i < products.length; i++){
    if(products[i].name === pname){
      products[i].quantity = 0;
    }
    if(products[i].quantity > 0){
      s += `<li> ${products[i].name.toUpperCase()} - ${products[i].quantity} <button class="productButton" onclick="Remove('${products[i].name}')">×</button> </li>`
    }
  }
  if(s == ""){
    document.getElementById("cart").innerHTML = `<li>There is Nothing in the Cart</li><li>Go Checkout Our Candy Shop</li><li> <---</li>`;
    return;
  }
  document.getElementById("cart").innerHTML = s;
}