module.exports = function (grunt) {
    var path = require('path');
    var configs = {
        packageFilename: "package.js"
    };

    grunt.initConfig({
        requirejs: {
            "compile-js": {
                options: {
                    baseUrl: "app",
                    mainConfigFile: "app/main.js",
                    name: "main",
                    out: "app/main.min.js",
                    deps: ["lib/requirejs/require"],
                    insertRequire: ["main"],
                    onBuildRead: function (moduleName, path, contents) {
                        var ngmin = require('ngmin');
                        return ngmin.annotate(contents);
                    }
                }
            },
            "compile-css": {
                options: {
                    cssIn: "app/styles/styles.css",
                    out: "app/styles/styles.min.css"
                }
            }
        },
        bower: {
            install: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('install', ['bower']);

    grunt.registerTask('build', ['requirejs']);
}