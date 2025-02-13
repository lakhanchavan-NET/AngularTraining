import * as angular from 'angular';
import { AuthService } from './auth/service/authService';

interface IAuthScope extends angular.IScope {
    vm: AuthController;
}

export class AuthController {
    static $inject = ['$scope', 'AuthService'];
    message: string;

    constructor(private $scope: IAuthScope, private authService: AuthService) {
        this.message = 'Login to access your account.';
        $scope.vm = this;
    }

    login(username: string, password: string): boolean {
        return this.authService.authenticate(username, password);
    }
}

// Ensure the module exists before registering the controller
angular.module('ECommApp').controller('AuthController', AuthController);
