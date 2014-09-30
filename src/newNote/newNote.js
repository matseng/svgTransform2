angular.module('newNote', []);

angular.module('newNote')
  .directive('newnote', ['navService', function(navService) {
    return {
      restrict: 'A',
      link: link
    };

    var canvasElement = element.children()[0];
    var x, y;
    var xGlobal, yGlobal;
    function link($scope, element, attrs) {
      element.on('click', function(mouse){
        x = mouse.x;
        y = mouse.y;
        // x = element.getBoundingClientRect().left;
        // y = element.getBoundingClientRect().top;
        xGlobal = x / navService.getScale() - navService.getX();
        yGlobal = y / navService.getScale() - navService.getY();
        console.log('hello world ', xGlobal, yGlobal);
      
      });
    };

  }]);