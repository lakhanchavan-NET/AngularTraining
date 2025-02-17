angular.module("ECommApp").controller("ShoppingCartController", [
    "$scope",
    "CartService",
    function ($scope, CartService) {
      // Load cart items
      $scope.cartItems = CartService.getCartItems();
  
      // Remove item from cart
      $scope.removeItem = function (index: number) {
        CartService.removeItem(index);
      };
  
      // Get total cart price
      $scope.getTotalPrice = function (): number {
        return CartService.getTotalPrice();
      };
    }
  ]);
  