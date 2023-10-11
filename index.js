const os = require('node:os')
const fs = require('node:fs')
const f = require('node:fs')

const state = fs.statSync('./archivo.txt')
console.log(state)

console.log('Information system:', os.platform())

function sum (a, b) {
  return a + b
}

module.exports = sum
