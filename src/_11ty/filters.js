const CleanCSS = require('clean-css');

const encodeForUrl = string => encodeURIComponent(string)

module.exports = {
  cssmin: code => {
    return new CleanCSS({}).minify(code).styles;
  },
  encodeForUrl,
  filterByType: (meets, typeCodes) => meets.filter(meet => typeCodes.includes(meet.typeCode)),
}
