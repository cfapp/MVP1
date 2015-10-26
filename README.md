# MVP1

## MVP1 for Crossfit app

User stories

* Before a crossfit workout, I want to review the WOD so that I have the equipment for the workout and can mentally prepare for the session

* After I do my crossfit workout, I want to easily record my max weights lifted and Metcon results, so that I track my progress and improve results for my next workout

* When I do my weightlifting movements, I want to see what my 1RM is so that I can beat my 1RM and accurately scale my training reps (at 60%, 70%, 80%, 90%, 100%) 

* When I do my weightlifting movements, I want to add notes on my performance (e.g. 3RM) so I can track my performance and improve on my last lifts.

* When I do my crossfit lifts, I want to see the historical progress I have made with my 1RM




##To run the tests:

```
bower install
npm install
```

Make sure to have karma-cli, Protractor and webdriver-manager installed.
```
npm install -g karma-cli
npm install -g protractor
webdriver-manager update
```

To run unit tests:
```
karma start test/karma.conf
```

To run feature tests:
```
ionic serve --lab
webdriver-manager start
protractor test/e2e/conf.js
```
