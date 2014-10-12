// renderService.js


angular.module('newNote')
  .service('render', [function() {

    var $canvas;

    this.setCanvas = function(canvas) {
      $canvas = canvas;
    };
    
    this.append = function(str, xGlobal, yGlobal) {
      var groupEl = document.createElementNS("http://www.w3.org/2000/svg", 'g');
      groupEl.setAttribute('transform', 'translate(' + xGlobal + ',' + yGlobal + ')');
      // var str = 'Oh happy day 1 \n Oh happy day 2 \n Oh Oh Oh happy happy happy day day day 3 3 3';
      var textEl = stringToSVGText(str);
      var rectEl = appendRectFromText(groupEl, textEl);
    };

    function stringToSVGText(str) {
      var strArr = str.split('\n');
      var textEl = document.createElementNS("http://www.w3.org/2000/svg", 'text');
      textEl.setAttribute('class', 'testingNewNote');
      textEl.setAttribute('visibility', 'testingNewNote');
      for(var i = 0; i < strArr.length; i++) {
        var tspanEl = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
        tspanEl.setAttribute('x', '0');
        tspanEl.setAttribute('dy', '1.2em');
        tspanEl.textContent = strArr[i];
        textEl.appendChild(tspanEl);
      }
      return textEl;
    };

    function appendRectFromText(groupEl, textEl) {
      groupEl.appendChild(textEl);
      $canvas.append(groupEl);
      var rect = textEl.getBoundingClientRect();
      var rectEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rectEl.setAttribute('width', rect.width * 1.1);
      rectEl.setAttribute('height', rect.height * 1.1);
      rectEl.setAttribute('rx', rect.height * 0.1);
      rectEl.setAttribute('ry', rect.height * 0.1);
      rectEl.setAttribute('fill', 'red');
      // groupEl.appendChild(rectEl);
      groupEl.insertBefore(rectEl, textEl);
      //TODO: add group surrounding textEl, and move dx over a bit. OR iterate over each tspan and move each by dx
      //TODO: create a note class in pseudoclassical style
      textEl.setAttribute('visibility', 'visibile');
    };



  }]);
