describe("Navigation", function() {
  beforeEach(module('Navigation'));
  // var $childScope, $el;

  // beforeEach(inject(function($rootScope, $compile) {
  //   var directiveHtml = '<div my-click="testVar=6"></div>';
  //   $childScope = $rootScope.$new();

  //   $el = $compile(directiveHtml)($childScope);
  //   $childScope.$digest();
  // }));


  var navController, $scope;
  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    navController = $controller('NavigationController', {'$scope': $scope});
  }));

  it('should move the hello world svg element', function() {
    $scope.clicked();
    expect($scope.x).toBe(140);
    expect($scope.y).toBe(160);
  });

  // it('should testVar with an initial value', function() {
  //   expect($childScope.testVar).toBe(undefined);
  // });

  // it('should change the variable', function() {
  //   $el.click();
  //   //if not a browser event such as click, then call $digest
  //   expect($childScope.testVar).toBe(6);
  // });

  // it('should return "hello" when called', inject(function(helloService) {
    
  //   expect(helloService()).toBe('hello');
  // }));

});