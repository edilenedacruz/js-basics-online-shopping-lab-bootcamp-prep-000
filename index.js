var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let itemPrice = Math.floor(Math.random() * 100) + 1
 let itemName = item;
 let itemNamePrice = { [itemName]: itemPrice }
 cart.push(itemNamePrice)
 console.log(`${itemName} has been added to your cart.`)
 return cart;
}

function viewCart() {
  let cartPhrase = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
      for(let i = 0; i < cart.length; i++) {
        let item = cart[i]
        let name = Object.keys(cart[i])[0]
        let value = (cart[i][name]);

        if(i === cart.length - 1 && i !== 0) {
          cartPhrase.push(`and ${name} at $${value}`)
        } else {
          cartPhrase.push(`${name} at $${value}`)
        }
  }

  if(cart.length >= 3) {
    cartPhrase = cartPhrase.join(", ")
  } if(cart.length === 2) {
    cartPhrase = cartPhrase.join(" ")
  }
  console.log(`In your cart, you have ${cartPhrase}.`)
}

}

function total() {
  let totalCost = 0
  let i = 0

  while(i < cart.length) {
    Object.keys(cart[i])[0]
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
