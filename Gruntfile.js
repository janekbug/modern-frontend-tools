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

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', [
      'connect',
      'watch'
  ]);

  grunt.registerTask('default', ['build']);
};