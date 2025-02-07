const CleanCSS = require('clean-css');

const encodeForUrl = string => encodeURIComponent(string)

module.exports = {
  cssmin: code => {
    return new CleanCSS({}).minify(code).styles;
  },
  encodeForUrl,
}
