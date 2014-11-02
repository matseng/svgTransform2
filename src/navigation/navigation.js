// navigation.js
angular.module('nav', []);

angular.module('nav')
  .directive('nav', ['navService', function(navService) {
    return {
      restrict: 'A',
      link: link
    };

    function link($scope, element, attrs) {
      var mouseInitialX, mouseInitialY;
      var deltaX, deltaY;
      var canvasInitialX, canvasInitialY;
      var translateX = 0, translateY = 0;
      var canvasElement = element.children()[0];
      var dragStarted = 0;
      var zoom = canvasElement.transform.baseVal[0].matrix.a;

      element.on('mousedown', function(event) {
        var target = event.target || event.srcElement;  // http://javascript.info/tutorial/bubbling-and-capturing
        if( target.tagName === 'svg' || target.id === 'canvas' ) {
          mouseInitialX = event.x;
          mouseInitialY = event.y;
          canvasInitialX = translateX;
          canvasInitialY = translateY;
          dragStarted = 1;
          element.bind('mousemove', translate);
          element.bind('mouseup', reset);
        } else {
          reset();
        }
      });

      function translate(event) {
        var target = event.target || event.srcElement;  // http://javascript.info/tutorial/bubbling-and-capturing
        if(event.which === 1 && dragStarted === 1) {
          deltaX = event.x - mouseInitialX;
          deltaY = event.y - mouseInitialY;
          translateX = canvasInitialX + deltaX / zoom;
          translateY = canvasInitialY + deltaY / zoom;
          canvasElement.setAttribute('transform', getTransformString(zoom, translateX, translateY));
          navService.setTransform(zoom, translateX, translateY);
        } else {
          reset();
        }
      };

      function reset() {
        element.unbind('mousemove', translate);
        dragStarted = 0;
      };

      function getTransformString(scale, tx, ty) {
        return 'scale(' + scale + ') translate(' + tx + ',' + ty + ')';
      };

      element.on('mousewheel', function(event) {
        
        var pt = {
          x: canvasElement.getBoundingClientRect().left,
          y: canvasElement.getBoundingClientRect().top
        };

        var prevZoom = zoom;

        if(event.wheelDeltaY < 0) {
          zoom = zoom * 1.05;
        }
        else {
          zoom = zoom * 0.95;
        }

        translateX = translateX + navService.translateCenter(pt.x, prevZoom, 0, event.x, zoom);
        translateY = translateY + navService.translateCenter(pt.y, prevZoom, 0, event.y, zoom);
        canvasElement.setAttribute('transform', getTransformString(zoom, translateX, translateY));
        navService.setTransform(zoom, translateX, translateY);

      });


    };
  }]);
