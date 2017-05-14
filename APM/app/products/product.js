var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = (function () {
            //This is typical way of writing any class. However, with this when props grow, it can become cumbersome
            //Hence, to cut short, we can just use public access modifier which can handle this shortcut
            //constructor(productName: string) {
            //    this.productName = productName;
            function Product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            //So, all logic should be placed here in domain class implementation rather than angular code
            Product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        }());
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
