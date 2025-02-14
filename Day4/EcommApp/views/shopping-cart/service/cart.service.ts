import * as angular from 'angular';

interface ICartItem {
    name: string;
    price: number;
    quantity: number;
}

export class CartService {
    private cart: ICartItem[] = [];

    getCart() {
        return this.cart;
    }

    addToCart(product: ICartItem) {
        let existingItem = this.cart.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
    }

    removeFromCart(product: ICartItem) {
        this.cart = this.cart.filter(item => item.name !== product.name);
    }
}

angular.module('ECommApp').service('CartService', CartService);
