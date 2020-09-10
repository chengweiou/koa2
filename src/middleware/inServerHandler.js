module.exports = async(ctx, next) => {
  delete ctx.headers.inServer
  await next()
}