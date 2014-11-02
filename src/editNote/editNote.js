angular.module('editNote', []);

angular.module('editNote')
  .directive('editNote', [function() {
    return {
      restrict: 'A',
      // controller: myController,
      // templateUrl: myTemplateURLFilename,
      controller: function($scope, $element){},
      link: link
    };

    function link($scope, element, attrs) {
      console.log("hello world: editNote");
    }
  }]);
