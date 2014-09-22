// draggable.js

angular.module('draggable', []);

angular.module('draggable')
  .directive('draggable', [function() {
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
        if(target.className.baseVal === 'helloWorld') {
          mouseX = event.x;
          mouseY = event.y;
          node = event.target.parentNode;
          nodeX = node.transform.baseVal[0].matrix.e;
          nodeY = node.transform.baseVal[0].matrix.f;
          element.bind('mousemove', ondrag);
          console.log(event);
        }
      });
      
      function ondrag(event) {
        if(event.which === 1 && node) {
          deltaX = event.x - mouseX;
          deltaY = event.y - mouseY;
          node.transform.baseVal[0].matrix.e = nodeX + deltaX;
          node.transform.baseVal[0].matrix.f = nodeY + deltaY;
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
// isolate scope
// atrribute
// link function

//mouse down, check is src element is txt, then get x,y of mouse and src element
//on mouse move, check is left click is still down, then update elements x,y