let module = angular.module("myModule", []);
module.controller("myCtrl", Main);
function Main($scope) {
  let date = new Date();
  $scope.currentTime = date.toTimeString();
}
