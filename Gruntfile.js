
'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-systemjs-builder');

    grunt.initConfig({
        watch: {
            files: ["src/**/*"],
            tasks: ["copy:html","concat:js"]
        },
        clean: ["DIST", "BUILD"],
        copy: {
            html : {
                cwd: 'src/www',  // set working folder / root to copy
                src: '**/*.html',           // copy all files and subfolders
                dest: 'DIST',    // destination folder
                expand: true           // required when using cwd
            },
            libs : {
                cwd: 'src/www/scripts/libs',  // set working folder / root to copy
                src: '**/*.js',           // copy all files and subfolders
                dest: 'DIST/scripts/libs',    // destination folder
                expand: true           // required when using cwd
            },
            loaders : {
                cwd: 'src/www/scripts/loaders',  // set working folder / root to copy
                src: '**/*',           // copy all files and subfolders
                dest: 'DIST/scripts/loaders',    // destination folder
                expand: true
            }
        },
        concat: {
            systemjs : {
                src: ['src/www/scripts/modules/*.js', 'src/www/scripts/app.js'],
                dest: 'BUILD/intermediate/scripts/modules.js'
            }
        },
        systemjs: {
            options: {
                minify: false,
                sourcemaps:false,
                builder:{
                    defaultJSExtensions:true,
                    paths: {
                        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
                        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js'
                    },
                }
            },
            dist: {
                files: [{
                    'src':  'BUILD/intermediate/scripts/modules.js',
                    'dest': 'DIST/scripts/app.js'
                }]
            }
        }
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['clean','copy','concat', 'systemjs']);
};
