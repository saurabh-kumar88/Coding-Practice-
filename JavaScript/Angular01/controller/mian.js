var app = angular.module("myApp", []);
  app.controller("myCtrl", ($scope)=>{
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    // A controller can also have methods (variables as functions)
    $scope.fullName = function (){ 
      return $scope.firstName + " " + $scope.lastName;
    }
  });

  var app2 = angular.module('City', []).controller('myCtrl2', function($scope) {
    $scope.names = [
      {country:'India',capital:'New Delhi'},
      {country:'Canada',capital:'Otawa'},
      {country:'USA',capital:'Washington D.C'}
    ];
  }); 