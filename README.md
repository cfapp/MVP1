[![Build Status](https://travis-ci.org/cfapp/MVP1.svg?branch=master)](https://travis-ci.org/cfapp/MVP1)
[![Coverage Status](https://coveralls.io/repos/cfapp/MVP1/badge.svg)](https://coveralls.io/r/cfapp/MVP1)


# MVP1 for Crossfit app

Collaborators
-------------

[Elin Ng](https://github.com/elinnet)

[Anna Klimas](https://github.com/annaKL)

[Rocco Righi](https://github.com/bagolol)

[Tim Robertson](https://github.com/timrobertson0122)

Project Planning
----------------

* Kanban board: https://waffle.io/cfapp/MVP1  
* Project docs: https://drive.google.com/drive/u/0/folders/0B-HalME1opAZOHJWaDlnYVA5R0k  
* Wireframes: https://marvelapp.com/ch153h#8321783/grid

Technologies
------------

* Ionic?
* Cordova?
* Firebase?
* Tested in Jasmine, Karma for unit tests, Protractor for e2e testing
* etc

Prerequisites
-------------

You will need the following installed locally:  

* Node.js
* NPM
* Bower
* Karma-cli - ```npm install -g karma-cli```
* Protractor with webdriver-manager - ```npm install -g protractor```
* Latest Cordova and Ionic CLIs - ```npm install -g cordova ionic```
* Xcode, Android Studio

Project Setup
----------

* Execute the following in the command line:
* ```Git clone https://github.com/cfapp/MVP1.git```
* ```cd MVP1```
* ```bower install``` and ```npm install```

Testing Setup
-------------

For unit tests, run ```karma start test/karma.conf``` in the command line (from within the project's root directory):

For feature tests, run the following in the command line (from within the project's root directory):
* ```ionic serve``` (unless already running)
* ```webdriver-manager start```
* ```protractor test/e2e/conf.js```