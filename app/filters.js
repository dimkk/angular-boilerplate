define(function (require) {
    var angular = require('angular');
    return angular.module('App.filters',[])
        .filter('case', function () {
            return function (text, toUppercase) {
                if (text === undefined || !text)
                    return '';

                return toUppercase ? text.toUpperCase() : text.toLowerCase();
            };
        });
});