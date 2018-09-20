module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'public/bundle.js': ['hrsf102-description-service/public/dist/bundle.js', 'hrsf102-reviews-service/public/bundle.js']
                }
            }
        }
    });
//'booking-widget/client/bundle.js',
//
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};
