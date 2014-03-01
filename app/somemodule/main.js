define(function (require, exports, module) {
    require('somemodule/controllers');
    require('somemodule/services');
    require('somemodule/directives');
    require('somemodule/filters');

    var angular = require('angular');

    return angular.module('Somemodule', ['Somemodule.controllers', 'Somemodule.services', 'Somemodule.directives', 'Somemodule.filters']);

});