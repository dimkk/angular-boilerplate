require.config({
    baseUrl: 'app',
    paths: {
        'jquery': 'lib/jquery/dist/jquery',
        'angular': 'lib/angular/angular',
        'text': 'lib/requirejs-text/text'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            exports: 'angular',
            'deps': ['jquery']
        },
        'lib/angular-route/angular-route': {
            'deps': ['angular']
        }
    },
    config: {
        'services': {
            apiUrl: 'http://localhost/api'
        }
    }
});

define(function (require) {
    require('controllers');
    require('services');
    require('directives');
    require('filters');
    require('lib/angular-route/angular-route');
    require('somemodule/main');

    var angular = require('angular');

    var app = angular.module('App', ['App.controllers', 'App.services', 'App.directives', 'App.filters', 'ngRoute','Somemodule'],
        ['$provide', '$routeProvider', '$httpProvider', function ($provide, $routeProvider, $httpProvider) {
            $routeProvider
                .when('/', {
                    controller: 'MainCtrl',
                    template: require('text!templates/views/main.html')
                });

            $httpProvider.interceptors.push(['$q', '$error', function ($q, $error) {
                return {
                    'request': function (config) {
                        return config;
                    },
                    'response': function (response) {
                        return response;
                    },
                    'responseError': function (rejection) {
                        $error('Connection error!');
                        return $q.reject(rejection);
                    }

                }
            }]);
        }]);

    app.run( function ($rootScope) {
        $rootScope.$safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase == '$apply' || phase == '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

    angular.bootstrap(document, ['App']);
});