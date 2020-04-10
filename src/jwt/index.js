const jwt = require('jsonwebtoken')
const config = require('config')
module.exports = {
  sign: (payload) => {
    payload.date = new Date().getTime() // 防止同用户1token一样
    return jwt.sign(payload, config.get('jwt.sign'), { algorithm: 'HS512', issuer: config.get('jwt.issuer'), expiresIn: `${config.get('jwt.expMinute')}min`})
  },
  verify: (auth) => {
    try {
      let token = auth.indexOf('Bearer')===0 ? auth.substring('Bearer '.length) : auth
      let decode = jwt.verify(token, config.get('jwt.sign'), { algorithm: 'HS512', issuer: config.get('jwt.issuer'), expiresIn: `${config.get('jwt.expMinute')}min`})
      return { id: decode.accountId, person: {id: decode.personId}, extra: decode.extra }
    } catch (err) {
      return null
    }
  },
}