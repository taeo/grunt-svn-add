# grunt-svn-add

> Grunt SVN Add plugin

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install taeo/grunt-svn-add --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svn-add');
```

## The "svn_add" task

### Overview
In your project's Gruntfile, add a section named `svn_add` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svn_add: {
    options: {
      // Task-specific options go here.
    },
    files: [] // Target-specific file lists go here.
    }
  }
});
```

### Options

#### options.verbose
Type: `Bool`
Default value: `false`

Outputs file paths being executed. ie. `SVN add: [filepath]`.

#### options.debug
Type: `Bool`
Default value: `false`

Outputs any errors or notices.


### Usage Examples

#### Default Options

```js
grunt.initConfig({
  svn_add: {
    options: {
      bin: 'svn',
      verbose: false,
      debug: false,
      execOpts: {}    
    },
    files: []
  }
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
