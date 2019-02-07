const Router = require('koa-router')
const router = new Router()

const service = require('../../service/uploadService')
const valid = require('../../valid')

router.post('/bb/upload', async(ctx, next) => {
  let file = ctx.params.file
  valid.string('file', file).is().include(['data:image/', ';base64'])
  let type = file.substring(file.indexOf('data:image/')+11, file.indexOf(';base64,'))
  let content = file.substring(file.indexOf(';base64,')+8)
  let filename = `upload/${Math.random().toString(36).substr(2)}.${type}`
  valid.string('file.type', type).is().of(['png', 'jpeg', 'jpg', 'gif'])
  service.save({type, content, filename})
  ctx.ok(`/${filename}`)
})
module.exports = router