// 6. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
//    [ {name: ‘apples’, price: 100}, 
//    {name: ‘milk’, price: 80}, 
//    {name:’bananas’, price: 150} ]
// Write a function that calculates the total price of your shopping list. 
// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

function ShoppingList() {
    this.list = [];

    this.addProducts = function(product) {
        this.list.push(product);
    }

    this.getTotalPrice = function() {
        var price = 0;
        for (let i = 0; i < this.list.length; i++) {
            price += this.list[i].price;
        }
        return price;
    }

    this.getAveragePrice = function() {
        var averagePrice = this.getTotalPrice() / this.list.length;
        return averagePrice.toPrecision(6); 
    }

    this.getMostExpensiveProduct = function() {
        var mostExpensiveProduct = 0;

        for (let i = 0; i < this.list.length; i++) {
            if(mostExpensiveProduct < this.list[i].price) {
                mostExpensiveProduct = this.list[i].price;
            }
        }
        
        return mostExpensiveProduct;
    }
}

function Products(name, price) {
    this.name = name,
    this.price = price
}

var bananas = new Products ("bananas", 151);
var apples = new Products ("apples", 103.99);
var milk = new Products ("milk", 84);

var shoppingList = new ShoppingList();
shoppingList.addProducts(bananas);
shoppingList.addProducts(apples);
shoppingList.addProducts(milk);

console.log(shoppingList.getMostExpensiveProduct());





