export class LoginController {
    static $inject = ['$scope'];

    email: string;
    password: string;

    constructor(private $scope: any) {
        this.email = '';
        this.password = '';
    }

    submitLogin() {
        alert(`Logging in with ${this.email}`);
    }
}
