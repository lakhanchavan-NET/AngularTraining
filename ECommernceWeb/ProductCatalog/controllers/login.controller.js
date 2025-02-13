authModule.controller("LoginController", function ($scope, $window) {
    $scope.user = { email: "", password: "" };

    $scope.users = [
        { email: "lakhanchavan1106@gmail.com", password: "test" },
        { email: "abc@gmail.com", password: "234" },
        { email: "lakhan@gmail.com", password: "lakhan" }
    ];

    $scope.onValidate = function (event) {
        event.preventDefault(); 

        var matchedUser = $scope.users.find(user =>
            user.email === $scope.user.email && user.password === $scope.user.password
        );

        if (matchedUser) {
            localStorage.setItem("loggedInUser", matchedUser.email);
            console.log("Login");
            $scope.$applyAsync(function () {
                $window.location.href = "index.html";
            });
        } else {
            console.error("Invalid credentials");
            $scope.errorMessage = "Invalid credentials";
            $scope.$apply();
        }
    };
});
