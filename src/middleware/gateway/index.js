const proxy = require('http-proxy-middleware')
const k2c = require('koa2-connect')
const config = require('config')
const list = []
config.get('gatewayList').forEach(e => {
  let option = {...e.option, pathRewrite: {}}
  e.rewriteList.forEach(rewrite => {
    option.pathRewrite[rewrite.k] = rewrite.v
  })
  let gateway = k2c(proxy.createProxyMiddleware(e.url, option))
  list.push(gateway)
})
module.exports = list