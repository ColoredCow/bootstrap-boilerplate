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
                    'dist/css/style.css': 'assets/scss/style.scss',
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

    grunt.registerTask('default', ['sass', 'uglify']);

};