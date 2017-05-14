var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            //All external pieces will get injected via constructor
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource("/api/products/:productId");
            };
            return DataAccessService;
        }());
        //To ensure we are safe for minification, we'll use $inject
        DataAccessService.$inject = ["$resource"];
        common.DataAccessService = DataAccessService;
        //Service Registration
        angular.module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
