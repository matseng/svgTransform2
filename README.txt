$ npm install protractor  // Install protractor locally if not already installed globally. Global install may require sudo

Initial setup:
  $ bower init
  $ npm init
  $ touch .gitignore  // then add bower_components and node_modules
  $ bower install angular --save
  $ bower install angular-mocks --save
  $ touch protractor.config.js
  $ touch index.html
  $ touch karma.conf.js
  $ mkdir src
  $ touch app.js
  $ cd node_modules/protractor/bin/
  $ ./webdriver-manager update

Unit tests:
  $ ./node_modules/karma/bin/karma start  // same as ./node_modules/karma/bin/karma start karma.conf.js

e2e tests:
  $ python -m SimpleHTTPServer 8080  //hard coded in e2eSpec.js
  $ ./node_modules/.bin/webdriver-manager start  //starts the Selenium server, but requires Java Dev Kit (JDK)
  $ ./node_modules/protractor/bin/protractor protractor.conf.js