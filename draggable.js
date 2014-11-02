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
        console.log(target.tagName);
        if(target.tagName === 'text' || target.tagName === 'tspan' || target.tagName === 'rect') {
          mouseX = event.x;
          mouseY = event.y;
          // node = event.target.parentNode.parentNode;  // TODO: need to select parent g element of note
          node = findParentGroup(target);
          console.log('node: ', node);
          nodeX = node.transform.baseVal[0].matrix.e;
          nodeY = node.transform.baseVal[0].matrix.f;
          element.bind('mousemove', ondrag);
          element.bind('mouseup', reset);
        } else {
          reset();
        }
      });

      function findParentGroup(node) {
        if(node.parentNode.tagName === 'g') {
          return node.parentNode;
        }
        return findParentGroup(node.parentNode);
      };
      
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
    };
  }]);
