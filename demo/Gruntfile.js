'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        // our grunt-webfont-configuration
        webfont: {
            icons: {
                src: 'assets/icons/*.svg',
                dest: 'public/fonts',
                destCss: 'public/styles',
                options: {
                    relativeFontPath: '../fonts'
                }
            }
        },

        // configure a convenient little webserver so you don't have to
        connect: {
            server: {
                options: {
                    base: __dirname + '/public',
                    hostname: 'localhost', 
                    port: 3001,
                    keepalive: true
                }
            }
        }
    });

    grunt.registerTask('default', ['webfont', 'connect']);
};
