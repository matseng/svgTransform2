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

describe('nav module', function(){
  describe('my first nav button', function(){
    // go to localhost of webpage
    //get button
    //click button (with an 'it' block)
    //new it block, expect incremented by 100
    it('navigate to page', function() {
      browser.get('http://localhost:8080/');
    });

    it('should get the nav button and click it', function() {
      element(by.css('button')).click();
    });

    it('should ', function() {
      element(by.css('.helloWorld')).getAttribute('transform')
      .then(function(data){
        expect(data).toEqual("translate(140,160)");
      });

    });
  });

});