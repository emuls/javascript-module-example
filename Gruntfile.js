
'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.initConfig({
        watch: {
            files: ["src/**/*"],
            tasks: ["copy:html","concat:js"]
        },
        clean: ["DIST"],
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
            loaders: {
                options: {
                    flatten: true
                },
                loaders: {
                    'src/www/scripts/loaders/requireloader.dist.js': 'DIST/scripts/loaders/requireloader.js',
                    'src/www/scripts/loaders/systemloader.dist.js': 'DIST/scripts/loaders/systemloader.js',
                }
            }
        },
        concat: {
            js : {
                src: ['src/www/scripts/modules/*.js'],
                dest: 'DIST/scripts/modules.js'
            }
        }
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['clean','copy','concat']);
};
