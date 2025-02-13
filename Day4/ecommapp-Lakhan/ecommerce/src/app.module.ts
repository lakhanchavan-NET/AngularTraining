import * as angular from "angular";
import 'angular-route';  

import { ProductController } from "./product-catalog/controller/product.controller";
import { AuthController } from "./Auth/controller/auth.controller";
import { ShoppingCartController } from "./shopping-cart/controller/shopingcart.controller";

const appModule = angular.module('ecommerce', ['ngRoute']);

appModule.config(['$routeProvider', ($routeProvider:any) => {
    $routeProvider
      .when('/auth', {
        templateUrl: 'views/Auth/login.html',  // Updated path for login view
        controller: 'AuthController',  
        controllerAs: 'AuthCtrl'  
      })
      .when('/catalog', {
        templateUrl: 'views/product-catalog/catalogs.html',  // Updated path for product catalog
        controller: 'ProductController',  
        controllerAs: 'ProductCtrl'  
      })  
      .when('/details', {
        templateUrl: 'views/shopping-cart/details.html',  // Updated path for shopping cart details
        controller: 'ProductController',  
        controllerAs: 'ProductCtrl'  
      })      
      .when('/cart', {
        templateUrl: 'views/shopping-cart/cart.html',  // Updated path for shopping cart
        controller: 'ShoppingCartController',  
        controllerAs: 'CartCtrl'  
      }) 
      .otherwise({
        redirectTo: '/catalog'  // Default route now points to product catalog
      });
}]);

// Register controllers
appModule.controller('ProductController', ProductController);
appModule.controller('AuthController', AuthController);
appModule.controller('ShoppingCartController', ShoppingCartController);
