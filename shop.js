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

function Add(pname) {
  for(let i = 0; i < products.length; i++){
    if(products[i].name === pname) products[i].quantity++;
  }
}

function Reduce(pname) {
  for(let i = 0; i < products.length; i++){
    if(products[i].name === pname && products[i].quantity > 0) products[i].quantity--;
  }
}

function Purchase() {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }
  document.getElementById("total").innerHTML = total;
}