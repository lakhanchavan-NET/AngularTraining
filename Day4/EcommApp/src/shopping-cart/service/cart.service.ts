import * as angular from 'angular';

interface ICartItem {
    name: string;
    price: number;
    quantity: number;
}

export class CartService {
    private cartItems: ICartItem[] = [];

    getCartItems(): ICartItem[] {
        return this.cartItems;
    }

    addItem(item: ICartItem) {
        this.cartItems.push(item);
    }

    removeItem(item: ICartItem) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.name !== item.name);
    }
}

angular.module('ECommApp').service('CartService', CartService);
