
angular.module('myApp', [])
    .controller('AuthController', AuthController)
    .controller('LoginController', LoginController)
    .controller('ProductCatalogController', ProductCatalogController)
    .controller('ShoppingController', ShoppingController)
    .service('CartService', CartService);
