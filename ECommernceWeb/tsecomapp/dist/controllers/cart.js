var CartService = /** @class */ (function () {
    function CartService() {
        this.cart = [];
    }
    CartService.prototype.addItem = function (product) {
        this.cart.push(product);
        console.log('Cart Updated:', this.cart);
    };
    CartService.prototype.getCart = function () {
        return this.cart;
    };
    CartService.prototype.clearCart = function () {
        this.cart = [];
    };
    return CartService;
}());

