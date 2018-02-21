"use strict";

(function () {

    function Product(name, price, expirationDate) {
        this.name = name,
            this.price = price,
            this.expirationDate = new Date(expirationDate);

            this.productId = (function () {
                return Math.round(Math.random() * (99999 - 10000) + 10000);
            })()

        this.getInfo = function () {
            var code = (this.name.charAt(0) + (this.name.charAt(name.length - 1))).toUpperCase();
            return code + this.productId + ", " + this.name + ", " + this.price;
        }
    }
    

    function ShoppingBag(product) {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            var today = new Date();
            if (product.expirationDate.getTime() > today.getTime()) {
                this.listOfProducts.push(product);
            }
            
        }

        this.averageProductPrice = function() {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return sum / this.listOfProducts.length;
        }

        this.getMostExpensive = function () {
        var sortedList = this.listOfProducts.slice().sort(function(a, b) {return a.price - b.price;});
        var lastIndex = sortedList.length-1;
            return sortedList[lastIndex].getInfo();
        }
    
    }
    
    var banana = new Product("banana", 129.31, "2019-12-04");
    var apple = new Product("apple", 89.99, "2021-03-16");
    var orange = new Product("orange", 100.47, "2015-11-31");

    var sBag = new ShoppingBag();
    sBag.addProduct(banana);
    sBag.addProduct(apple);
    sBag.addProduct(orange);
    

    console.log(sBag.averageProductPrice());
    console.log(sBag.listOfProducts);
    

})()