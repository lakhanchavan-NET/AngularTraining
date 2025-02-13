var ProductCatalogController = /** @class */ (function () {
    function ProductCatalogController(cartService) {
        this.cartService = cartService;
        this.products = [
            { name: "Monitor", price: 15000, image: "monitor.JPG", description: "High definition Monitor" },
            { name: "Keyboard", price: 2000, image: "keyboard.JPG", description: "Keyboard" },
            { name: "Laptop", price: 50000, image: "laptop.jpg", description: "High performance Laptop" },
            { name: "Mouse", price: 250, image: "mouse.jpg", description: "Mouse" },
            { name: "Headphones", price: 1500, image: "headphones.jpg", description: "Noise cancelling Headphones" },
            { name: "Smartphone", price: 75000, image: "smartphone.jpg", description: "Latest iPhone" },
            { name: "Tablet", price: 80000, image: "tablet.jpg", description: "Android Tablet" },
            { name: "Smartwatch", price: 3500, image: "smartwatch.jpg", description: "Fitness Tracker Smartwatch" }
        ];
    }
    ProductCatalogController.prototype.addToCart = function (product) {
        this.cartService.addItem(product);
    };
    ProductCatalogController.$inject = ['CartService'];
    return ProductCatalogController;
}());

