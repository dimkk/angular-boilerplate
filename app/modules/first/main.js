define(function (require, exports, module) {
    require("modules/first/controllers/_package");
    require("modules/first/services/_package");
    require("modules/first/directives/_package");
    require("modules/first/filters/_package");

    var angular = require("angular");

    return angular.module("First", ["First.controllers", "First.services", "First.directives", "First.filters"]);

});