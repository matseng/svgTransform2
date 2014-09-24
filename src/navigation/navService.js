angular.module('nav')
  .service('navService', [function() {
    
    var transform = {
      scale: 1,
      tx: 0,
      ty: 0
    };

    this.translateCenter = function(x, scale, tx, mouseX, nextScale) {
      var v0 = 0 - x / scale;
      var vMouse = mouseX / nextScale;
      var delta = (x - mouseX) / scale;
      return v0 + vMouse + delta;
    };

    this.setTransform = function(scale, tx, ty) {
      transform.scale = scale || transform.scale;
      transform.tx = tx || transform.tx;
      transform.ty = ty || transform.ty;
    };

    this.getScale = function() {
      return transform.scale;
    }

  }]);
