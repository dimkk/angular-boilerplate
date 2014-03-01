define(function (require, exports, module) {
    var angular = require('angular');
    return angular.module('App.controllers', ['App.services'])
        .controller('MainCtrl', function ($scope, mainSrv) {
            mainSrv.request().success(function (response) {
            });
        });
});