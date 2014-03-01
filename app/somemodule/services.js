define(function (require, exports, module) {
    var angular=require('angular');
    return angular.module('Somemodule.services',[])
        .factory('$log', [function () {
            return function (msg) {
                console.log(msg);
            }
        }]);
});