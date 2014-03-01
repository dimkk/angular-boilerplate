define(function (require, exports, module) {
    require('somemodule/services');
    var angular = require('angular');
    return angular.module('Somemodule.controllers', ['Somemodule.services'])
        .controller('SomeCtrl', function ($scope, $log) {
            $log('Hello world!');
        });
});