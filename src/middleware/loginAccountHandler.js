const blacklist = [] // todo change to redis

module.exports = async(ctx, next) => {
  delete ctx.headers.loginAccount
  let auth = ctx.headers.authorization
  if (blacklist.includes(auth)) {
    await next()
    return
  }
  let loginAccount = require('../jwt').verify(auth)
  if (loginAccount) ctx.headers.loginAccount = JSON.stringify(loginAccount)
  await next()
}