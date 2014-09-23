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
        // console.log(element[0] === 'svg' || element.);
        if( target.tagName === 'svg' || target.id === 'canvas' ) {
          // debugger
          mouseInitialX = event.x;
          mouseInitialY = event.y;
          canvasInitialX = canvasElement.transform.baseVal[0].matrix.e;
          canvasInitialY = canvasElement.transform.baseVal[0].matrix.f;

          dragStarted = 1;
          element.bind('mousemove', translate);
          element.bind('mouseup', reset);
        }
      });

      // var translateX = 0, translateY = 0;
      function translate(event) {
          // console.log(canvasElement);
        
        if(event.which === 1 && dragStarted) {
        // if( event.which === 1 ) {
          deltaX = event.x - mouseInitialX;
          deltaY = event.y - mouseInitialY
          // translateX = canvasElement.transform.baseVal[0].matrix.e = canvasInitialX + deltaX;
          translateX = canvasInitialX + deltaX;
          translateY = canvasInitialY + deltaY;
          canvasElement.setAttribute('transform', getTransformString(zoom, translateX, translateY));
          // translateY = canvasElement.transform.baseVal[0].matrix.f = canvasInitialY + deltaY;
          canvasElement.transform.baseVal[0].matrix.e = translateX;
          canvasElement.transform.baseVal[0].matrix.f = translateY;
          
          // canvasElement.setAttribute('transform', getTransformString(zoom, translateX, translateY));

          // debugger
        } else {
          reset();
        }

      };

      function getTransformString(scale, tx, ty) {
        return 'scale(' + scale + ') translate(' + tx + ',' + ty + ')';
        var matrix = new Array(scale, 0, 0, scale, tx, ty);
        return 'matrix(' + matrix.join(' ') + ')'; 
      };

      function reset() {
        element.unbind('mousemove', translate);
        dragStarted = 0;
      };

      element.on('mousewheel', function(event) {
        // console.log(event);
        // debugger
        // var windowOffsetX = canvasElement.getBoundingClientRect().left;
        // var windowOffsetY = canvasElement.getBoundingClientRect().top;
        // var mouseX = event.x;
        // var mouseY = event.y;
        // var globalOffsetX = windowOffsetX - translateX
        
        var pt = {
          x: canvasElement.getBoundingClientRect().left,
          y: canvasElement.getBoundingClientRect().top
        };
        console.log(pt);

        var prevZoom = zoom;

        if(event.wheelDeltaY < 0) {
          zoom = zoom * 1.05;
        }
        else {
          zoom = zoom * 0.95;
        }


        translateX = translateX - navService.translateCenter(pt.x, prevZoom, 0, event.x, zoom);
        translateY = translateY - navService.translateCenter(pt.y, prevZoom, 0, event.y, zoom);

        // var centerX = -1 * offsetX * zoom + mouseX * zoom + (offsetX - mouseX);
        // var centerY = -1 * offsetY * zoom + mouseY * zoom + (offsetY - mouseY);
        
        // canvasElement.transform.baseVal[0].matrix.a = canvasElement.transform.baseVal[0].matrix.d = zoom;
        // var newOffsetX = offsetX * zoom;
        // var newOffsetY = offsetY * zoom;
        // var deltaOffsetX = - (newOffsetX - offsetX);
        // var deltaOffsetY = - (newOffsetY - offsetY);
        // var initialTx = translateX + offsetX;
        // var initialTy = translateY + offsetY;
        

        // mouseY = event.y;
        // var globalMouseX = (mouseX - translateX) * 1/zoom;
        // var globalMouseY = (mouseY - translateY) * 1/zoom;
        // mouseY = event.y;
        // translateX = (translateX - offsetX) * zoom;
        // translateY = (translateY - offsetY) * zoom;
        // canvasElement.setAttribute('transform', getTransformString(zoom, canvasElement.transform.baseVal[0].matrix.e - offsetX, canvasElement.transform.baseVal[0].matrix.f - offsetY));
        // canvasElement.setAttribute('transform', getTransformString(zoom, deltaOffsetX, deltaOffsetY));
        // canvasElement.setAttribute('transform', getTransformString(zoom, centerX, centerY));
        canvasElement.setAttribute('transform', getTransformString(zoom, translateX, translateY));
        // canvasElement.transform.baseVal[0].matrix.e = translateX;
        // canvasElement.transform.baseVal[0].matrix.f = translateY;
        // canvasElement.transform.baseVal[0].matrix.a = zoom;
        // canvasElement.transform.baseVal[0].matrix.d = zoom;
          

      });


    };
  }]);
