const blacklist = require('../store/bbBalckList')
module.exports = async(ctx, next) => {
  let auth = ctx.headers.authorization
  if (ctx.url.match(/^\/bb/)) {
    if (!ctx.url.includes('/bb/login')) {
      ctx.params.loginAccount = require('../jwt/bb').verify(auth)
      if (blacklist.check(auth)) throw new (require('../error/unauthError'))('')
      if (!ctx.params.loginAccount) throw new (require('../error/unauthError'))('')
    }
  }
  await next()
}