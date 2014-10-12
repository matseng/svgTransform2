angular.module('newNote', []);

angular.module('newNote')
  .directive('newnote', ['navService', 'render', function(navService, render) {
    return {
      restrict: 'A',
      link: link
    };

    // var canvasElement = element.children()[0];
    var x, y;
    var xGlobal, yGlobal;
    var target;
    var $canvas;
    
    function link($scope, element, attrs) {
      // $canvas = angular.element(element.find('g')[0]);
      // render.setCanvas($canvas);
      element.on('click', function(mouse) {
        target = mouse.target || mouse.srcElement;
        if ( target.tagName === 'svg' || target.id === 'canvas' ) {
          x = mouse.x;
          y = mouse.y;
          xGlobal = x / navService.getScale() - navService.getX();
          yGlobal = y / navService.getScale() - navService.getY();
          console.log('hello world ', xGlobal, yGlobal, element); 
          var str = 'testing testing \n 123';
          render.append(str, xGlobal, yGlobal);
        }
      });
    };
  }]);
