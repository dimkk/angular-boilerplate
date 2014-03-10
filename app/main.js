require.config({
    baseUrl: "app",
    paths: {
        "jquery": "lib/jquery/dist/jquery",
        "angular": "lib/angular/angular",
        "text": "lib/requirejs-text/text"
    },
    shim: {
        "jquery": {
            exports: "jQuery"
        },
        "angular": {
            exports: "angular",
            "deps": ["jquery"]
        },
        "lib/angular-route/angular-route": {
            "deps": ["angular"]
        }
    },
    config: {
        "services": {
            apiUrl: "http://localhost/api"
        }
    }
});

define(function (require) {
    require("controllers/_package");
    require("services/_package");
    require("filters/_package");
    require("directives/_package");
    require("lib/angular-route/angular-route");
	require("modules/first/main");

    var angular = require("angular");

    var app = angular.module("App", ["App.controllers", "App.services", "App.directives", "App.filters", "ngRoute","First"],
        ["$provide", "$routeProvider", "$httpProvider", function ($provide, $routeProvider, $httpProvider) {
            $routeProvider
				.when("/first", {
					controller:"AppFirstCtrl",
					template:require("text!templates/views/first.html")
				});

            $httpProvider.interceptors.push(function () {
                return {
                    "request": function (config) {
                        return config;
                    },
                    "response": function (response) {
                        return response;
                    }
                }
            });
        }]);

    app.run(function ($rootScope) {
        $rootScope.$safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase == "$apply" || phase == "$digest") {
                if (fn && (typeof(fn) === "function")) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

    angular.bootstrap(document, ["App"]);
});