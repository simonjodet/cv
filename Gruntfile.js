module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        inline: {
            options: {
                cssmin: true
            },
            dist: {
                src: 'resume.html',
                dest: 'dist/resume.html'
            }
        },
        less: {
            style: {
                files: {
                    'styles.css': 'styles.less'
                }
            }
        },
        watch: {
            css: {
                files: ['*.less'],
                tasks: ['less:style', 'inline'],
                options: {
                    livereload: true
                }
            },
            markdown: {
                files: ['*.md', 'template.html'],
                tasks: ['markdown:all', 'inline'],
                options: {
                    livereload: true
                }
            }
        },
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: 'resume.md',
                        dest: '',
                        ext: '.html'
                    }
                ],
                options: {
                    template: 'template.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-markdown');

    // Default task(s).
    grunt.registerTask('default', ['less', 'markdown', 'inline', 'watch']);

};