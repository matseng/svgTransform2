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
    var target;
    function link($scope, element, attrs) {
      element.on('click', function(mouse) {
        target = mouse.target || mouse.srcElement;
        if ( target.tagName === 'svg' || target.id === 'canvas' ) {
          x = mouse.x;
          y = mouse.y;
          xGlobal = x / navService.getScale() - navService.getX();
          yGlobal = y / navService.getScale() - navService.getY();
          console.log('hello world ', xGlobal, yGlobal);
        }
      
      });
    };

  }]);
