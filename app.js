angular.module('Navigation', ['draggable', 'nav', 'newNote']);

angular.module('Navigation')
  .controller('NavigationController', ['$scope', function($scope) {
    $scope.x = 20;
    // $scope.x = 1;
    $scope.y = 60;
    // $scope.y = 1;
    $scope.clicked = function(){
      $scope.x += 100;
      $scope.y += 100;
    }
  }]);
