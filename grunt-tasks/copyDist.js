/**
 * Created by Janusz.Bugajny on 2016-03-17.
 */
module.exports = function(grunt){
    var appConfig = {
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
        }
    };
    grunt.config.merge(appConfig);
    var tasks = ['copy'];
    grunt.registerTask('copyToDist', tasks);
};