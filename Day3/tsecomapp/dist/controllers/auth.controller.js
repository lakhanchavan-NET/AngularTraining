var AuthController = /** @class */ (function () {
    function AuthController($scope) {
        this.$scope = $scope;
        this.isAuthenticated = false;
        this.user = { email: '', password: '' };
    }
    AuthController.prototype.login = function () {
        if (this.user.email === 'admin@example.com' && this.user.password === 'password') {
            this.isAuthenticated = true;
            alert('Login Successful');
        }
        else {
            alert('Invalid Credentials');
        }
    };
    AuthController.prototype.logout = function () {
        this.isAuthenticated = false;
        alert('Logged out');
    };
    AuthController.$inject = ['$scope'];
    return AuthController;
}());

