module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["dist/*"],
        copy: {
            dist: {
                files: [
                    { expand: true, cwd: "public", src: ["**"], dest: "dist" },
                ],
            },
        },
        uglify: {
            dist: {
                files: {
                    "dist/index.min.js": ["src/js/jquery-2.1.0.js", "src/js/*.js"],
                }
            }
        },
        cssmin: {
            dist: {
                src: "src/css/*.css",
                dest: "dist/style.min.css"
            }
        },
        uncss: {
            dist: {
                files: {
                    "dist/style.min.css": ["dist/*.html"]
                },
                options: {
                    ignore: [".collapsing", ".collapse.in"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-uncss");

    grunt.registerTask("default", ["clean", "copy", "uglify", "cssmin", "uncss"]);
};
