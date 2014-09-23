angular.module('nav')
  .service('navService', [function() {
    this.translateCenter = function(x, scale, tx, mouseX, nextScale) {
      // var nextX = x / scale * nextScale;
      
      // var deltaX = (mouseX - x) / scale * nextScale;
      // var nextX = mouseX - deltaX; 
      var transG = x / scale;
      // Math.round(transG * 1000) / 1000;
      // var transMouse = mouseX - mouseX / scale * nextScale;
      console.log(x, scale, transG);

      return transG
    };
    //pt: 20  scale: 1x, translate 0, mouse: 0
    //pt: 40  scale: 2x, translate 0, mouse: 0 
    //pt: 80  scale: 4x, translate 0, mouse: 0

    //pt: 20  scale: 1x, translate 0, mouse: 0
    //pt: 40  scale: 2x, translate 0, mouse: 0
    // then move mouse to 60 
    //pt: 20  scale: 4x, mouse: 60


  }]);
