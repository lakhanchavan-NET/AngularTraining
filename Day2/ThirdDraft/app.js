

var app = angular.module("Lakhan",[]);
app.controller("LoginController",function($scope){
    $scope.user = {
        email:"lakhanchavan1106@gmail.com",
        password:"test"
    }; 
    $scope.users=[
        {email:"lakhanchavan.in", password:"123"},
        {email:"chavan.in", password:"234"},
        {email:"lakhan.in", password:"143323"},
        {email:"ajay.in", password:"144423"},
        {email:"dnyandev.in", password:"13323"},
        {email:"tsystems.in", password:"33332"},
        {email:"dtcs.in", password:"3333"},
        {email:"techM.in", password:"32333"},
        {email:"ravi.in", password:"144423"},
        {email:"ravitambade.in", password:"55433"},

    ]

    $scope.onValidate=function(){
        if($scope.user.email && $scope.user.password){
            alert("Welcome Lakhan");
        }
        else{
            alert("Invalid User");
        }
    }
});

