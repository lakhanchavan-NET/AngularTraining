import * as angular from 'angular';

interface IShoppingCartScope extends angular.IScope {
    vm: ShoppingCartController;
}

export class ShoppingCartController {
    static $inject = ['$scope'];

    cartItems: any[];

    constructor(private $scope: IShoppingCartScope) {
        this.cartItems = [];
        $scope.vm = this;
    }

    addToCart(product: any) {
        this.cartItems.push(product);
    }
}

angular.module('ECommApp').controller('ShoppingCartController', ShoppingCartController);
