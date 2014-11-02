$ npm install protractor --save-dev // Install protractor locally if not already installed globally. Global install may require sudo

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

Run this script:
  $ cd node_modules/protractor/bin/
    $ ./webdriver-manager update
    (or just $ node_modules/protractor/bin/./webdriver-manager update )

Other:
  - Install Java Dev Kit to run Selenium server

Unit tests:
  $ ./node_modules/karma/bin/karma start  // same as ./node_modules/karma/bin/karma start karma.conf.js

e2e tests:
  $ python -m SimpleHTTPServer 8080  //hard coded in e2eSpec.js
  $ ./node_modules/.bin/webdriver-manager start  //starts the Selenium server, but requires Java Dev Kit (JDK)
  $ ./node_modules/protractor/bin/protractor protractor.conf.js [OR]
    $ ./node_modules/protractor/bin/protractor protractor.conf.js debug

TODO (general):
  - add tests for each module (as opposed to in a test folder)
  - use grunt or browserify to concat tests from different modules and then run karma

TODO (features):
  - Edit notes with 2-click --> textArea

TODO (bug fixes):
  - turn off window scrolling
