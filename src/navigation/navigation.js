// navigation.js
angular.module('nav', []);

angular.module('nav')
  .directive('nav', [function() {
    return {
      restrict: 'A',
      link: link
    };

    function link($scope, element, attrs) {
      var mouseInitialX, mouseInitialY;
      var deltaX, deltaY;
      var canvasInitialX, canvasInitalY;
      var canvasElement = element.children()[0];
      var dragStarted = 0;
      
      element.on('mousedown', function(event) {
        var target = event.target || event.srcElement;  // http://javascript.info/tutorial/bubbling-and-capturing
        // console.log(element[0] === 'svg' || element.);
        if(target.tagName === 'svg' || target.id === 'canvas') {
          // debugger
          mouseInitialX = event.x;
          mouseInitialY = event.y;
          canvasInitialX = canvasElement.transform.baseVal[0].matrix.e;
          canvasInitialY = canvasElement.transform.baseVal[0].matrix.f;

          dragStarted = 1;
          element.bind('mousemove', translate)
        }
      });

      function translate(event) {
        if(event.which === 1 && dragStarted) {
          deltaX = event.x - mouseInitialX;
          deltaY = event.y - mouseInitialY
          console.log(canvasElement);
          canvasElement.transform.baseVal[0].matrix.e = canvasInitialX + deltaX;
          canvasElement.transform.baseVal[0].matrix.f = canvasInitialY + deltaY;
          // debugger
        } else {
          reset();
        }

      };

      function reset() {
        dragStarted = 0;
      };


    };
  }]);