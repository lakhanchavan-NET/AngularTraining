import * as angular from 'angular';

interface IProduct {
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ICustomScope extends angular.IScope {
  vm: MyController;
}

export class MyController {
  static $inject = ['$scope'];
  message: string;
  products: IProduct[];

  constructor(private $scope: ICustomScope) {
    this.message = 'Welcome to the Product Store!';
    
    this.products = [
      { name: "Monitor", price: 15000, image: "monitor.JPG", description: "High definition Monitor" },
      { name: "Keyboard", price: 2000, image: "keyboard.JPG", description: "Mechanical Keyboard" },
      { name: "Laptop", price: 50000, image: "laptop.jpg", description: "High performance Laptop" },
      { name: "Mouse", price: 250, image: "mouse.jpg", description: "Wired Mouse" },
      { name: "Headphones", price: 1500, image: "headphones.jpg", description: "Noise cancelling Headphones" },
      { name: "Smartphone", price: 75000, image: "smartphone.jpg", description: "Latest iPhone" },
      { name: "Tablet", price: 80000, image: "tablet.jpg", description: "Android Tablet" },
      { name: "Smartwatch", price: 3500, image: "smartwatch.jpg", description: "Fitness Tracker Smartwatch" }
    ];

    // Bind controller instance to $scope
    $scope.vm = this;
  }
}

// Register the controller with the AngularJS module
angular.module('myApp').controller('MyController', MyController);
