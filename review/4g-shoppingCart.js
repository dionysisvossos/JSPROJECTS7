const shoppingCart = {
    items: [
        {productname:'Apples', price: 8.59, quantity: 40},
        {productname:'Bananas', price: 3.99, quantity: 20},
    ],

    addItemtoCart(item) {
        this.items.push(item)
    },
}

shoppingCart.addItemtoCart({productname:'Oranges', price: 5.99, quantity: 30})

console.log(shoppingCart.items)