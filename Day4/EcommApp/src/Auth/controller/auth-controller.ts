import angular from "angular";
import { AuthService } from "../service/auth.service";

interface IAuthScope extends angular.IScope {
    vm: AuthController;
}
export class AuthController{
       static $inject = ['$scope', 'AuthService'];
    message: string;

    constructor(private $scope: IAuthScope, private authService: AuthService) {
        this.message = 'Login to access your account.';
        $scope.vm = this;
    }

    login(username: string, password: string) {
       // return this.authService.authenticate(username, password);
    }
}