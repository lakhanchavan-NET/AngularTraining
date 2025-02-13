var LoginController = /** @class */ (function () {
    function LoginController($scope) {
        this.$scope = $scope;
        this.email = '';
        this.password = '';
    }
    LoginController.prototype.submitLogin = function () {
        alert("Logging in with ".concat(this.email));
    };
    LoginController.$inject = ['$scope'];
    return LoginController;
}());

