/**
 * Created by Janusz.Bugajny on 2016-03-17.
 */
module.exports = function(grunt){
    var appConfig = {
        clean:{
            output:'<%= cfg.paths.output %>',
            options:{
                force: true
            }
        }
    };
    grunt.config.merge(appConfig);
    var tasks = ['clean'];
    grunt.registerTask('cleanDist', tasks);
};