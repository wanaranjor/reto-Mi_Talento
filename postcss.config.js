const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssimport = require('postcss-import');


const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssimport, tailwindcss, autoprefixer, cssnano]
    : [postcssimport, tailwindcss];

module.exports = { plugins };
