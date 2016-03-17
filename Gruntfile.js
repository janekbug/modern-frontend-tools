module.exports = function(grunt) {
  var helpFunction = function(){
    grunt.log.writeln('This is grunt help.');
    grunt.log.writeln('Use "grunt build" to run default tasks.');
  };

  grunt.registerTask('help', 'displays help', helpFunction);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        base: 'src'
      },
      server: {
        options: {
          open: true,
          livereload: 8999
        }
      }
    },
    watch: {
      options:{
        livereload: 8999
      },
      livereload:{
        files:[
            'src/index.html'
        ]
      },
      'index':{
        files:['src/index.html'],
        tasks:[]
      }
    }
  });

require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', [
      'connect',
      'watch'
  ]);

  grunt.registerTask('default', ['help']);
};