// describe('angularjs homepage todo list', function() {
//   it('should add a todo', function() {
//     browser.get('http://www.angularjs.org');

//     element(by.model('todoText')).sendKeys('write a protractor test');
//     element(by.css('[value="add"]')).click();

//     var todoList = element.all(by.repeater('todo in todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write a protractor test');
//   });
// });

// Selenium docs: https://code.google.com/p/selenium/wiki/WebDriverJs
// http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.actions (but doest...)
// https://code.google.com/p/selenium/source/browse/javascript/webdriver/actionsequence.js

describe('Nav Module', function(){
  describe('first set of tests...', function(){
    it('navigate to page', function() {
      browser.get('http://localhost:8080/');
    });

    xit('should get the nav button and click it', function() {
      element(by.css('button')).click();
    });

    xit('should... ', function() {
      element(by.css('.helloWorld')).getAttribute('transform')
      .then(function(data){
        expect(data).toEqual("translate(120,160)");
      });
    });

    it('should get the right global coordinate from a mouse coordinate', function() {
      // clickAt(element(by.css('svg'))
      var actions = browser.driver.actions();
      actions.mouseMove(element(by.css('svg')), {x:200,y:200})
        .click()
        .perform();
        // browser.debugger();  //SAVE and ./node_modules/protractor/bin/protractor protractor.conf.js debug
    });

    it('should...', function() {
      element(by.css('.testingNewNote')).isPresent().then(function(bool){
        expect(bool).toEqual(true);
      });
    });
  });

});
