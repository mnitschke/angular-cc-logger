# angular-cc-logger [![Build Status](https://travis-ci.org/mnitschke/angular-cc-logger.svg?branch=master)](https://travis-ci.org/mnitschke/angular-cc-logger)

Basic decorator for angular.$log.

## Description

angular-cc-logger provides four methods:
- error
- warn
- notice
- info

## Install
Run

`
bower install angular-cc-logger
`

and paste
```html
<script src="bower_components/angular-cc-logger/angular-cc-logger.min.js"></script>
```
into your `index.html`.

##Using

###Injecting functions

Logger can easily inject javascript functions. Functions should have two arguments, just like the example below.
```html
<script>
  var test_function = function(level, message){
    // do something
  }
</script>
```
To inject `test_function` into `angular-cc-logger` you need to push it using `angular-cc-logger.$loggerProvider`.
```js
angular
  .module('testApp', [
    'angular-cc-logger'
  ])
  .config(AppConfig);

AppConfig.$inject = [
  "angular-cc-logger.$loggerProvider"
];

function AppConfig($loggerProvider){
  $loggerProvider.pushHandler(test_function);
}
```
###Stop calling handlers

If you do not want to call your handlers anymore, you can easily disable them by setting `debug` property on `false`.
```js
function AppConfig($loggerProvider){
  // ...
  $loggerProvider.debug = false;
}
```
