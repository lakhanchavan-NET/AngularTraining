class CartService {
    private cart: any[] = [];
  
    addItem(product: any) {
      this.cart.push(product);
    }
  
    getCartItems() {
      return this.cart;
    }
  
    removeItem(index: number) {
      this.cart.splice(index, 1);
    }
  
    getTotalPrice(): number {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  }
  
  // Register as an AngularJS service
  angular.module("ECommApp").service("CartService", CartService);
  