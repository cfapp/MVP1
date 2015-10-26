# MVP1

MVP1 for Crossfit app




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