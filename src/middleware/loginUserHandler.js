module.exports = async(ctx, next) => {
  // todo
  // 根据需求获取登录者id，可以 header 中获取，也可以解析 token 来获取...
  delete ctx.params.loginUser
  ctx.params.loginUser = ctx.header.loginUser
  await next()
}