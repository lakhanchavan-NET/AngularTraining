import * as angular from 'angular';

export class ProductService {
    getProducts() {
        return [
            { name: "Monitor", price: 15000, image: "monitor.jpg", description: "High definition Monitor" },
            { name: "Keyboard", price: 2000, image: "keyboard.jpg", description: "Mechanical Keyboard" },
            { name: "Laptop", price: 50000, image: "laptop.jpg", description: "High performance Laptop" },
            { name: "Mouse", price: 1500, image: "mouse.jpg", description: "Wireless Optical Mouse" },
            { name: "Headphones", price: 3500, image: "headphones.jpg", description: "Noise Cancelling Headphones" },
            { name: "Smartphone", price: 30000, image: "smartphone.jpg", description: "Latest Android Smartphone" }
        ];
    }
}

angular.module('ECommApp').service('ProductService', ProductService);
