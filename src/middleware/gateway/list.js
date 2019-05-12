const proxy = require('http-proxy-middleware')
const k2c = require('koa2-connect')
const list = [
  k2c(proxy('/andromeda', {
    target: 'http://andromeda:8906/',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/andromeda' : '/andromeda',
    },
  })),

  k2c(proxy('/xxx', {
    target: 'http://xxx-node:8906/',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/xxx' : '/',
    },
  })),
]
module.exports = list