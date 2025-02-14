import * as angular from 'angular';

angular.module("ECommApp").controller("AuthController", ["$scope", "$location", function ($scope, $location) {
    $scope.login = function () {
        if ($scope.username === "admin" && $scope.password === "password") {
            $location.path("/products");
        } else {
            $scope.errorMessage = "Invalid credentials!";
        }
    };
}]);
