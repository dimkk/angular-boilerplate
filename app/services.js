define(function (require, exports, module) {
    var angular=require('angular');
    var apiUrl = module.config().apiUrl;
    return angular.module('App.services',[])
        .factory('mainSrv', ['$http', function ($http) {
            return {
                request: function () {
                    return $http.get(apiUrl);
                }
            }
        }])
        .factory('$error', [function () {
            return function (msg) {
                alert(msg);
            }
        }]);
});