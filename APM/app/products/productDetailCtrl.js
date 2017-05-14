var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var id = $routeParams.productId;
                //Call the service and get the data
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: id }, function (data) {
                    _this.product = data;
                });
            }
            return ProductDetailCtrl;
        }());
        ProductDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
        angular.module("productManagement")
            .controller("productDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
