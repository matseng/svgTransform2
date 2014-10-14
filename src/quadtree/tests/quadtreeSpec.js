// navServiceTest.js

describe('quadtree service', function() {
  var qt;
  
  beforeEach(module('quadtree'));

  beforeEach( inject(function(quadtree) {
    qt = quadtree;
  }));

  // this.scalePoint = function(x, scale, tx, mouseX, nextScale) {


  it('should scale up to the next point when mouse is at the origin', function() {
    expect(qt.hw).to.equal('hi ya');
    // expect(nav.translateCenter(40, 2, 0, 0, 4)).toEqual(0);
  });

});

