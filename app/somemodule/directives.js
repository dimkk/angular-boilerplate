define(function (require, exports, module) {
    var angular = require('angular');
    var $ = require('jquery');
    return angular.module('Somemodule.directives',[]).directive('someDir', [function () {
        return{
            restrict: 'E',
            scope: {
                text: '@'
            },
            replace: true,
            template: require('text!somemodule/templates/directives/another.html')
        }
    }]);
});