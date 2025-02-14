import * as angular from 'angular';

interface IProductCatalogScope extends angular.IScope {
    vm: ProductCatalogController;
}

export class ProductCatalogController {
    static $inject = ['$scope'];

    constructor(private $scope: IProductCatalogScope) {
        $scope.vm = this;
    }

    getProducts() {
        return [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Phone', price: 500 }
        ];
    }
}

angular.module('ECommApp').controller('ProductCatalogController', ProductCatalogController);
