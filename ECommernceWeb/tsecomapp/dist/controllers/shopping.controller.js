var ShoppingController = /** @class */ (function () {
    function ShoppingController(cartService) {
        this.cartService = cartService;
        this.cartItems = this.cartService.getCart();
    }
    ShoppingController.prototype.removeFromCart = function (index) {
        this.cartItems.splice(index, 1);
    };
    ShoppingController.prototype.clearCart = function () {
        this.cartService.clearCart();
        this.cartItems = [];
    };
    ShoppingController.$inject = ['CartService'];
    return ShoppingController;
}());

