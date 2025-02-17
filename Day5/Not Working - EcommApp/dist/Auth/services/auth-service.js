"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
 
var angular_1 = __importDefault(require("angular"));
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.authenticate = function (username, password) {
        return username === 'admin' && password === 'password';
    };
    return AuthService;
}());
 
angular_1.default.module('ECommApp').service('AuthService', AuthService);
