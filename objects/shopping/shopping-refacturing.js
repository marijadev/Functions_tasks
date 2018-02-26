"use strict";

(
    function () {

        function Product(name, price, expirationDate) {
            this.productId = Math.round(Math.random() * (99999 - 10000) + 10000);
            this.name = name;
            this.price = parseFloat(price.toFixed(2));
            this.expirationDate = new Date(expirationDate);
        }
        Product.prototype.getInfo = function () {
            var productCode = (this.name[0] + this.name[name.length - 1]).toUpperCase();
            return productCode + this.productId + ", " + this.name + ", " + this.price;
        }

        function ShoppingBag() {
            this.listOfProducts = [];
        }
        
        ShoppingBag.prototype.addProduct = function (product) {
            var todayDate = new Date();
            if (todayDate.getTime() <= product.expirationDate.getTime()) {
                this.listOfProducts.push(product);
            }
        }
        ShoppingBag.prototype.averageProductPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return parseFloat((sum / this.listOfProducts.length).toFixed(3));
        }

        ShoppingBag.prototype.getMostExpensive = function () {
            var sortedList = this.listOfProducts.slice().sort(function (a, b) {
                return a.price - b.price
            });
            var mostExpensive = sortedList[sortedList.length - 1];
            return mostExpensive.getInfo();
        }

        ShoppingBag.prototype.calculateTotalPrice = function () {
            var totalPrice = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                totalPrice += this.listOfProducts[i].price;
            }
            return totalPrice;
        }

        var PaymentCard = function (accountBalance, status, valid) {
            this.accountBalance = parseFloat(accountBalance.toFixed());
            this.status = status;
            this.valid = new Date(valid);

        }

        function checkoutAndBuy(shoppingBag, card) {
            var today = new Date();

            if (card.status === "active" && card.valid.getTime() >= today.getTime()) {
                if (card.accountBalance >= shoppingBag.calculateTotalPrice()) {
                    var newBalance = parseFloat((card.accountBalance -= shoppingBag.calculateTotalPrice()).toFixed(3));
                    shoppingBag = 0;
                    card.accountBalance = newBalance;
                    return "You have successfully bought your products and your current balance is " + newBalance;
                } else {
                    return "You need " + (shoppingBag.calculateTotalPrice() - card.accountBalance) + " more money to buy your products.";
                }
            } else {
                return "Your card is inactive or expired.";
            }
        }

        var banana = new Product("banana", 131.56, "2018-06-13");
        var orange = new Product("orange", 98.125, "2018-05-10");
        var kiwi = new Product("kiwi", 118.123, "2018-02-28");

        var sBag = new ShoppingBag();

        sBag.addProduct(banana);
        sBag.addProduct(orange);
        sBag.addProduct(kiwi);

        var card1 = new PaymentCard(550, "active", "2018-09-15");

        console.log(checkoutAndBuy(sBag, card1));
    }
)();