module.exports = async(ctx, next) => {
  // todo
  // 根据需求获取登录者id，可以 header 中获取，也可以解析 token 来获取...
  delete ctx.params.loginAccount
  let loginAccount = require('../jwt').verify(ctx.headers.authorization) // todo 未完
  ctx.headers.loginAccount = JSON.stringify(loginAccount)
  await next()
}