const CleanCSS = require('clean-css');

const encodeForUrl = string => encodeURIComponent(string)

module.exports = {
  cssmin: code => {
    return new CleanCSS({}).minify(code).styles;
  },
  encodeForUrl,
  filterByType: (meets, typeCode) => meets.filter(meet => meet.typeCode === typeCode),
}
