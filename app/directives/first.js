define(function (require) {
    require("directives/_module");

    var angular = require("angular");

    angular.module("App.directives").directive("appFirst", function ($scope) {
        return{
            restrict: 'E',
            replace: true,
            template: require('text!templates/directives/first.html')
        }
    });
});