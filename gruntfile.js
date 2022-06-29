module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["dist/*"],
        copy: {
            main: {
                files: [
                    { expand: true, cwd: "public", src: ["**"], dest: "dist" },
                ],
            },
        },
        uglify: {
            my_target: {
                files: {
                    "dist/index.min.js": ["src/js/jquery-2.1.0.js", "src/js/*.js"],
                }
            }
        },
        cssmin: {
            build: {
                src: "src/css/*.css",
                dest: "dist/style.min.css"
            }
        },
        //! unused
        uncss: {
            dist: {
                files: {
                    "dist/style.min.css": ["dist/*.html"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-uncss");

    grunt.registerTask("default", ["clean", "copy", "uglify", "cssmin"]);
};