/*
 * grunt-svn-add
 * https://github.com/ColmMcBarron/grunt-svn-add
 *
 * Copyright (c) 2014 Colm McBarron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    svn_add: {
      options: {
        verbose: true,
        debug: true,
        svnOpts: '--force'
      },
      default_options: {
        options: {
          debug: false
        },
        files: { 
          src: ['test/dir1/*.txt']
        }
      },
      custom_options: {
        options: {
          debug: false
        },
        files: {
          src: ['test/dir1/*']
        }
      },
      not_found: {
        files: {
          src: ['test/notexists']
        }
      },
      multiple_files: {
        options: {
          debug: false
        },
        files: {
          src: ['test/dir1/*', 'test/dir2/*']
        }
      },
      empty_files: {
        options: {
          verbose: false,
          debug: false
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'svn_add', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
