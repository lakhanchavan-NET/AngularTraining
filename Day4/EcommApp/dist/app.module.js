"use strict";
angular.module('ECommApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/products', {
            templateUrl: 'views/product-catalog/product.view.html',
            controller: 'ProductCatalogController',
            controllerAs: 'vm'
        })
            .when('/cart', {
            templateUrl: 'views/shopping-cart/cart.view.html',
            controller: 'ShoppingCartController',
            controllerAs: 'vm'
        })
            .when('/login', {
            templateUrl: 'views/auth/auth.view.html',
            controller: 'AuthController',
            controllerAs: 'vm'
        })
            .otherwise({
            redirectTo: '/products'
        });
    }]);
