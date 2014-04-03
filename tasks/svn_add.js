/*
 * grunt-svn-add
 * https://github.com/colmmcbarron/grunt-svn-add
 *
 * Copyright (c) 2013 Colm McBarron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('svn_add', 'Add files to svn working copy', function() {
    var exec = require('child_process').exec;
    var options = this.options({
      bin:        'svn',
      files:      '',
      execOpts:	  {}
    });
    grunt.verbose.writeflags(options, 'Options');
    grunt.log.write('Adding files: ' + options.files + '\n');

    var done = this.async();
    var command = [ options.bin, 'add', options.files].join(' ');

    exec(command, options.execOpts, function (error, stdout) {
      grunt.log.write(stdout);
      if (error !== null) {
        grunt.log.error('\n#' + command + "\n" + error);
      }
      done(true);
    });
  });
};
