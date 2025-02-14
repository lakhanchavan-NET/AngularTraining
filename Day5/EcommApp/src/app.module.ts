import * as angular from 'angular';
import 'angular-route';

angular.module("ECommApp", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/auth/auth.view.html",
                controller: "AuthController"
            })
            .when("/products", {
                templateUrl: "views/product-catalog/product.view.html",
                controller: "ProductCatalogController"
            })
            .when("/cart", {
                templateUrl: "views/shopping-cart/cart.view.html",
                controller: "ShoppingCartController"
            })
            .otherwise({ redirectTo: "/login" });
    }]);
