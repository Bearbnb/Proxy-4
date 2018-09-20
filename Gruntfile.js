module.exports = function {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'build/js/bundle.min.js': ['booking-widget/client/bundle.js',
                        'hrsf102-description-service/public/dist/bundle.js', 'hrsf102-reviews-service/public/bundle.js']
                }
            }
        }
    });
}