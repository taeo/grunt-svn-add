# grunt-svn-add

> Add files/directories to SVN working copy via Grunt.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt]. before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svn-export --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svn-export');
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
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.bin
Type: `String`
Default value: `'svn'`

A string value that is used to specify the path to your svn executable.

#### options.repository
Type: `String`
Default value: `''`

A string value that is used to specify the repository path.

#### options.output
Type: `String`
Default value: `'src'`

A string value that is used to specify the output path of the export.

#### options.execOpts
Type: `Object`
Default value: `{}`

An object with exec configuration settings

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  svn_add: {
    dev: {
      options: {
        repository: 'file:///some/repo/path'
        // Optional setting for exporting large repositories
        execOpts: {
          maxBuffer: 1000*1024
        }        
      }
    }
  }
})
```

#### Custom Options

```js
grunt.initConfig({
  svn_add: {
    dev: {
      options: {
        bin: '/usr/bin/svn',
        repository: '<%= pkg.svn %>',
        output: 'output/files'
      }
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Thanks
Inspired by the [grunt-svn-export](https://github.com/francisbyrne/grunt-svn-export) plugin

## Release History
_(Nothing yet)_
