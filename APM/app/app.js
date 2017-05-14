/// <reference path="../typings/angularjs/angular.d.ts" />
//TypeScript modules help us to prevent global variables like what javascript used to do in IIFE part. It encapsulate
//variables, interfaces and classes. Created JS pattern also referred as modular javascript pattern.
var app;
(function (app) {
    //This dependency is for mocking. When you use real-world HTTP call say WEB API, then remove this dependency
    var main = angular.module("productManagement", ["ngRoute",
        "common.services",
        "productResourceMock"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/productList", {
            templateUrl: "/app/products/productListView.html",
            controller: "productListCtrl as vm"
        })
            .when("/productDetail/:productId", {
            templateUrl: "/app/products/productDetailView.html",
            controller: "productDetailCtrl as vm"
        })
            .otherwise("/productList");
    }
})(app || (app = {}));
