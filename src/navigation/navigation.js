// navigation.js
angular.module('nav', []);

angular.module('nav')
  .directive('nav', [function() {
    return {
      restrict: 'A',
      link: link
    };

    function link($scope, element, attrs) {
      var mouseInitalX, mouseFinalY;
      var deltaX, deltaY;
      var canvasInitalX, canvasInitalY;
      var canvasElement = element.children()[0];
      debugger
      
      element.on('mousedown', function() {
        var target = event.target || event.srcElement;  // http://javascript.info/tutorial/bubbling-and-capturing
        // console.log(element[0] === 'svg' || element.);
        if(target.tagName === 'svg' || target.id === 'canvas') {
          console.log('hw');
        }
      });
    };
  }]);