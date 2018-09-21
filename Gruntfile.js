module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'public/bundle.js': ['hrsf102-description-service/public/dist/bundle.js',
                     'hrsf102-reviews-service/public/bundle.js',
                    'booking-widget/client/dist/bundle.js', 'photo-portal/AppBuild/build/main.82cb8d08.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

};
