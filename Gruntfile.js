module.exports = function(grunt) {

  grunt.initConfig({
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
        hostname: 'localhost'
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
            'index.html'
        ]
      },
      'index':{
        files:['index.html'],
        tasks:[]
      }
    }
  });

require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', [
      'connect',
      'watch'
  ]);

  grunt.registerTask('default', ['build']);
};