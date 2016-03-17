module.exports = function (grunt) {
    var helpFunction = function () {
        grunt.log.writeln('This is grunt help.');
        grunt.log.writeln('Use "grunt build" to run default tasks.');
    };

    grunt.registerTask('help', 'displays help', helpFunction);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cfg: {
            paths: {
                root: __dirname,
                source: '<%= cfg.paths.root %>/src',
                output: '<%= cfg.paths.root %>/dist',
                bower: '<%= cfg.paths.root %>/bower_components'
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                base: 'dist'
            },
            server: {
                options: {
                    open: true,
                    livereload: 8999
                }
            }
        },
        watch: {
            options: {
                livereload: 8999
            },
            livereload: {
                files: [
                    'dist/index.html'
                ]
            },
            'index': {
                files: ['dist/index.html'],
                tasks: []
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', [
        'cleanDist',
        'copyToDist',
        'connect',
        'watch'
    ]);

    grunt.registerTask('default', ['help']);
    grunt.task.loadTasks('grunt-tasks');
};