const mongoose = require('mongoose')
const model = mongoose.model('xxx', {name: String, age: Number})
model.null = {isNull: true}
module.exports = model