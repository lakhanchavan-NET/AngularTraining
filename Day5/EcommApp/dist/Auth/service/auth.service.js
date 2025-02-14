"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
 
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.authenticate = function (username, password) {
        return username === 'admin' && password === 'password';
    };
    return AuthService;
}());
 
