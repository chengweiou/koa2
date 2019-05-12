const mongoose = require('mongoose')
const model = mongoose.model('reqRecord', {url: String, ip: String, duration: Number, os: String, isMobile: Boolean, browser: String, version: String, status: String, updateAt: Date})
model.null = {isNull: true}
module.exports = model