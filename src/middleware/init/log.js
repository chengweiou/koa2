const log = require('../../core/log')
module.exports = async(ctx, next) => {
  ctx.log = log
  await next()
}