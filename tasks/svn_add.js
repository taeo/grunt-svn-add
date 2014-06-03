/*
 * grunt-svn-add
 * https://github.com/ColmMcBarron/grunt-svn-add
 *
 * Copyright (c) 2014 Colm McBarron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('svn_add', 'SVN add command in grunt', function() {
    // Merge task-specific and/or target-specific options with these defaults.

    var exec = require('child_process').exec;
    var options = this.options({
      bin: 'svn',
      svnOpts: '',
      verbose: false,
      debug: false,
      execOpts: {}
    });

    var done = this.async();

    if (this.files.length === 0) {
      grunt.log.warn('Skipping, files is not declared.');
    }

    this.files.forEach(function(filePair) {

      if (filePair.src.length === 0) {
        grunt.log.warn('Skipping, files src is empty or path does not exist');
      }

      filePair.src.forEach(function(f) {

        var command = [ options.bin, 'add', f, options.svnOpts ].join(' ');
        
        if (options.verbose) {
          grunt.log.write('SVN add: ' + f + ' ' + options.svnOpts + '\n');
        }

        exec(command, options.execOpts, function (error, stdout) {
          grunt.log.write(stdout);
          if (error !== null && options.debug) {
            grunt.log.error('\n#' + command + "\n" + error);
          }
          done(true);
        });

      });

    });

  });

};
