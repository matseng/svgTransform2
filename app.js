angular.module('Navigation', ['draggable', 'nav']);

angular.module('Navigation')
  .controller('NavigationController', ['$scope', function($scope) {
    $scope.x = 40;
    $scope.y = 60;
    $scope.clicked = function(){
      $scope.x += 100;
      $scope.y += 100;
    }
  }]);