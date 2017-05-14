/// <reference path="../../typings/angularjs/angular.d.ts" />
//Interfaces will act as intent for the views. Like it will have all the properties need to be exposed to views
//TypeScript don't transpile all the types as there is nothing like interface in JS
var app;
(function (app) {
    var ProductList;
    (function (ProductList) {
        var ProductListCtrl = (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Product List";
                this.showImage = false;
                //this.products = [
                //    {
                //        "productId": 1,
                //        "productName": "Leaf Rake",
                //        "productCode": "GDN-0011",
                //        "releaseDate": new Date(2009, 2, 19),
                //        "description": "Leaf rake with 48-inch wooden handle.",
                //        "price": 19.95,
                //        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                //    },
                //    {
                //        "productId": 2,
                //        "productName": "Garden Cart",
                //        "productCode": "GDN-0023",
                //        "releaseDate": new Date(2010, 2, 18),
                //        "description": "15 gallon capacity rolling garden cart",
                //        "price": 32.99,
                //        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                //    },
                //    {
                //        "productId": 5,
                //        "productName": "Hammer",
                //        "productCode": "TBX-0048",
                //        "releaseDate": new Date(2013, 4, 21),
                //        "description": "Curved claw steel hammer",
                //        "price": 8.99,
                //        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                //    }
                //];
                //Now, we are retrieving products from service, hence hard-coded stuff has been commented out
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                //Now, we'll use query method to query the stuffs via callback
                //Here, we'll get data from the query which is of return type IProduct and since we are fetching array
                //hence, defined the same as array
                //left hand side of fat-arrow is parameters and right hand side is the body of the arrow
                productResource.query(function (data) {
                    _this.products = data;
                });
                //This is also not needed
                //var newProduct = new app.domain.Product(3, "Saw", "TBX-002",
                //    new Date(2002, 3, 1), 16.95,
                //    "15-inch steel blade hand saw",
                //    "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
                //newProduct.price = newProduct.calculateDiscount(10);
                ////add the newly added item in list
                //this.products.push(newProduct);
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            return ProductListCtrl;
        }());
        //Any parameter which needs to be injected into controller, can be passed into ctor
        //In ctor, we can define default values
        ProductListCtrl.$inject = ["dataAccessService"];
        //Module registration in TS, will go below the class, else TS won't recognize that irrespective of normal JS code
        angular.module("productManagement")
            .controller("productListCtrl", ProductListCtrl);
    })(ProductList = app.ProductList || (app.ProductList = {}));
})(app || (app = {}));
