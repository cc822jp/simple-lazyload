module.exports = function(grunt) {

    var fs = require('fs');

    grunt.initConfig({

        paths: {
            js_src: 'simple-lazyload.js',
            js: 'simple-lazyload.min.js'
        },

        jshint:{
            src: ['<%= paths.js_src %>'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        uglify: {
            options: {
                preserveComments: 'some'
            },
            js: {
                expand: true,
                files: {
                    '<%= paths.js %>': '<%= paths.js_src %>'
                }
            }
        },

        watch: {
            js: {
                files: '<%= paths.js_src %>',
                tasks: ['jshint', 'uglify']
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // register task
    grunt.registerTask('default', ['jshint', 'uglify']);

};
