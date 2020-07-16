
var date = new Date();
App.controller('myCtrl', ($scope)=>{
  $scope.firstName = "saurabh";
  $scope.lastName = "kumar";
  $scope.today = date.toDateString();
  $scope.Time = date.toTimeString();
});

