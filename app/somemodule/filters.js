define(function (require) {
    var angular = require('angular');
    return angular.module('Somemodule.filters', [])
        .filter('lowercase', function () {
            return function (text) {
                if (text === undefined || !text)
                    return '';

                return text.toLowerCase();
            };
        });
});