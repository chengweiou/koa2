const service = require('../service/reqRecordService')
module.exports = async(ctx, next) => {
  await next()
  let duration = ctx.state.reqTimer.duration
  let ip = ctx.ip
  let useragent = ctx.userAgent
  let e = {
    url: `${ctx.method} ${ctx.url}`,
    ip: ip,
    duration: duration,
    os: `${useragent.platform} ${useragent.os}`,
    isMobile: useragent.isMobile,
    browser: useragent.browser,
    version: useragent.version,
    status: ctx.status,
  }

  service.save(e)
}