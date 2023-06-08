const dotenv = require('dotenv')
const path = require('path')

console.log('env', process.env.NODE_ENV)
console.log('__dirname', __dirname)
const fileName = process.env.NODE_ENV === 'prod'
    ? '.production'
    : '.development'
dotenv.config({path: path.join(__dirname, '..', fileName )})

console.log('foo', process.env.foo)
