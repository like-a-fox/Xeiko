
let ingnore = ['**/dist']

const presetAbsPath = require('path').join(__dirname, '.babel-preset.js')

module.exports = {
  sourceMaps: true,
  presets: [presetAbsPath],
  plugins: ['add-module-exports'],
  env: {
    development: {
      plugins: ['inline-dotenv']
    },
    production: {
      plugins: ['inline-dotenv']
    }
  }
}