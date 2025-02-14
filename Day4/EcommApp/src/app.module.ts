import angular from "angular";
import { AuthService } from "./Auth/service/auth.service";
import { AuthController } from "./Auth/controller/auth-controller";

angular.module('ECommApp', ['ngRoute'])
    .controller('AuthController',AuthController)
    .service('AuthService',AuthService)
    .config(['$routeProvider', function ($routeProvider: any) {
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
