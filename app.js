angular.module('Navigation', ['draggable', 'nav', 'newNote', 'load']);

angular.module('Navigation')
  .controller('NavigationController', ['$scope', 'load', function($scope) {
    $scope.x = 20;
    // $scope.x = 1;
    $scope.y = 60;
    // $scope.y = 1;
    $scope.clicked = function(){
      $scope.x += 100;
      $scope.y += 100;
    }
  }]);
