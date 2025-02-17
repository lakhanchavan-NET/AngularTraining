"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
 
var angular = __importStar(require("angular"));
var CartService = /** @class */ (function () {
    function CartService() {
        this.cart = [];
    }
    // Add item to cart
    CartService.prototype.addItem = function (product) {
        this.cart.push(product);
    };
    // Retrieve all cart items
    CartService.prototype.getCartItems = function () {
        return this.cart;
    };
    // Remove item from cart by index
    CartService.prototype.removeItem = function (index) {
        if (index >= 0 && index < this.cart.length) {
            this.cart.splice(index, 1);
        }
    };
    // Calculate total price of cart items
    CartService.prototype.getTotalPrice = function () {
        return this.cart.reduce(function (total, product) { return total + (product.price || 0); }, 0);
    };
    return CartService;
}());
 
angular.module("ECommApp").service("CartService", CartService);
