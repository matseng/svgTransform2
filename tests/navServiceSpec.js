// navServiceTest.js

describe('navService', function() {
  var nav;
  
  beforeEach(module('nav'));

  beforeEach( inject(function(navService) {
    nav = navService;
  }));

  // this.scalePoint = function(x, scale, tx, mouseX, nextScale) {


  it('should scale up to the next point when mouse is at the origin', function() {
    expect(nav.translateCenter(20, 1, 0, 0, 2)).toEqual(0);
    expect(nav.translateCenter(40, 2, 0, 0, 4)).toEqual(0);
  });

  it('should scale down to the next point when mouse is at the origin', function() {
    expect(nav.translateCenter(40, 2, 0, 0, 1)).toEqual(0);
    expect(nav.translateCenter(80, 4, 0, 0, 2)).toEqual(0);
  });

  it('should return the next point when mouse is not at the origin', function() {
    expect(nav.translateCenter(40, 2, 0, 60, 4)).toEqual(-60);
  });

});


    //pt: 20  scale: 1x, translate 0, 0, mouse: 0
    //pt: 40  scale: 2x, translate 0, mouse: 0 
    //pt: 80  scale: 4x, translate 0, mouse: 0

    //pt: 20  scale: 1x, translate 0, mouse: 0
    //pt: 40  scale: 2x, translate 0, mouse: 0
    // then move mouse to 60 
    //pt: 20  scale: 4x, mouse: 60
