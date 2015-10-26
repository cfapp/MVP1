[![Build Status](https://travis-ci.org/cfapp/MVP1.svg?branch=master)](https://travis-ci.org/cfapp/MVP1)
[![Coverage Status](https://coveralls.io/repos/cfapp/MVP1/badge.svg)](https://coveralls.io/r/cfapp/MVP1)
[![Code Climate](https://codeclimate.com/github/cfapp/MVP1/badges/gpa.svg)](https://codeclimate.com/github/cfapp/MVP1)

##MVP1 for Crossfit app

##User stories

* Before a crossfit workout, I want to review the WOD so that I have the equipment for the workout and can mentally prepare for the session

* After I do my crossfit workout, I want to easily record my max weights lifted and Metcon results, so that I track my progress and improve results for my next workout

* When I do my weightlifting movements, I want to see what my 1RM is so that I can beat my 1RM and accurately scale my training reps (at 60%, 70%, 80%, 90%, 100%)

* When I do my weightlifting movements, I want to add notes on my performance (e.g. 3RM) so I can track my performance and improve on my last lifts.

* When I do my crossfit lifts, I want to see the historical progress I have made with my 1RM


Collaborators
-------------

[Elin Ng](https://github.com/elinnet)

[Anna Klimas](https://github.com/annaKL)

[Rocco Righi](https://github.com/bagolol)

[Tim Robertson](https://github.com/timrobertson0122)

Project Planning
----------------

<<<<<<< HEAD
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

To run feature tests:
```
ionic serve --lab
webdriver-manager start
protractor test/e2e/conf.js
```
