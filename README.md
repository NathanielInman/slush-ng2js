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
 |  ├──scripts/            * script folder consolidates scripts
 │  │  ├──app.js           * custom application code compiled
 │  │  └──vendor.js        * imported libraries and non-custom code
 |  ├──robots.txt          * web-crawler necessity
 |  └──index.html          * compiled jade application entrypoint
 ├──src/                   * source folder
 │  ├──app/                * application folder
 │  │  ├──app.js           * simple version of an application component
 │  │  ├──appModule.js     * simplify providers for application
 │  │  ├──Accessor.js      * Allows NgModel on custom components
 │  │  ├──index.jade       * main template to the application
 │  │  └──components/      * holds the control components
 │  │     ├──textBox/
 │  │     ├──btn/
 │  │     └──main/
 │  └──assets/             * assets are moved to root distibution
 │     ├──images/          * folder to put images
 │     │  └──favicon.png   * standard application favicon
 │     └──robots.txt       * for search engines to crawl the website
 ├──config.js              * webpack configuration file
 ├──server.js              * webpack dev server configuration
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
* `npm start` to start the build process and listen for changes

## Deploying the app
All of the distribution files are found in the `dist/` folder after running the `gulp` command.

# Thanks
This boilerplate of mine is just a combination of great tools, all credit goes to
those who actually put in all the hard work to create them.

- There have been many [Slush][1] generators that have been instrumental in getting
  all those pesky apps developed on time. It's great to finally have an alternative
  to Yeoman.
- [Webpack][8] has been an instrumental boost in productivity and clean code, allowing the
  the use of the ES2015 module system.
- Though [Jade][2] has been seen predominately as a server-side helper for templating,
  I find it incredibly helpful on front-end projects where I'm using a build system
  anyways, as the syntax is far easier to read and reduces duplication of segments with
  partials.
- From css to less to sass to [Stylus][3], it's been a long road with css pre-processors,
  but I finally found one that lets me drop all the redundant syntax and focus more on the
  design. I love my curly brace languages, but personally think that it gets in-between
  me and focusing on what's important when dealing with UX, wireframing or general
  design.
- No more worrying about vendor prefixes! [Autoprefixer][5] has been an instrumental
  improvement to my workflow when it comes to styling. None of that would be possible
  without [PostCSS][4] and all of the benefits it's brought to frontend development.
- If you're still coding without a linter like [ESLint][6], I'm not sure whether to
  give you a high-five for all the hard work or question your dedication for only
  stupidity.
- Dropped Traceur for [Babel][7] (formerly 6to5) because it has more readable compiled
  code as well as a much more versatile transpilation story when it comes to upcoming
  features to javascript. You can gather more specifics on comparisons of the two at
  their website.

# License
 [MIT](/LICENSE)

[1]:https://github.com/slushjs/slush
[2]:https://github.com/jadejs/jade
[3]:https://github.com/learnboost/stylus
[4]:https://github.com/postcss/postcss
[5]:https://github.com/postcss/autoprefixer
[6]:http://eslint.org
[7]:https://github.com/babel/babel
[8]:https://webpack.github.io
