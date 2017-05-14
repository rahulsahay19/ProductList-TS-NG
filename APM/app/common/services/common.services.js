/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("common.services", ["ngResource"]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
