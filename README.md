[![Build Status](https://travis-ci.org/NathanielInman/slush-ng2js.svg?branch=master)](https://travis-ci.org/NathanielInman/slush-ng2js) [![dependency Status](https://david-dm.org/NathanielInman/slush-ng2js/status.svg?style=flat)](https://david-dm.org/NathanielInman/slush-ng2js) [![devDependency Status](https://david-dm.org/NathanielInman/slush-ng2js/dev-status.svg?style=flat)](https://david-dm.org/NathanielInman/slush-ng2js#info=devDependencies)

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Deploying the app](#deploying-the-app)
* [Thanks](#thanks)
* [License](#license)

## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic.
```
ng2js/
 ├──dist/                  * distribution folder
 |  ├──images/             * image assets
 |  ├──styles/             * compiled css stylesheets
 |  ├──scripts/            * script folder consolidates scripts
 │  │  ├──app.js           * custom application code compiled
 │  │  └──vendor.js        * imported libraries and non-custom code
 |  ├──robots.txt          * web-crawler necessity
 |  └──index.html          * compiled jade application entrypoint
 ├──src/                   * source folder
 │  ├──app/                * application folder
 │  │  ├──app.js           * simple version of an application component
 │  │  ├──index.jade       * main template to the application
 │  │  └──partials/        * holds the template partials
 │  │     ├──_head.jade    * entrypoint header partial
 │  │     └──_scripts.jade * scripts for the application partial
 │  ├──styles/             * stylesheets written in stylus
 │  │  ├──app.styl         * basic stylus file
 │  │  └──partials/        * holds the stylesheet partials
 │  │     ├──_colors.jade  * colors are a standard partial
 │  │     └──_loader.jade  * boilerplate loading animation
 │  └──assets/             * assets are moved to root distibution
 │     ├──images/          * folder to put images
 │     │  └──favicon.png   * standard application favicon
 │     └──robots.txt       * for search engines to crawl the website
 ├──gulpfile.babel.js      * build system using es2015 syntax
 └──package.json           * what npm uses to manage it's dependencies
```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions of Node and NPM

## Installing
* `npm install slush-ng2js`
* `mkdir yourApplication;cd yourApplication`
* `slush ng2js` then answer the questions
* `npm install` to install all local dependencies

## Running the app
* `gulp` to start the build process and listen for changes

## Deploying the app
All of the distribution files are found in the `dist/` folder after running the `gulp` command.

# Thanks
This boilerplate of mine is just a combination of great tools, all credit goes to
those who actually put in all the hard work to create them.

- The [Gulp][1] developers. Streaming build system - how nice and easy it is to setup.
- There have been many [Slush][2] generators that have been instrumental in getting
  all those pesky apps developed on time. It's great to finally have an alternative
  to Yeoman.
- [Webpack][9] has been an instrumental boost in productivity and clean code, allowing the
  the use of the ES2015 module system.
- Though [Jade][3] has been seen predominately as a server-side helper for templating,
  I find it incredibly helpful on front-end projects where I'm using a build system
  anyways, as the syntax is far easier to read and reduces duplication of segments with
  partials.
- From css to less to sass to [Stylus][4], it's been a long road with css pre-processors,
  but I finally found one that lets me drop all the redundant syntax and focus more on the
  design. I love my curly brace languages, but personally think that it gets in-between
  me and focusing on what's important when dealing with UX, wireframing or general
  design.
- No more worrying about vendor prefixes! [Autoprefixer][6] has been an instrumental
  improvement to my workflow when it comes to styling. None of that would be possible
  without [PostCSS][5] and all of the improvement it's brought to frontend development.
- If you're still coding without a linter like [ESLint][7], I'm not sure whether to
  give you a high-five for all the hard work or question your dedication for only
  stupidity.
- Dropped Traceur for [Babel][8] (formerly 6to5) because it has more readable compiled
  code as well as a much more versatile transpilation story when it comes to upcoming
  features to javascript. You can gather more specifics on comparisons of the two at
  their website.

# License
 [MIT](/LICENSE)

[1]:https://github.com/gulpjs/gulp
[2]:https://github.com/slushjs/slush
[3]:https://github.com/jadejs/jade
[4]:https://github.com/learnboost/stylus
[5]:https://github.com/postcss/postcss
[6]:https://github.com/postcss/autoprefixer
[7]:http://eslint.org
[8]:https://github.com/babel/babel
[9]:https://webpack.github.io
