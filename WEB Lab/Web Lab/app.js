// app.js
var app = angular.module('helloWorldApp', []);

app.controller('HelloWorldController', function ($scope) {
    $scope.greeting = "Hello World!";
    $scope.userName = "";

    $scope.updateGreeting = function () {
        if ($scope.userName) {
            $scope.greeting = "Hello, " + $scope.userName + "!";
        } else {
            $scope.greeting = "Hello World!";
        }
    };
});
