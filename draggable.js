// draggable.js

angular.module('draggable', []);

angular.module('draggable')
  .directive('draggable', ['navService', function(navService) {
    return {
      restrict: 'A',
      // controller: myController,
      // templateUrl: myTemplateURLFilename,
      // controller: function($scope, $element){},
      link: link
    };

    function link($scope, element, attrs) {
      var mouseX, mouseY;
      var deltaX, deltaY;
      var node, nodeX, nodeY;
      
      element.on('mousedown', function(event) {
        var target = event.target || event.srcElement;  // http://javascript.info/tutorial/bubbling-and-capturing
        if(target.tagName === 'text') {
          mouseX = event.x;
          mouseY = event.y;
          node = event.target.parentNode;
          nodeX = node.transform.baseVal[0].matrix.e;
          nodeY = node.transform.baseVal[0].matrix.f;
          element.bind('mousemove', ondrag);
        }
      });
      
      function ondrag(event) {
        if(event.which === 1 && node) {
          deltaX = event.x - mouseX;
          deltaY = event.y - mouseY;
          node.transform.baseVal[0].matrix.e = nodeX + deltaX / navService.getScale();
          node.transform.baseVal[0].matrix.f = nodeY + deltaY / navService.getScale();
        } else {
          reset();
        }
      };

      function reset() {
        element.unbind('mousemove', 'ondrag');
        node = null;
      };

      element.on('mouseup', function() {
        reset();
      });
    };
  }]);
