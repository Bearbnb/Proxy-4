module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'public/bundle.js': ['hrsf102-description-service/public/dist/bundle.js',
                    'hrsf102-reviews-service/public/bundle.js',
                    'booking-widget/client/dist/bundle.js', 
                    'photo-portal/AppBuild/build/static/js/main.3dd84b9f.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};
