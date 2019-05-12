const config = require('config')
const mongoose = require('mongoose')

module.exports = {
  drop: async() => {
    await mongoose.connect(config.get('db.host'), {useNewUrlParser: true})
    mongoose.connection.db.dropDatabase()
  },
}
