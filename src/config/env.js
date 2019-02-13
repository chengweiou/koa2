process.env.NODE_ENV = 'dev'

module.exports = require('../util/readToml')(`src/config/${process.env.NODE_ENV}.toml`)
