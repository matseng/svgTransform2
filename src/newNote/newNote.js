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
    var $canvas;
    function link($scope, element, attrs) {
      $canvas = angular.element(element.find('g')[0]);
      element.on('click', function(mouse) {
        target = mouse.target || mouse.srcElement;
        if ( target.tagName === 'svg' || target.id === 'canvas' ) {
          x = mouse.x;
          y = mouse.y;
          xGlobal = x / navService.getScale() - navService.getX();
          yGlobal = y / navService.getScale() - navService.getY();
          console.log('hello world ', xGlobal, yGlobal, element); 
          var groupEl = document.createElementNS("http://www.w3.org/2000/svg", 'g');
          var newNoteEl = document.createElementNS("http://www.w3.org/2000/svg", 'text');
          newNoteEl.setAttribute('class', 'testingNewNote');
          groupEl.setAttribute('transform', 'translate(' + xGlobal + ',' + yGlobal + ')');

          newNoteEl.textContent = 'Oh happy day';
          groupEl.appendChild(newNoteEl);
          $canvas.append(groupEl);
          // var newNoteStr = "<g transform='translate(500,500)' class='helloWorld'> <text class='helloWorld'>Hello World 4</text></g>"
          // canvas.append(newNoteStr);
          // element.parent().append('<div class="testingNewNote">Hello world 4</div>');
        }
      
      });

      function makeSVG(tag, attrs) {
        var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs)
            el.setAttribute(k, attrs[k]);
        return el;
      }
    };

  }]);
