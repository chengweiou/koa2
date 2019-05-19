const blacklist = require('../store/userBalckList')
module.exports = async(ctx, next) => {
  let auth = ctx.headers.authorization
  if (!ctx.url.match(/^\/bb/)) {
    ctx.params.loginAccount = require('../jwt/user').verify(auth)
    if (ctx.url.match(/\/player\/me/) || ctx.url.match(/\/account\/me/)) {
      if (blacklist.check(auth)) throw new (require('../error/unauthError'))('')
      if (!ctx.params.loginAccount) throw new (require('../error/unauthError'))('')
    }
  }
  await next()
}