module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'assets/js/*.js',
                dest: 'dist/js/main.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                },
                files: {
                    'style.css': 'assets/scss/style.scss',
                }
            }
        },

        uncss: {
            dist: {
                options: {
                    stylesheets  : [ 'style.css' ],
                    ignoreSheets : [/fonts.googleapis/],
                    urls         : [],
                },
                files: {
                    'style.css': ['**/*.php']
                }
            }
        },

        watch: {
            scripts: {
                files: [
                    'assets/js/*.js',
                    'assets/scss/*.scss',
                ],
                tasks: ['default'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-uncss');

    grunt.registerTask('default', ['sass', 'uglify']);
    // grunt.registerTask('default', ['sass', 'uncss:dist', 'uglify']);

};