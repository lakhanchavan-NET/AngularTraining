import * as angular from 'angular';
import { CartService } from '../service/cart.service';

interface ICartItem {
    name: string;
    price: number;
    quantity: number;
}

interface ICartScope extends angular.IScope {
    vm: CartController;
}

export class CartController {
    static $inject = ['$scope', 'CartService'];
    cart: ICartItem[];

    constructor(private $scope: ICartScope, private cartService: CartService) {
        this.cart = cartService.getCart();
        $scope.vm = this;
    }

    removeFromCart(product: ICartItem) {
        this.cartService.removeFromCart(product);
    }
}

angular.module('ECommApp').controller('CartController', CartController);
