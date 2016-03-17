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
        clean:{
            output:'<%= cfg.paths.output %>',
            options:{
                force: true
            }
        },
        copy: {
            html: {
                src: '<%= cfg.paths.source %>/index.html',
                dest: '<%= cfg.paths.output %>/index.html'
            },
            css: {
                src: '<%= cfg.paths.source %>/css/jumbotron.css',
                dest: '<%= cfg.paths.output %>/css/jumbotron.css'
            },
            bootstrapStyle:{
                src: '<%= cfg.paths.bower %>/bootstrap/dist/css/bootstrap.min.css',
                dest: '<%= cfg.paths.output %>/css/bootstrap.min.css'
            },
            bootstrapJs:{
                src: '<%= cfg.paths.bower %>/bootstrap/dist/js/bootstrap.min.js',
                dest: '<%= cfg.paths.output %>/js/bootstrap.min.js'
            },
            jquery:{
                src: '<%= cfg.paths.bower %>/jquery/dist/jquery.min.js',
                dest: '<%= cfg.paths.output %>/js/jquery.min.js'
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
        'clean',
        'copy',
        'connect',
        'watch'
    ]);

    grunt.registerTask('default', ['help']);
};