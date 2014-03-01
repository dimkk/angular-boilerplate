define(function (require, exports, module) {
    var angular = require('angular');
    var $ = require('jquery');
    return angular.module('App.directives',[]).directive('mainDir', [function () {
        return{
            restrict: 'E',
            scope: {
                text: '@'
            },
            replace: true,
            template: require('text!templates/directives/main.html')
        }
    }]);
});